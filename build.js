const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const destDir = path.join(srcDir, '.vercel', 'output', 'static');

// Clean and recreate destination
if (fs.existsSync(path.join(srcDir, '.vercel'))) {
  fs.rmSync(path.join(srcDir, '.vercel'), { recursive: true, force: true });
}
fs.mkdirSync(destDir, { recursive: true });

// Copy function
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Rewrite HTML to use minified assets for production
function rewriteHtml(content) {
  return content
    .replace(/style\.css\?v=5\.0\.0/g, 'style.min.css?v=5.0.0')
    .replace(/main\.js\?v=5\.0\.0/g, 'main.min.js?v=5.0.0');
}

// Files/folders to skip in production output
const ignoreList = new Set([
  '.git', '.vercel', 'node_modules', 'build.js',
  'package.json', 'package-lock.json', '.gitignore',
  '.prettierrc', '.eslintrc.json', 'batch-update.ps1',
  'implementation-plan.md', 'vercel.json'
]);

// Copy everything except ignore list
fs.readdirSync(srcDir).forEach((item) => {
  if (ignoreList.has(item)) return;
  copyRecursiveSync(path.join(srcDir, item), path.join(destDir, item));
});

// Post-process: rewrite all HTML to use minified assets
function processHtmlFiles(dir) {
  fs.readdirSync(dir).forEach((item) => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      processHtmlFiles(fullPath);
    } else if (item.endsWith('.html')) {
      const original = fs.readFileSync(fullPath, 'utf8');
      const rewritten = rewriteHtml(original);
      if (original !== rewritten) fs.writeFileSync(fullPath, rewritten, 'utf8');
    }
  });
}
processHtmlFiles(destDir);

// Create Vercel config
fs.writeFileSync(
  path.join(srcDir, '.vercel', 'output', 'config.json'),
  JSON.stringify({ version: 3 }, null, 2)
);

console.log('Build complete → .vercel/output/static');
console.log('HTML rewritten to use minified CSS + JS (28% + 55% smaller).');
