import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, order: null });
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // state for error situation

  // Fetch all characters from API
  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null); // for every request reload the error situation
      let allCharacters = [];
      let url = 'https://rickandmortyapi.com/api/character';
      
      try {
        while (url) {
          const response = await fetch(url);
          
          // API hata kontrolü
          if (!response.ok) {
            throw new Error('There is an error while getting data');
          }

          const data = await response.json();
          allCharacters = [...allCharacters, ...data.results];
          url = data.info.next; // Get next page URL
        }
        
        setCharacters(allCharacters);
        setFilteredCharacters(allCharacters);
      } catch (err) {
        setError(err.message); // save error situation to state
      } finally {
        setLoading(false);
      }
    };
    
    fetchCharacters();
  }, []);

  // Filter characters
  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase();
    setFilter(value);
    const filtered = characters.filter((char) =>
      char.name.toLowerCase().includes(value)
    );
    setFilteredCharacters(filtered);
    setCurrentPage(1); // Reset to first page
  };

  // Sort characters by column
  const handleColumnClick = (key) => {
    let order = 'asc';
    if (sortConfig.key === key && sortConfig.order === 'asc') {
      order = 'desc';
    } else if (sortConfig.key === key && sortConfig.order === 'desc') {
      order = null;
    }

    setSortConfig({ key, order });

    if (order === null) {
      setFilteredCharacters([...characters]);
    } else {
      const sorted = [...filteredCharacters].sort((a, b) => {
        if (order === 'asc') return a[key].localeCompare(b[key]);
        return b[key].localeCompare(a[key]);
      });
      setFilteredCharacters(sorted);
    }
  };

  // Handle page size change
  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  // Pagination logic
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedCharacters = filteredCharacters.slice(
    startIndex,
    startIndex + pageSize
  );

  const totalPages = Math.ceil(filteredCharacters.length / pageSize);

  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>

      {loading && <p>Loading characters...</p>}
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* Error message */}
      
      {!loading && !error && (
        <>
          {/* Filter and Sort Controls */}
          <div className="controls">
            <input
              type="text"
              placeholder="Filter by name..."
              value={filter}
              onChange={handleFilterChange}
            />
            <label>
              Page Size:
              <select value={pageSize} onChange={handlePageSizeChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={250}>250</option>
                <option value={1000}>All</option>
              </select>
            </label>
          </div>

          {/* Character Table */}
          <table>
          <thead>
              <tr>
                <th onClick={() => handleColumnClick('name')} className="sortable">
                  Name {sortConfig.key === 'name' && (sortConfig.order === 'asc' ? '⬆️' : '⬇️')}
                </th>
                <th onClick={() => handleColumnClick('species')} className="sortable">
                  Species {sortConfig.key === 'species' && (sortConfig.order === 'asc' ? '⬆️' : '⬇️')}
                </th>
                <th onClick={() => handleColumnClick('status')} className="sortable">
                  Status {sortConfig.key === 'status' && (sortConfig.order === 'asc' ? '⬆️' : '⬇️')}
                </th>
              </tr>
            </thead> 
            <tbody>
              {paginatedCharacters.length === 0 ? (
                <tr><td colSpan="3">No characters found.</td></tr>
              ) : (
                paginatedCharacters.map((char) => (
                  <tr
                    key={char.id}
                    onClick={() => setSelectedCharacter(char)}
                    className="clickable-row"
                  >
                    <td>{char.name}</td>
                    <td>{char.species}</td>
                    <td>{char.status}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>

          {/* Selected Character Details */}
          {selectedCharacter && (
            <div className="character-details">
              <h2>{selectedCharacter.name}</h2>
              <img
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
                className="character-image"
              />
              <p><strong>Species:</strong> {selectedCharacter.species}</p>
              <p><strong>Status:</strong> {selectedCharacter.status}</p>
              <p><strong>Gender:</strong> {selectedCharacter.gender}</p>
              <p><strong>Origin:</strong> {selectedCharacter.origin.name}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
