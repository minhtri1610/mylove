function reload_val() {
    location.reload();
}

function start_val() {
    $('#neon-heart').css('opacity', "0.2")
    $('#text-trailer').hide()
    $('.content-message').show()
    $('.wapper-content-image').show()
    playMusic()
    let audioEle = document.getElementById('audio');
    audioEle.play();
}