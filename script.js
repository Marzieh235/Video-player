let PlayerArea = document.querySelector('.myplayer');
let media = PlayerArea.querySelector('video');
let controls = PlayerArea.querySelector('.myplayer__controls');
let play = controls.querySelector('.play')
let rwd = controls.querySelector('.rewind')
let fwd = controls.querySelector('.forward')
// let fullscreen = controls.querySelector('.fullscreen')


play.addEventListener('click', function () {
    if(media.paused) {
        togglePlayIcon();
        media.play();
    } else {
        media.pause();
        togglePlayIcon();
    }
})


rwd.addEventListener('click' , function() {
    media.currentTime = media.currentTime - 10 ;
})
fwd.addEventListener('click' , function() {
    media.currentTime = media.currentTime + 10 ;
})


function togglePlayIcon(){
    let icon = play.querySelector('i');
    icon.classList.toggle('ion-md-pause');
    icon.classList.toggle('ion-md-play');
}