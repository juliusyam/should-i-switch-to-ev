const updateDimensions = () => {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  document.body.style.setProperty('--vw', `${ width }px`);
  document.body.style.setProperty('--vh', `${ height }px`);
}

if (document.readyState === 'complete') updateDimensions();

window.addEventListener('resize', updateDimensions);
window.addEventListener('load', updateDimensions);
