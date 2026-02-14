


const dialog = document.getElementById("imageDialog");
const dialogImage = document.getElementById("dialogImage");
const dialogTitle = document.getElementById("dialogTitle");

window.openDialog = function(imgSrc, imgName){
    dialogImage.src = imgSrc;
    dialogTitle.textContent = imgName;
    dialog.showModal();
}

window.closeDialog = function(){
    dialog.close();
}