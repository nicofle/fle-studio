import Engine from './src/core/Engine.js';

const engine = new Engine();
await engine.init();

document.getElementById('generate').addEventListener('click', () => {
  document.getElementById('output').textContent = engine.generate();
});
