function maFunction() {
    var para = document.querySelector("#monpara");
    para.style.color="red";
    para.style.backgroundColor="black";
}

function changeImage(){
    let displayImage = documentById('image1');
        if(displayImage.src.match('./img/soleil.png')){
            displayImage.src = './img/lune.png'
        } else {
            displayImage.src = './img/soleil.png';

        }

}
