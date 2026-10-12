# Temsili görsel kaydı

Bu görseller yerleşik Imagegen aracıyla üretildi. Gerçek Nurço ürün fotoğrafı değildir; yayın için kullanılamaz. Optimizasyon: Sharp, WebP quality 85, alpha korunarak.

## concept-waffle.webp

Use case: product-mockup. Asset: transparent cutout hero placeholder for a premium playful Turkish waffle website. Photoreal studio food photography, NOT 3D render. One large pale pink paper/cardboard dessert bucket with a gently tapered cylindrical body and wide oval opening, seen almost straight-on slightly from above. Filled above the rim with golden bite-size Belgian waffle squares, glossy dark chocolate drizzle, fresh strawberry halves and banana slices, appetizing carefully styled. Blank cup without any text, logos or graphic. Cup front occupies lower 55 percent, toppings upper 35 percent. Entire object centered, isolated on truly transparent background, soft directional light from upper left, natural paper texture, clean silhouette, no props no floating food no ground shadow no text no watermarks. Square image. This is a fictional concept product not an actual business photo.

## concept-ingredients.webp

Use case: product-mockup. Asset: ingredient sprite strip for website animation. Photoreal food photography NOT 3D render. Wide 3:1 transparent canvas divided into three equally sized square zones with generous clear padding, objects separated and NOT overlapping. Left zone: one golden brown thick Belgian waffle bite square, angled three-quarter view, textured crispy grid. Middle zone: one juicy strawberry half with tiny green leaf, cut face visible. Right zone: one thick banana slice, angled three-quarter view with creamy natural texture. Each object centered in its own equal square third, same scale roughly 65 percent of the zone, same soft upper-left studio lighting. True transparent background, no props no cast ground shadows no text no labels no borders. Fictional generic food ingredient placeholders.

## concept-empty.webp

Edit this fictional product placeholder into an EMPTY version of the EXACT same cup. Remove all waffle, chocolate, strawberries and bananas. Preserve the pink cardboard bucket silhouette, paper texture, lighting, perspective, camera framing, location and size exactly. Reveal the empty brown kraft interior and an intact oval pink rim. Keep the cup body bottom and sides exactly aligned with original. Transparent background. Do not add text logos or other objects. Photographic result, not 3D.

Orijinal dosyalar docs/source-assets/ altında tutulur.


## 9 Ekim 2026 — yeni marka yönü

Aktif görsel manifesti: `src/lib/content.ts`.

- `public/images/placeholders/waffle.webp`: mevcut Imagegen konseptinin taşınmış kopyası. Gerçek Nurço ürün fotoğrafı değildir.
- `public/images/placeholders/kumpir.webp`: bu yeniden tasarım için yerleşik **image_gen** aracıyla üretildi. 1100 × 1100, alpha korunan WebP. Orijinal: `docs/source-assets/concept-kumpir-source.png`.
- `public/images/brand/owner.webp`: kullanıcının “Unknown 2.png” dosyasının optimize edilmiş sürümü. Orijinal kaynak: `docs/source-assets/owner-source.png`. Kimlik, yüz ve içerik yeniden üretilmedi. Yalnızca “Biz Kimiz” alanında CSS `grayscale(1)` ile siyah beyaz gösterilir; CSS kadrajı video kontrollerini dışarıda bırakır.
- `public/fonts/`: Google Fonts kaynağından yerel olarak kaydedilmiş Bricolage Grotesque Extra Bold ve DM Sans Regular / Bold; OFL lisansları beraber tutulur.
- Kullanıcının tabela ve renkli afiş referansları görsel yön için incelendi; siteye kopyalanmadı.

### Kumpir için kullanılan nihai prompt

Use case: product-mockup. Asset type: transparent food cutout for a playful Turkish waffle and kumpir website. Create one appetizing large Turkish kumpir baked potato, split open and generously filled with creamy mashed potato and melted cheese, topped with sweetcorn, sliced green and black olives, diced pickles, colorful red pepper pieces and a light creamy sauce drizzle. A broad oval golden brown baked potato with crinkly natural skin, in a small plain off-white paper food boat barely visible underneath. Photoreal editorial studio food photography, soft upper left light, vibrant fresh ingredients. Three-quarter view slightly from above, long axis gently diagonal from bottom left to top right, entire food visible with generous clear space around all edges. Isolated on a genuinely transparent background. No plate, hands, utensils, text, branding, watermark or floating ingredients. This is a fictional concept food image, not an actual Nurço product. Square composition. Save output for use in the project.

Üretim `transparent_background: true` ile yerleşik araçta yapıldı; CLI / API fallback kullanılmadı.
