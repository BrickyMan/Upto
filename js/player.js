let player = document.querySelectorAll('.partnership-player_video');
let playerOnBut = document.querySelectorAll('.partnership-player-play');

playerOnBut[0].onclick = function() {
    console.log('hello');
    player[0].classList.toggle('partnership-player_video-full');
}