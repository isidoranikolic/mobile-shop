function loadProduct(t) {
    var output = '';

    output += '<div class="card" onclick="openModal(' + t.id + ')">';
    output += '<input type="hidden" class="hidden-input" value="' + t.id + '" />';
    output +=
        '<div class="card-image"><img src="' +
        t.slika +
        '" alt="' +
        t.proizvodjac +
        ' ' +
        t.model +
        '"/></div>';
    output += '<div class="card-text">';
    output += '<div>';

    output += '<h4 class="card-title">' + t.proizvodjac + ' ' + t.model + '</h4>';

    for (var index = 0; index < t.spec.length; index++) {
        var element = t.spec[index];

        output +=
            '<small><span>' +
            element.naziv +
            '</span>: ' +
            element.vrednost +
            '</small>';
    }

    output += '</div>';

    output +=
        '<div><small class="ocena"><span>Ocena</span>: <span>' +
        t.ocena +
        '<span></span></span></small><p class="cena"><span>' +
        t.cena.toFixed(2) +
        '</span> RSD</p></div>';
    output += '</div>';
    output += '</div>';

    return output;
}

var first = '';
var second = '';

for (var index = 0; index < objekat.length; index++) {
    const element = objekat[index];

    if (element.ocena >= 9) {
        first += loadProduct(element);
    } else if (element.ocena <= 6) {
        second += loadProduct(element);
    }
}

function printToScreen() {
    var element1 = $('#najpopularniji .karte');
    var element2 = $('#budzetKupovina .karte');

    element1.html(first);
    element2.html(second);
}

printToScreen();