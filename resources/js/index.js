function displayKeyInfo(key, code, keyCode) {
  const info = [key, code, keyCode];
  const keyInfoArr = document.querySelectorAll('.info');
  for (let i in keyInfoArr) {
    keyInfoArr[i].innerHTML = `<p>${info[i]}</p>`;
  }
}

document.body.addEventListener('keypress', (e) => {
  const keyCode = e.keyCode;
  const key = e.key === ' ' ? 'Spacebar' : e.key;
  const code = e.code;
  displayKeyInfo(key, code, keyCode);
});
