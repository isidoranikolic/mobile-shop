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

var search;
var selectedTip;
var selectedPrice;

document.querySelector('#pretraga').addEventListener('keyup', function() {
    search = this.value.toLowerCase();

    filterAndPrint();
});

document.querySelector('#Tip').addEventListener('change', function() {
    selectedTip = this.value.toLowerCase();

    filterAndPrint();
});

document.querySelector('#Cena').addEventListener('change', function() {
    selectedPrice = this.value;

    filterAndPrint();
});

function filterAndPrint() {
    var filtrirani = [...objekat];

    if (search) {
        var filtriraniSearch = objekat.filter(item => {
            return item.proizvodjac.toLowerCase().includes(search);
        });

        filtrirani = filtriraniSearch;
    }

    if (selectedTip) {
        var filtriraniTip = filtrirani.filter(item => {
            return item.proizvodjac.toLowerCase() === selectedTip;
        });

        filtrirani = filtriraniTip;
    }

    if (selectedPrice) {
        var filtriranaCena = filtrirani.filter(item => {
            return item.cena < +selectedPrice;
        });

        filtrirani = filtriranaCena;
    }

    var outputSearch = '';
    for (var index = 0; index < filtrirani.length; index++) {
        outputSearch += loadProduct(filtrirani[index]);
    }

    if (!outputSearch) {
        return printToScreen('<h1>Trenutno nemamo proizvode po tom kriterijumu.</h1>')
    }

    printToScreen(outputSearch);
}

function printToScreen(elements) {
    var prikaz = $('#prikazProizvoda .karte');

    prikaz.html(elements);
}

function firstRender() {
    var outputStart = '';

    for (var index = 0; index < objekat.length; index++) {
        outputStart += loadProduct(objekat[index]);
    }

    printToScreen(outputStart);
}

firstRender();