var tip = document.querySelector('#Tip');
var cena = document.querySelector('#Cena');

var tipArray = [];
var outputTip = '<option value="">Svi uredjaji</option>';

for (var index = 0; index < objekat.length; index++) {
    var element = objekat[index];

    if (!tipArray.includes(element.proizvodjac)) {
        outputTip +=
            '<option value="' +
            element.proizvodjac +
            '">' +
            element.proizvodjac +
            '</option>';

        tipArray.push(element.proizvodjac);
    }
}

tip.innerHTML += outputTip;

var outputCena = '<option value="">Sve cene | Manje od</option>';

cene = [1e3, 2e3, 4e3, 8e3, 16e3, 32e3, 64e3, 128e3, 256e3, 512e3];

for (var i = 0; i < cene.length; i++) {
    outputCena += '<option value="' + cene[i] + '"> ' + cene[i] + '</option>';
}

cena.innerHTML += outputCena;