let myvideo = document.querySelectorAll(".videoplay");

    for (var i = 0; i < myvideo.length; i++) {
        myvideo[i].addEventListener("mouseover", function() {
            this.play();
        })
        myvideo[i].addEventListener("mouseleave", function() {
            this.pause();
        })
    }