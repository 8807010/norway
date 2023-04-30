const button = document.getElementById('btn');
// button.setAttribute('disabled', '');

// if (window.innerWidth >= 1140) {
//   button.setAttribute('disabled', '');
// } else {
//   button.removeAttribute('disabled');
// };

window.onresize = function () {
  if (window.innerWidth >= 1140) {
    button.setAttribute('disabled', '');
  } else {
    button.removeAttribute('disabled');
  };
}
