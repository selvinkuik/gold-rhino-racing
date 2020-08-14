var pckry = new Packery('.grid', {
  itemSelector: '.grid-item',
  columnWidth: '.grid-item--sizer',
  gutter: 20,
  percentPosition: true
})

var imgLoad = imagesLoaded('.grid', function() {
  pckry.layout()
})

imgLoad.on('progress', function() {
  pckry.layout()
});


