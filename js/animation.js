function fadeAnime() {
  var galleryItems = document.querySelectorAll('.-f-gallery li');
  var scroll = window.scrollY;
  var windowHeight = window.innerHeight;

  galleryItems.forEach(function(item) {
    var elemPos = item.getBoundingClientRect().top + scroll;

    if (scroll >= elemPos - windowHeight) {
      item.classList.add('flipLeft');
    } else {
      item.classList.remove('flipLeft');
    }
  });
}

window.addEventListener('scroll', function() {
  fadeAnime();
});

window.addEventListener('load', function() {
  fadeAnime();
});
