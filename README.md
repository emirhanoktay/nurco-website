# Nurço — Waffle & Kumpir

Nurço ana sayfasının renkli, afiş estetiğinde yeniden tasarımı. Next.js App Router ve TypeScript. Bu yerel konsept sürümde ürün görselleri temsilidir; hikâye metni, resmî menü ve işletme bilgileri onay bekler.

## Çalıştırma

```sh
npm ci
npm run dev -- --webpack
```

Önizleme: http://127.0.0.1:3000

```sh
npm run typecheck
npm run build
npm start
```

Üretim derlemesi ortamın Turbopack alt süreç sınırlaması nedeniyle Webpack kullanır. Fontlar ve görseller yerel sunulur; Google Fonts veya Instagram'a sayfa yüklenirken istek gönderilmez.

## Bölümler

1. Nurço markası ve iki ürünü bir araya getiren sarı açılış
2. Pembe / kırmızı waffle afişi
3. Kobalt / sarı kumpir afişi
4. Açılır kategorilerle menü önizlemesi
5. Temsili mahalle çizimi, şube ve iletişim
6. Siyah beyaz işletme sahibi portresi ve sade “Biz Kimiz” alanı
7. Instagram bağlantılı konsept poster galerisi
8. Buluşma çağrısı ve alt menü

## Düzenleme noktaları

- `src/app/globals.css`: marka renkleri ve boşluk token'ları `:root` içinde; her bölüm ve mobil düzen ayrı açıklamalı bloklarda.
- `src/lib/content.ts`: ürün görsel manifesti, menü kategorileri, mevcut şube bilgileri ve Instagram bağlantısı.
- `src/components/`: her ana bölüm ayrı bileşen. `product-visual.tsx` tüm waffle/kumpir görsellerini yönetir.
- `src/components/story.tsx`: yalnızca bu bölümde kullanılan portre ve açıkça işaretli hikâye yer tutucusu.
- `src/components/section-reveals.tsx`: bir defalık hafif görünme hareketleri. Scroll zaman çizelgesi, sabitlenmiş hero veya sürekli animasyon yoktur.
- `public/fonts/`: Bricolage Grotesque ve DM Sans; OFL lisansları aynı klasörde.

## Gerçek fotoğraflarla değiştirme

1. İzinli fotoğrafları `public/images/brand/` içine ekleyin. Şeffaf ürün çekimleri mevcut afiş kompozisyonlarına doğrudan uyar; tek katmanlı görseller kullanılır, eşleşen animasyon kareleri gerekmez.
2. `src/lib/content.ts` içindeki ürün `src` / `alt` alanlarını güncelleyin ve ilgili `placeholder` değerini `false` yapın.
3. Bu ürünün konsept etiketi ve örnek waffle kabındaki tipografik marka otomatik kalkar. Yeni görsellerin kadrajını masaüstü ve mobilde kontrol edin.
4. Galeri açıklamasını, onaylı menüyü ve gerçek hikâyeyi güncelleyin.

`public/images/placeholders/` yalnızca temsili ürün varlıklarını içerir. Eski scroll animasyonunun kullanılmayan görselleri `placeholders/legacy/` altında korunmuştur. `public/images/brand/owner.webp` kullanıcı tarafından sağlanan gerçek portredir; bileşende her zaman CSS grayscale uygulanır. Kaynak fotoğraf `docs/source-assets/owner-source.png` içinde korunur. Portrede ekran görüntüsünün oynatıcı kontrolleri kadraj dışında tutulur.

## İçerik durumu

İşletme sahibi hakkında biyografi veya kuruluş hikâyesi uydurulmadı. Bayrampaşa iletişim bilgileri önceki projeden korundu; No:119 / 119A farkı, telefon ve saatler teyit bekliyor. Diğer şubeler eklenmedi. Tipografik Nurço kelime işareti tasarım konseptidir, sağlanan tabela logosunun birebir kopyası değildir.

`npm run check:release` mevcut temsili ürünler nedeniyle bilerek başarısız olur. Bir deployment komutu değildir. `noindex` korunmuştur. Bu çalışma yerel projede uygulanmıştır; yayın yapılmadı.

Görsel kaynakları ve üretim prompt'u: `docs/assets.md`. Kontrol sonuçları: `docs/verification.md`. Masaüstü ve mobil önizlemeler: `docs/screenshots/`.
