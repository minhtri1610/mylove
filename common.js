function playMusic() {
    let audioEle = document.getElementById('audio');
    let btnSound = document.getElementById("btn-sound");
    // let bground = document.getElementById("bground");
    // let boxMess = document.getElementsByClassName("box-mess")[0];

    if(audioEle.getAttribute('data-value') == 'off'){
        audioEle.play();
        audioEle.setAttribute('data-value', 'on');
        btnSound.firstChild.style.opacity = "1";
        // bground.style.opacity = "1";
        // boxMess.innerHTML = "Nhấn nút <span class='text-green'>xanh xanh</span> để xem tiếp nè...";
    } else{
        audioEle.pause();
        audioEle.setAttribute('data-value', 'off');
        btnSound.firstChild.style.opacity = "0.6";
        // bground.style.opacity = "0.3";
        // boxMess.innerHTML = "Lên nhạc đi Em ơi...";
    }
}