# Yeniden tasarım doğrulaması — 9 Ekim 2026

## Uygulanan kontroller

- `npm run typecheck`: başarılı.
- `npm run build`: Next.js 16.4.0 / Webpack; statik ana sayfa derlemesi başarılı.
- Yerel geliştirme sunucusu `npm run dev -- --webpack` ile çalıştırıldı; ana sayfa HTTP 200 döndürdü.
- In-app tarayıcıda 320, 360, 390, 768, 1024 ve 1440 px genişlikler kontrol edildi. Her birinde `documentElement.scrollWidth` viewport genişliğine eşit; yatay taşma yok.
- 1440 px masaüstü ve 390 px mobil düzenlerin görsel incelemesi yapıldı. Ürün bölümleri, menü, konum, portre, galeri ve footer kontrol edildi.
- Mobil menü açma, Escape ile kapatma ve odağı menü düğmesine geri getirme çalışıyor. Menü bağlantısı hedef bölüme gidip menüyü kapatıyor.
- Native menü kategorisi açılıp ürün adaylarını, onay durumunu ve iletişim bağlantısını gösteriyor; tekrar kapatılabiliyor.
- Tüm sayfa içi bağlantıların hedefleri mevcut. Telefon bağlantıları `tel:`; harita bağlantısı korunan adres için Google Maps yönlendirmesi; sosyal bağlantılar mevcut Instagram adresini kullanıyor. Telefon araması başlatılmadı, dış hesaplarda işlem yapılmadı.
- Yedi ürün/portre görüntüsü bölüm ziyaretlerinden sonra başarıyla yüklendi. Kırık görüntü yok. Alt bölümlerde native lazy-loading kullanılıyor; tam sayfa ekran görüntüsü tek başına yüklemeyi tetiklemediği için bölümler ayrıca ziyaret edildi.
- Portre DOM'da tam bir kez ve yalnızca `#hikaye` bölümünde. Hesaplanan stil `grayscale(1) contrast(1.06)`. Oynatıcı kontrolleri CSS kadrajının dışında; renkli hover durumu yok.
- Hero normal belge akışında. Sticky bölüm, scroll zaman çizelgesi, eski malzeme katmanları ve `useScroll` bağımlı kod yok.
- Tarayıcı konsolunda hata / uyarı görülmedi.
- `npm run check:release`: `waffle, kumpir` temsili varlıkları nedeniyle beklendiği gibi exit 1. Bu tasarım kontrolünün başarısızlığı değil, mevcut içerik durumunun işaretidir. Komut mevcut TypeScript ESM import'u için Node module-type uyarısı da yazabilir.

## Erişilebilirlik ve hareket

Türkçe sayfa dili, tek H1, başlıklı bölümler, skip link, belirgin klavye odakları, native details/summary ve açıklamalı mobil disclosure menüsü mevcut. CTA ana içerikte, footer ise ana içerik dışında ayrı tutulur. Küçük metinler için pembe üzerine koyu kırmızı yardımcı renk ve görseller üzerinde opak konsept etiketleri kullanıldı.

`prefers-reduced-motion: reduce`, CSS giriş / hover geçişlerini ve yumuşak scroll'u kapatır. Section reveal gözlemcisi aynı tercihe uyar; tercih çalışma sırasında değişirse aktif animasyonları iptal eder. Varsayılan HTML içerikleri görünürdür, JS kapalıyken gizlenen bölümler yoktur. OS azaltılmış hareket ve JS devre dışı senaryoları kaynak kodda incelendi; tarayıcı ayarıyla ayrıca emüle edilmedi.

## Kayıtlı önizlemeler

- `screenshots/home-desktop.jpg`: masaüstü hero.
- `screenshots/home-desktop-full.jpg`: tüm masaüstü sayfa.
- `screenshots/home-mobile.jpg`: mobil hero.
- `screenshots/home-mobile-full.jpg`: tüm mobil sayfa.

Bunlar yerel tarayıcı kontrolleridir. Fiziksel iOS/Android, yavaş ağ ve yayın ortamında performans ölçümü yapılmadı. Önceki sürümün scroll animasyonu / performans ölçümleri bu tasarım için geçerli değildir.

## İçerik sınırı

Ürünler açıkça konsept görselleridir. Hikâye açıkça metin yer tutucusudur; biyografi uydurulmadı. Mevcut şube bilgileri teyit etiketiyle korunur. Onaylı ürün fiyatları veya yeni şubeler eklenmedi. `noindex` açık, deployment yapılmadı.
