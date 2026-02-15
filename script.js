

let images = [
    { src: 'img/20250619_102832.jpg', title: 'Bild Felsen' },
    { src: 'img/20250619_103100.jpg', title: 'Partnachklamm' },
    { src: 'img/20250808_154459.jpg', title: 'Uhu' },
    { src: 'img/20250808_155226.jpg', title: 'Uhu' },
    { src: 'img/20250903_102839.jpg', title: 'Schlange' },
    { src: 'img/20250915_192143.jpg', title: 'Sonnenuntergang mit Gewitterwolken' },
    { src: 'img/20251008_062934.jpg', title: 'Mond mit Wolken' },
    { src: 'img/20251123_141955.jpg', title: 'Eiszauber Winter' },
    { src: 'img/dji_fly_20250611_200820_119_1749665349323_photo_optimized.jpg', title: 'Luftaufnahme Meer und Strand' },
    { src: 'img/dji_fly_20250613_193544_151_1749836154678_photo_optimized.jpg', title: 'Luftaufnahme Strand' },
    { src: 'img/dji_fly_20250613_193906_159_1749836358344_photo_optimized.jpg', title: 'Luftaufnahme Meer' },
    { src: 'img/DSC00154.jpg', title: 'Kanal in Venedig' }
];

let Index = 0;
const dialog = document.getElementById("imageDialog");
const dialogImage = document.getElementById("dialogImage");
const dialogTitle = document.getElementById("dialogTitle");
const dialogCounter = document.getElementById("dialogCounter");


window.openDialog = function(i){
    Index = i - 1; // weil dein erstes Bild 1 ist
    updateDialog();
    dialog.showModal();
}

window.closeDialog = function(){
    dialog.close();
}

function updateDialog(){
    dialogImage.src = images[Index].src;
    dialogTitle.textContent = images[Index].title;
    dialogCounter.textContent = `${Index + 1}/${images.length}`;
}

window.go_right = function(){
    Index++;
    if(Index >= images.length){
        Index = 0; // wieder zum Anfang
    }
    updateDialog();
}

window.go_left = function(){
    Index--;
    if(Index < 0){
        Index = images.length - 1; // zum letzten Bild
    }
    updateDialog();
}

window.outsideClick = function(event) {
    if (event.target.id === "imageDialog") {
        event.target.close();
    }
}
window.outsideClick = function() {
    dialog.close();
}
