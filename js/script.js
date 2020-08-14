// var pckry = new Packery('.grid', {
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-item--sizer',
//   gutter: 20,
//   percentPosition: true
// })

// var imgLoad = imagesLoaded('.grid', function() {
//   pckry.layout()
// })

// imgLoad.on('progress', function() {
//   pckry.layout()
// })

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
      transform = 'translate(' + x + 'px, ' + y + 'px)'

  if (window.innerWidth > 1400) {
    transform += ' scale(' + scale + ')'
  }

  document.querySelector('.grid').style.transform = transform
}

ready(layout)
window.addEventListener('resize', layout)
