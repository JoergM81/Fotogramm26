


const dialog = document.getElementById("imageDialog");
const dialogImage = document.getElementById("dialogImage");
const dialogTitle = document.getElementById("dialogTitle");

window.openDialog = function(i, imgSrc, imgName){
    index = i;
    dialogImage.src = imgSrc;
    dialogTitle.textContent = imgName;
    dialog.showModal();
}

window.closeDialog = function(){
    dialog.close();
}