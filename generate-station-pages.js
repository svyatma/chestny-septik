import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import stations from './src/data/stationsData.json' with { type: 'json' };

const __dirname = dirname(fileURLToPath(import.meta.url));
const pagesRoot = path.resolve(__dirname, 'src/pages/StationsPages');

const brandFolders = {
  'ЕВРОБИОН': 'Evrobion',
  'ТОПАС': 'Topas',
  'АСТРА': 'Astra',
  'ЕВРОЛОС': 'Evrolos',
  'ЗОРДЕ': 'Zorde',
  'МАКС': 'Maks',
};

// Функция: из имени файла (без расширения) в PascalCase для компонента
function fileNameToComponentName(fileName) {
  const parts = fileName.split(/[-_]+/).filter(Boolean);
  return parts.map(part => {
    // Каждую часть делаем с большой буквы, остальные маленькие
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  }).join('');
}

const usedNames = new Set();
const importLines = [];
const routeLines = [];
const validPaths = [];

stations.forEach((station) => {
  const brand = brandFolders[station.brand] || 'Other';
  const fileName = station.image.split('/').pop().replace(/\.(webp|png|jpg|jpeg)$/i, '');
  const slug = fileName; // уже kebab-case
  
  let componentName = fileNameToComponentName(fileName);
  if (usedNames.has(componentName)) {
    componentName += `Id${station.id}`;
  }
  usedNames.add(componentName);
  
  const folderPath = path.join(pagesRoot, brand, componentName);
  fs.mkdirSync(folderPath, { recursive: true });
  
  const pageContent = `import StationPage from "../../../StationPage/StationPage.jsx";

function ${componentName}() {
  return <StationPage stationId={${station.id}} />;
}

export default ${componentName};
`;
  
  fs.writeFileSync(path.join(folderPath, `${componentName}.jsx`), pageContent);
  
  importLines.push(`import ${componentName} from "../pages/StationsPages/${brand}/${componentName}/${componentName}.jsx";`);
  routeLines.push(`  { path: "/${slug}", element: <${componentName} /> },`);
  validPaths.push(`  '/${slug}',`);
});

// Генерация stationRoutes.jsx
const routeContent = `// Автогенерируемый файл. НЕ редактировать вручную.
// Для обновления запусти: node generate-station-pages.js

${importLines.join('\n')}

export const stationRoutes = [
${routeLines.join('\n')}
];

export const stationValidPaths = [
${validPaths.join('\n')}
];
`;

fs.writeFileSync(path.resolve(__dirname, 'src/router/stationRoutes.jsx'), routeContent);

console.log(`✅ Страниц создано: ${stations.length}`);
console.log(`📁 Страницы: src/pages/StationsPages`);
console.log(`📄 Маршруты: src/router/stationRoutes.jsx`);
console.log(`\nВ App.jsx добавьте:\nimport { stationRoutes, stationValidPaths } from './router/stationRoutes';`);
console.log(`\nВ validPaths вставьте:\n...stationValidPaths,`);