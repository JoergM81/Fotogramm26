

let img = [
    'img/20250619_102832.jpg',
    'img/20250619_103100.jpg'
];


const dialog = document.getElementById("imageDialog");
const dialogImage = document.getElementById("dialogImage");
const dialogTitle = document.getElementById("dialogTitle");

window.openDialog = function(i, imgSrc, imgName){
    index = i;
    dialogImage.src = imgSrc;
    dialogTitle.textContent = imgName;
    dialog.showModal();
}

function springDiolog() {
    let img = document.getElementById('1')
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        }
console.log(img)
}



window.closeDialog = function(){
    dialog.close();
}

