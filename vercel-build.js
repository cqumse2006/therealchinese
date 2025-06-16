const { execSync } = require('child_process');

// 安装依赖并构建
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

console.log('Building application...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Build completed successfully!');
