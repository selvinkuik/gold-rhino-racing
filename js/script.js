var pckry = new Packery('.grid', {
  itemSelector: '.grid-item',
  stamp: '.stamp',
  gutter: 8
})

var imgLoad = imagesLoaded('.grid', function() {
  pckry.layout()
})

imgLoad.on('progress', function() {
  pckry.layout()
});


