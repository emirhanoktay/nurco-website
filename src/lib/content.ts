/** Replace product paths and set placeholder:false when approved photography arrives. */
export const assets = {
  waffle: {
    src: "/images/placeholders/waffle.webp",
    alt: "Çilek, muz ve çikolata ile hazırlanan kova waffle konsepti; gerçek Nurço ürün fotoğrafı değildir.",
    placeholder: true,
  },
  kumpir: {
    src: "/images/placeholders/kumpir.webp",
    alt: "Mısır, zeytin ve renkli malzemelerle dolu kumpir konsepti; gerçek Nurço ürün fotoğrafı değildir.",
    placeholder: true,
  },
  owner: {
    src: "/images/brand/founder-portrait.png",
    alt: "Nurço’nun kurucusunun gülümseyen siyah beyaz portresi.",
    placeholder: false,
  },
} as const;

export const founderStory = [
  "Her şey kolay başlamadı. Nurço, hayatın karşısına çıkardığı zorlukların içinde kendi yolunu kurmaya karar verdi. 2. el Waffle makinesi ile başlayan bu yolculuk; emek, cesaret ve vazgeçmemekle zamanla insanların keyifle uğradığı bir yere dönüştü.",
  "Bugün Nurço sadece waffle ve kumpir sunan bir mekan değil; zor zamanların ardından yeniden başlamanın, kendi ayaklarının üzerinde durmanın ve yaptığı işe sevgisini katmanın bir sonucu. Her tabakta biraz emek, biraz neşe ve ‘iyi ki vazgeçmemişim’ hissi var.",
] as const;

export const social = {
  instagram: "https://www.instagram.com/nurcowaffle/",
  handle: "@nurcowaffle",
};

export const menuCategories = [
  {
    number: "01",
    name: "Waffle",
    note: "Tatlı bir mola",
    items: ["Kova waffle", "Klasik waffle"],
    description:
      "Waffle, meyve ve çikolata etrafında şekillenen tatlı seçenekler. Ürünler, içerikler ve fiyatlar onaylı menüyle tamamlanacak.",
  },
  {
    number: "02",
    name: "Kumpir",
    note: "Dolu dolu bir keyif",
    items: ["Kumpir"],
    description:
      "Sıcak bir kumpir molası. Malzeme seçenekleri, alerjen bilgileri ve fiyatlar onaylı menüyle tamamlanacak.",
  },
  {
    number: "03",
    name: "İçecekler",
    note: "Yanına bir yudum",
    items: [],
    description:
      "İçecek seçenekleri işletmenin güncel menüsüyle paylaşılacak. Bu kategori henüz onay bekliyor.",
  },
] as const;

/** Retained from the existing project; confirmation is still pending. */
export const branch = {
  name: "Bayrampaşa",
  neighborhood: "Yıldırım / İstanbul",
  address: "Yıldırım Mah., Ali Fuat Başgil Cd. No:119, Bayrampaşa / İstanbul",
  additionalAddresses: [
    "Yıldırım Mah. Ali Fuat Başgil Cad. No:124, Bayrampaşa / İstanbul",
    "Yıldırım Mah. Şehit Kamil Balkan Cad. No:13, Bayrampaşa / İstanbul",
  ],
  phone: "0552 400 71 96",
  phoneHref: "tel:+905524007196",
  hours: "09.00 – 01.00",
  status: "Adres, telefon ve çalışma saatleri teyit bekliyor.",
  maps: "https://www.google.com/maps/dir/?api=1&destination=Y%C4%B1ld%C4%B1r%C4%B1m%20Ali%20Fuat%20Ba%C5%9Fgil%20Cd%20No%20119%20Bayrampa%C5%9Fa%20%C4%B0stanbul",
};
