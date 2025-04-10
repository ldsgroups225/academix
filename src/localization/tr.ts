const resource = {
  hello: 'Merhaba',
  name: 'Ali Burhan Keskin',
  confirm: 'Onayla',
  cancel: 'İptal',  
  generalActivityIndicatorText: 'Yükleniyor...',
  pleaseWait: 'Lütfen Bekleyiniz... ',
  generalErrorText: 'Bir hata oluştu lütfen daha sonra tekrar deneyiniz.',  
  search: 'Ara',  
  noInternet: 'İnternet bağlantısı yok',
  yes: 'Evet',
  no: 'Hayır',
  exit: 'Çıkış',
  brand: 'Marka',
  published: 'Yayında',
  min: 'dk',
  piece: 'Adet', 
  time: 'Zaman',
  description: 'Açıklama',
  send: 'Gönder', 
  next: 'İleri',
  previous: 'Önceki',
  retry: "Tekrar Dene",

  navigation: {
    home: 'Ana Sayfa',
    profile: 'Profil',
    settings: 'Ayarlar',
    post: 'Gönderi'
  }
};  

export default resource;

export type ILocalization = typeof resource;
