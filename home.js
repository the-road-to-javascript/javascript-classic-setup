let isJavaScript = true;

setInterval(() => {
  if (isJavaScript) {
    document.querySelector('h1').textContent = 'Hello JavaScript';
    isJavaScript = false;
  } else {
    document.querySelector('h1').textContent = 'Hello HTML';
    isJavaScript = true;
  }
}, 1000);
