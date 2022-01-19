let saniye = 0;
let gostergeSaniye = 0;
let dakika = 0;
let gostergeDakika = 0;
let gostergeSaat = 0;
let saat = 0;
var gecenZaman = 0;

function Kronometre() {
	saniye++;
	if (saniye / 60 === 1) {
		saniye = 0;
		dakika++;
	}
	if (dakika / 60 === 1) {
		dakika = 0;
		saat++;
	}
	if (saniye < 10) {
		gostergeSaniye = "0" + saniye;
	} else {
		gostergeSaniye = saniye;
	}
	if (dakika < 10) {
		gostergeDakika = "0" + dakika;
	} else {
		gostergeDakika = dakika;
	}
	if (saat < 10) {
		gostergeSaat = "0" + saat;
	} else {
		gostergeSaat = saat;
	}
	document.getElementById("gosterge").innerHTML = gostergeSaat + ":" + gostergeDakika + ":" + gostergeSaniye;
}

function ZamaniBaslat() {
	gecenZaman = window.setInterval(Kronometre, 1000);
}

function ZamaniDuraklat() {
	window.clearInterval(gecenZaman);
}

function ZamaniSifirla() {
	window.clearInterval(gecenZaman);
	saniye = 0;
	dakika = 0;
	saat = 0;
	document.getElementById("gosterge").innerHTML = "00:00:00";
}