// // Lấy tham chiếu đến hộp quà và thêm sự kiện nhấp chuột
// const giftBox = document.getElementById("giftBox");
// giftBox.addEventListener("click", function () {
//     // Chuyển hướng đến trang HTML thứ hai sau khi nhấp vào hộp quà
//     window.location.href = "index2.html";
// });

var body = document.getElementsByTagName("body")[0];

function playMusic(){
    var myAudio = document.getElementById('playAudio');
    if (myAudio.duration > 0 && !myAudio.paused) {
        //Its playing...do your job

    } else {
        myAudio.play()
        //Not playing...maybe paused, stopped or never played.

    }
}

body.addEventListener("click",function(ev){
    playMusic()
})

function addClassToElementByClass(className, newClassName) {
    // Get the first element with the specified class
    var element = document.querySelector("." + className);

    if (element) {
        // Add the new class to the element
        element.classList.add(newClassName);
    } else {
        console.log("Element not found with class " + className);
    }
}

document.getElementById("giftImage").addEventListener("click", function() {
    var divToHide = document.getElementById("divToHide");
    divToHide.classList.add("show");
    var elements = document.getElementsByClassName("");
    addClassToElementByClass('gift-container', 'hidden')
    
});