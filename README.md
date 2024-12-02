# Rick and Morty Characters Table

Bu proje, Rick and Morty dizisinin karakterlerinin listesini bir API'den alarak bir tablo şeklinde görüntüleyen kullanıcı dostu arayüzüne sahip bir React uygulamasıdır. Kullanıcılar, karakterleri isimlerine göre filtreleyebilir, sütunlarda sıralama yapabilir, sayfalama işlemleri gerçekleştirebilir ve karakterlere tıklayarak detaylarına ulaşabilir.

## Özellikler

- **Veri Çekme:** Rick and Morty API'si üzerinden karakter verilerini dinamik olarak çeker.
- **Filtreleme:** Kullanıcı, karakterlerin ismine göre filtreleme yapabilir.
- **Sıralama:** Her sütunda artan ya da azalan sırada sıralama yapılabilir.
- **Sayfalama:** Veriler sayfalara ayrılır ve kullanıcı istediği sayfayı görüntüleyebilir.
- **Karakter Detayları:** Kullanıcı, karakterin üzerine tıklayarak detaylı bilgilerine (görsel, tür, durum vb.) erişebilir.
- **Hata Yönetimi:** API hataları kullanıcıya bildirilebilir.

## Teknolojiler

- **React.js**: Uygulamanın kullanıcı arayüzü için.
- **CSS**: Uygulamanın stilini düzenlemek için.
- **Rick and Morty API**: Karakter verilerini almak için kullanılan API.

## Kurulum

### 1. Depoyu Kopyalayın
Bu depoyu kendi bilgisayarınıza kopyalamak için aşağıdaki komutu kullanabilirsiniz:
```bash
git clone https://github.com/<kullanici_adiniz>/rick-and-morty-characters.git
```
## 2. Gerekli Paketleri Yükleyin
Projede kullanılan bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:

```bash

cd rick-and-morty-characters
npm install
```
## 3. Uygulamayı Çalıştırın
Uygulamayı başlatmak için aşağıdaki komutu kullanabilirsiniz:

```bash
npm start
```
Bu komut, React uygulamasını yerel sunucuda çalıştıracak ve http://localhost:3000 adresinde açacaktır.  

## Kullanım  
**1) Filtreleme**: Karakterlerin isimlerine göre filtreleme yapmak için arama kutusuna yazabilirsiniz.

![image](https://github.com/user-attachments/assets/e6a45e06-b674-4ad3-b1ab-011540ffb0fa)  

**2) Sıralama**: Her sütuna tıklayarak sıralama yapabilirsiniz. Sıralama, artan veya azalan şekilde yapılabilir. İlk tıklama artan, ikinci tıklama ise azalan sıralama yapar. Üçüncü defa tıklarsanız tablo default haline döner.  

![image](https://github.com/user-attachments/assets/a991dd72-b1ce-4a7e-a082-a60b5474a7de)    

![image](https://github.com/user-attachments/assets/90a72192-4d0d-4c79-86d4-b237e6505e31)   

**3) Sayfalama**: Karakterlerin sayfalara ayrıldığını göreceksiniz. Sağ üstten sayfa boyutunu ayarlayabilirsiniz. Ayrıca Next ve Previous butonlarına tıklayarak önceki ve sonraki sayfalara geçiş yapabilirsiniz.   

**3.1) Sayfa Boyutu Ayarlama**:

![image](https://github.com/user-attachments/assets/2b158259-0707-4381-8190-65e468d5da07)  

**3.2) Sayfalar Arası Geçiş**:   

![image](https://github.com/user-attachments/assets/4770eb06-252a-4dbf-9750-0f173cd9e9e9)  


**4) Karakter Detayları**: Karakterin isminin üzerine tıklayarak karakterin görseli, türü, durumu ve diğer bilgilerini görebilirsiniz.     

![image](https://github.com/user-attachments/assets/79adbf82-77c9-4cdb-a85e-592e97a0e3ec)  

## **Genel Kullanıcı Arayüzü ** 

![image](https://github.com/user-attachments/assets/f0217b74-5a98-4f0b-a22d-7d9b4f5c1d3a)  

