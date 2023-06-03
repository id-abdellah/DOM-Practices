const passInp = document.querySelector('#passInp input');
const VisibilityEye = document.querySelector('#passInp span');

VisibilityEye.addEventListener('click', () => {
  if (passInp.getAttribute('type') == 'password') {
    passInp.type = 'text';
    VisibilityEye.textContent = 'visibility_off';
  } else {
    passInp.type = 'password';
    VisibilityEye.textContent = 'visibility';
  }
});
