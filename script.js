

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


function openDialog(i) {
    clearDialog(); 
    Index = i - 1; // weil dein erstes Bild 1 ist
    updateDialog();
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

function clearDialog() {
    dialogImage.src = "";
    dialogTitle.textContent = "";
    dialogCounter.textContent = "";
}

function updateDialog() {
    dialogImage.src = images[Index].src;
    dialogTitle.textContent = images[Index].title;
    dialogCounter.textContent = `${Index + 1}/${images.length}`;
}

function go_right() {
    Index++;
    if (Index >= images.length) {
        Index = 0; // wieder zum Anfang
    }

    updateDialog();
}

function go_left() {
    Index--;
    if (Index < 0) {
        Index = images.length - 1; // zum letzten Bild
    }
    updateDialog();
}

function outsideClick(event) {
    if (event.target.id === "imageDialog") {
        dialog.close();
    }
}
function outsideClick() {
    dialog.close();
}


document.onkeydown = function (event) {
    if (!dialog.open) return;

    if (event.key === "ArrowRight") {
        go_right();
    } else if (event.key === "ArrowLeft") {
        go_left();
    } else if (event.key === "Escape"){
        closeDialog();
    }
}

