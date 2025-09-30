const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder image
function createPlaceholderSVG(width = 400, height = 400, text = 'صورة المنتج') {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f3f4f6"/>
  <rect x="10" y="10" width="${width-20}" height="${height-20}" fill="#e5e7eb" stroke="#d1d5db" stroke-width="2" rx="8"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="16" fill="#6b7280">
    ${text}
  </text>
</svg>`;
}

// Create placeholder images
const images = [
  { name: 'bk1.jpg', text: 'عود كمبودي' },
  { name: 'bk2.jpg', text: 'بخور عربي' },
  { name: 'bk3.jpg', text: 'مسك أصيل' },
  { name: 'bk4.jpg', text: 'بخور تقليدي' },
  { name: 'bk5.jpg', text: 'عود فاخر' },
  { name: 'bk6.jpg', text: 'عنبر طبيعي' },
  { name: 'bk7.jpg', text: 'ورد عطري' },
  { name: 'bk8.jpg', text: 'صندل أصيل' },
  { name: 'bk9.jpg', text: 'بخور مميز' },
  { name: 'bk10.jpg', text: 'عود ملكي' },
  { name: 'bk11.jpg', text: 'مسك فاخر' },
  { name: 'bk12.jpg', text: 'عنبر أصيل' },
  { name: 'oud-category.jpg', text: 'العود' },
  { name: 'bukhoor-category.jpg', text: 'البخور' },
  { name: 'musk-category.jpg', text: 'المسك' },
  { name: 'amber-category.jpg', text: 'العنبر' },
  { name: 'rose-category.jpg', text: 'الورد' },
  { name: 'sandalwood-category.jpg', text: 'الصندل' }
];

const seedDir = path.join(__dirname, '..', 'public', 'seed');

// Ensure directory exists
if (!fs.existsSync(seedDir)) {
  fs.mkdirSync(seedDir, { recursive: true });
}

// Generate placeholder images
images.forEach(({ name, text }) => {
  const svgContent = createPlaceholderSVG(400, 400, text);
  const filePath = path.join(seedDir, name.replace('.jpg', '.svg'));
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created: ${filePath}`);
});

console.log('All placeholder images created successfully!');

