let melyikVaros = varosKepek.length - 1;
valasztas(varosKepek[melyikVaros]);

varosKepek.forEach((kep, melyik) => {
    console.log(kep.photo);
    $('.kereso').append(`
    <div class="indexkep" data-index="${melyik}">
    <img src="${kep.photo}" alt="">
    </div>
    `);
})

function valasztas(varos) {
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
}
$('.jobbra').click(elore);
$('.balra').click(vissza);
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

function elore() {
    melyikVaros = melyikVaros + 1;
    if (melyikVaros >= varosKepek.length) {
        melyikVaros = 0;
    }
    valasztas(varosKepek[melyikVaros]);
}

function vissza() {
    melyikVaros = melyikVaros - 1;
    if (melyikVaros < 0) {
        melyikVaros = varosKepek.length - 1;
    }
    valasztas(varosKepek[melyikVaros]);
}
// $('.indexkep').on('click', (event) => {
$('.indexkep').click((event) => {
    //    console.log(event.currentTarget);
    let sorszam = $(event.currentTarget).attr('data-index');
    melyikVaros = parseInt(sorszam);
    valasztas(varosKepek[melyikVaros]);
})