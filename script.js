varosKepek.forEach((kep, melyik) => {
    console.log(kep.photo);
    cim = kep.title.split(' ', 1);
    console.log(cim);
    $('.kereso').append(`
    <div class="indexkep" data-index="${melyik}">
    <img src="${kep.photo}" alt="">
    </div>
    `);
    $('.miez').append(`
    <h3 class="kepcim">${cim[0]}</h3>
    `);
})

let melyikVaros = varosKepek.length - 1;
valasztas(melyikVaros);

// események élesítése
$('.jobbra').click(elore);
$('.balra').click(vissza);

let egeres;
$('.indexkep').hover((event) => {
        //    console.log(event.currentTarget);
        let sorszam = $(event.currentTarget).attr('data-index');
        egeres = parseInt(sorszam);
        $(`.kepcim:nth-of-type(${egeres+1})`).addClass('lathato');
    },
    (event) => {
        //    console.log(event.currentTarget);
        let sorszam = $(event.currentTarget).attr('data-index');
        egeres = parseInt(sorszam);
        if (egeres !== melyikVaros) {
            $(`.kepcim:nth-of-type(${egeres+1})`).removeClass('lathato');
        }
    })

// $('.indexkep').on('click', (event) => {
$('.indexkep').click((event) => {
    //    console.log(event.currentTarget);
    let sorszam = $(event.currentTarget).attr('data-index');
    melyikVaros = parseInt(sorszam);
    valasztas(melyikVaros);
})


$(document).keydown((event) => {
    if (event.which === 39) {
        elore();
    }
})
$(document).keydown((event) => {
    if (event.which === 37) {
        vissza();
    }
})

// meghívott függvények
function valasztas(melyik) {
    let varos = varosKepek[melyik];
    $('#photo').attr('src', varos.photo);
    $('#photo-title').text(varos.title);
    $('#photo-description').text(varos.description);
    if (varos.vertical === "flexend") {
        $('.kozepkep').removeClass("flexstart")
        $('.kozepkep').removeClass("flexcenter")
        $('.kozepkep').addClass(varos.vertical)
    }
    if (varos.vertical === "flexstart") {
        $('.kozepkep').removeClass("flexcenter")
        $('.kozepkep').removeClass("flexend")
        $('.kozepkep').addClass(varos.vertical)
    }
    if (varos.vertical === "flexcenter") {
        $('.kozepkep').removeClass("flexend")
        $('.kozepkep').removeClass("flexstart")
        $('.kozepkep').addClass(varos.vertical)
    }
    for (let i = 0; i < varosKepek.length; i++) {
        if (i === melyik) {
            $(`.indexkep:nth-of-type(${i+1})`).addClass('arnyek');
            $(`.kepcim:nth-of-type(${i+1})`).addClass('lathato');
        } else {
            $(`.indexkep:nth-of-type(${i+1})`).removeClass('arnyek');
            $(`.kepcim:nth-of-type(${i+1})`).removeClass('lathato');
        }
    }
}

function elore() {
    melyikVaros = melyikVaros + 1;
    if (melyikVaros >= varosKepek.length) {
        melyikVaros = 0;
    }
    valasztas(melyikVaros);
}

function vissza() {
    melyikVaros = melyikVaros - 1;
    if (melyikVaros < 0) {
        melyikVaros = varosKepek.length - 1;
    }
    valasztas(melyikVaros);
}