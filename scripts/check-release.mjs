import { assets } from '../src/lib/content.ts';

const placeholders = Object.entries(assets).filter(([, asset]) => asset.placeholder);
if (placeholders.length) {
  console.error('Yayına hazır değil: temsili varlıklar mevcut:', placeholders.map(([name]) => name).join(', '));
  console.error('Gerçek, izinli Nurço görsellerini ve işletme onaylarını tamamlayın. Bu kontrol deployment yapmaz.');
  process.exitCode = 1;
} else {
  console.log('Görsel yer tutucu kontrolü geçti. İşletme içeriği ve kullanım izinleri ayrıca onaylanmalıdır.');
}
