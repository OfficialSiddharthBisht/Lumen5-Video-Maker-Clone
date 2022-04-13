window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  
  function lightbox_open() {
    var lightBoxVideo = document.querySelector(".VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.querySelector('.light').style.display = 'block';
    document.querySelector('.fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.querySelector(".VisaChipCardVideo");
    document.querySelector('.light').style.display = 'none';
    document.querySelector('.fade').style.display = 'none';
    lightBoxVideo.pause();
  }