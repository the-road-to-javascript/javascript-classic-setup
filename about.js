let fullName = 'Robin Wieruch';
let count = 0;

setInterval(() => {
  count++;

  const chars = fullName.slice(0, count % (fullName.length + 1));
  const newText = `About ${chars}`;

  document.querySelector('h1').textContent = newText;
}, 250);
