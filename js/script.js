function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function layout() {
  var scale = window.innerWidth / 1400,
      x = (window.innerWidth - 1400) / 2,
      y = (window.innerHeight - 1003.22) / 2,
      mobileY = (window.innerHeight - document.querySelector('.mobile').getBoundingClientRect().height) / 2,
      transform = 'translate(' + x + 'px, ' + y + 'px)'

  if (window.innerWidth > 1400) {
    transform += ' scale(' + scale + ')'
  }

  document.querySelector('.grid').style.transform = transform
  document.querySelector('.mobile').style.transform = 'translateY(' + mobileY + 'px)'
}

ready(layout)
window.addEventListener('load', layout)
window.addEventListener('resize', layout)
