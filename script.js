let kepParis = {
    photo: "images/paris.jpg",
    title: "Párizs (franciául: Paris)",
    description: "Franciaország fővárosa. Az ország északi részén, a Szajna folyó partján terül el, az Île-de-France régió (vagy Région Parisienne) szívében. Párizs Európa egyik legnépesebb városa."
}

let kepLondon = {
    photo: "images/london.jpg",
    title: "London az Egyesült Királyság és azon belül Anglia fővárosa",
    description: "a legnagyobb városi terület az Egyesült Királyságban; Európában Isztambul és Moszkva után a legnépesebb város. A Londoni-medencében, a Temze folyó két partján terül el. A története egészen az alapító rómaiakig nyúlik vissza, akik a várost Londiniumnak nevezték. A középkor emlékeit a város központjában található City of London őrzi, a mai London e köré épült ki."
}
let kepRoma = {
    photo: "images/roma.jpg",
    title: "Róma Olaszország fővárosa",
    description: "Lazio régió központja (közigazgatásilag comune), a hajdani Római Birodalom központja. Az ország legnagyobb és legnépesebb városa 1285,3 km²-en mintegy 2,6 millió lakossal.[2] Területébe ékelve található a Vatikán, a római katolikus egyház központja, a pápa székhelye, a világ legkisebb független állama."
}

let melyikVaros = 0;
let varosKepek = [kepParis, kepLondon, kepRoma];

function valasztas(varos) {
    $('#photo').attr('src', varos.photo);
    $('#photo-title').text(varos.title);
    $('#photo-description').text(varos.description);
}
$('#kovetkezo').click(() => {
    console.log(melyikVaros);
    melyikVaros = melyikVaros + 1;
    console.log(melyikVaros);
    if (melyikVaros >= varosKepek.length) {
        melyikVaros = 0;
    }
    valasztas(varosKepek[melyikVaros]);
})