function a(a) {
    var e = $('.product-modal');
    e.show();
    var n = e.find('.modal-window'),
        o = '';
    $('title').html(a.proizvodjac + ' ' + a.model),
        (o += '<span class="close-button">&times;</span>'),
        (o += '<div class="modal-header">'),
        (o += '<h3>' + a.proizvodjac + ' ' + a.model + '</h3>'),
        (o += '</div>'),
        (o += '<div class="modal-body">'),
        (o += '<div class="left">'),
        (o +=
            '<img src="' +
            a.slika +
            '" alt="' +
            a.proizvodjac +
            ' ' +
            a.model +
            '">'),
        (o += '</div>'),
        (o += '<div class="right"><div>');
    for (var index = 0; index < a.spec.length; index++) {
        var element = a.spec[index];

        o += '<p><span>' + element.naziv + '</span>: ' + element.vrednost + '</p>';
    }

    o +=
        '</div><div><div><p class="ocena"><span>Ocena</span>: <span>' +
        a.ocena +
        '<span></span></span></p><p class="cena"><span>' +
        a.cena.toFixed(2) +
        '</span> RSD</p></div></div>';
    (o += '</div>'),
    (o += '</div>'),
    n.html(o),
        $('.close-button').click(function() {
            $('.product-modal').hide(), $('title').html('Mobile shop');
        }),
        window.addEventListener('click', function(a) {
            a.target == document.querySelector('.product-modal') &&
                ($('.product-modal').hide(), $('title').html('Mobile shop'));
        });
}

function openModal(id) {
    a(objekat.find(item => item.id === id));
}