const PRAWDA = document.getElementById('prawda')
const WYZWANIE = document.getElementById('wyzwanie')
const TEKST  = document.getElementById('tresc')
const RESET = document.querySelector('.reset')

let iloscPrawd = parseInt(0)
let iloscWyzwan = parseInt(0)

let pyt = [
    'Wolisz być zdominowany przez kogoś, czy dominować nad kimś w łóżku?',
    'Czy poślubiłbyś tatusia, który był od ciebie o kilka lat starszy?',
    'Czy kiedykolwiek zachowywałeś się, jakbyś miał orgazm w miejscu nie przeznaczonym do tego?',
    'Jaka jest Twoja ulubiona pozycja?',
    'Czy ktoś kiedykolwiek wszedł do ciebie, kiedy sikałeś/aś?',
    'Jaki jest Twoja najostrzejsza fantazja w łóżku?',
    'Kim jest młodsza osoba, z którą się umawiałeś?',
    'Ile razy w tygodniu uprawiasz seks lub chciałbyś/aś?',
    'Czy kiedykolwiek pływałeś bez stróju kąpielowyego?',
    'Czy kiedykolwiek robiłeś to w domu rodziców?',
    'Czy kiedykolwiek nasikałeś w spodnie?',
    'Czy kiedykolwiek pocałowałeś chłopaka/dziewczyne swojej najlepszej przyjaciółki/przyjaciela?',
    'Czy byłeś kiedyś nagi publicznie? ',
    'Czy kiedykolwiek sikałeś/aś w basenie?',
    'Czy kiedykolwiek zdradzałeś partnera z jego najlepszym przyjacielem?',
    'Czy kiedykolwiek natknęliście się na swoich rodziców, którzy to robią?',
    'Jaki był najdłuższy czas bez seksu/masturbacji?',
    'Czy kiedykolwiek miałeś przyjemność zjeść gluta?',
    'Kogo boisz się oglądać nago?',
    'Czy kiedykolwiek wysłałeś niewłaściwej osobie wiadomość z kategorii sexting?',
    'Czy kiedykolwiek zrobiłeś sobie seksowne zdjęcie?',
    'Kto jest najseksowniejszą osobą w tym pokoju?',
    'Czy kiedykolwiek zamieniłeś bieliznę ze swoim partnerem?',
    'Masz jakieś fetysze? Opowiedz o nich.',
    'Czy kiedykolwiek zostałeś przyłapany na robieniu tego w obecności innych?',
    'Czy umawiałbyś się z dwiema osobami jednocześnie, gdybyś mógł? Jeśli tak, kto to jest?',
    'Jaka jest najbardziej kusząca cecha płci przeciwnej?',
    'Co robisz, gdy myślisz o osobie, którą kochasz?',
    'Czy kiedykolwiek przyłapałeś kogoś, kogo znasz, uprawiającego seks?',
    'Czy kiedykolwiek spotykałeś się z kimś tylko dla seksu?',
    'Czy kiedykolwiek wziąłeś/ bądź wziąłbyś od kogoś pieniądze za uprawianie seksu?',
    'Czy kiedykolwiek rozmawiałeś sprośnie z kimś tej samej płci?',
    'Jakie jest najdziwniejsze miejsce, w którym kiedykolwiek się z kimś kochałeś?',
    'Kiedy ostatni raz miałeś niekontrolowaną przygodę na jedną noc i dlaczego wymknęło się to spod kontroli?',
    'Jakie jest twoje ulubione wspomnienie seksualne?',
    'Jaki był najbardziej elektryzujący dotyk, jakiego kiedykolwiek doświadczyłeś i dlaczego?',
    'Czy masz pamięć seksualną, której, jak sądzisz, nikt nigdy nie będzie w stanie przewyższyć?',
    'Jaki jest twój ulubiony rodzaj gry wstępnej? ',
    'Wolałbyś/eś polizać czyjąś rękę czy nogę? ',
    'Jak myślisz, jaki rodzaj stroju najbardziej Ci odpowiada?',
    'Jaka jest twoja najbardziej ulubiona zabawka erotyczna?',
    'Kiedy po raz pierwszy zacząłeś używać zabawek erotycznych?',
    'Czy kiedykolwiek zastanawiałeś się nad trójkątem lub czwórkątem?',
    'Czy kiedykolwiek robiłeś to z jedną przypadkową osobą w ciągu jednego dnia?',
    'Co może Cię podniecić w dowolnym miejscu?',
    'Czy myślisz, że twój partner kiedykolwiek udawał orgazm, robiąc to z tobą?',
    'Czy kiedykolwiek byłeś podniecony w niewłaściwym miejscu?',
    'Czy kiedykolwiek uprawiałeś seks z kimś, kogo nie znasz?',
    'Czy jest jakaś piosenka, która może Cię podniecić i to w dowolnym miejscu?',
    'Czy w tym pokoju jest ktoś, z kim chciałbyś się przespać?',
    'Jak myślisz, który strój z Twojej kolekcji sprawia, że jesteś najbardziej atrakcyjna?',
    'Z iloma osobami spałeś do tej pory?',
    'Najbardziej wolisz seks z makijażem czy bez?',
    'O kim najbardziej fantazjujesz?',
    'Czy gadałeś/aś z kimś o sprawach seksualnych?',
    'Czy ktoś kiedyś widział cię nago?',
    'Jak myślisz, jaki każdy gracz jest w łóżku?',
    'Jeśli twój partner poprosi cię o ukaranie go, co zrobisz?',
    'Jaki jest twój rekord w masturbacji w jeden dzień?',
    'Najbardziej wstydliwa rzecz, jaką zrobiłeś z miłości?',
    'Jaka jest fantazja seksualna, której nie spełniłeś?',
    'Jaki jest twój fetysz seksualny?',
    'Na którą partię polityczną głosujesz?',
    'Czy zrobiłbyś to ze swoim kuzynem lub kuzynem?',
    'Czy zrobiłbyś to z kimś tej samej płci? ',
    'Czy wziąłbyś udział w orgii? ',
    'Jaki masz najbardziej obrzydliwy nawyk? ',
    'O kim myślałeś, kiedy ostatnio się masturbowałeś? ',
    'Jaką masz opinię o kostiumach erotycznych?',
    'Czy chciałbyś, uprawiać seks przez telefon/wiadomości',
    'Jak bardzo lubisz być całowany/a w szyję?',
    'Jak często oglądasz niegrzeczne filmy?',
    'Jaka jest Twoja grzeszna przyjemność, do której rzadko się przyznajesz?',
    'Opowiedz o swoim najlepszym doświadczeniu seksualnym',
    'Jaka jest Twoja opinia na temat uprawiania seksu w grupie?',
    'Czy obserwowałbyś, jak twój partner uprawia seks z kimś innym?',
    'Jakie części ciała lubisz być całowane?',
    'Czy kiedykolwiek rozważyłbyś uprawianie seksu analnego?',
    'Czy rozważyłbyś seks ze swoim nauczycielem? Jeśli tak, kto z kim?',
    'Czy nadal jesteś dziewicą? Jeśli tak, komu zamierzasz to dać?',
    'Gdybyś mógł zrobić każdemu z tej sali, co chcesz, co by to było?',
    'Czy czasami wyobrażasz sobie kogoś z tego pokoju nago?',
    'Jaki typ chłopca / dziewczyny cię pociąga? '

]
let wyz = [
    'Usuń jedną sztukę ubrania',
    'Pokaż ostatni tekst, który wysłał ci twój ex',
    'Twerkuj przez minutę',
    'Poliż ucho osoby, która jest obok ciebie.',
    'Pochwal się ekspresją orgazmu.',
    'Udawaj, że jesteś zakochany w kimś, kogo nie ma.',
    'Wyjmij banana z lodówki i zjedz go kusząco.',
    'Przez 2 minuty udawaj taniec na rurze.',
    'Stwórz film podkreślający wartość fizycznej bliskości',
    'Podejdź do ulubionej osoby od tyłu i wsadź jej palec w odbyt.',
    'Przez dwie minuty udawaj uwodzicielską małpę.',
    'Umieść na Facebooku lub Instagramie status z napisem „Czuję się napalony”.',
    'Wyślij swojemu towarzyszowi zdjęcie siebie w bikini.',
    'Udawaj, że się rozbierasz i filmujesz.',
    'Zdejmij jedną bieliznę bez zdejmowania całej garderoby.',
    'Zawiąż sobie oczy i pocałuj pierwszą osobę, której możesz dotknąć.',
    'Zrób taniec na kolanach na kimś w tym pokoju.',
    'Pozwól wszystkim w tym pokoju sprawdzić historię przeglądarki.',
    'Wejdź na serwis randkowy i spróbuj znaleźć dla siebie odpowiednik.',
    'Szepnij coś uwodzicielsko komuś w tym pokoju do ucha.',
    'Odegraj swoje ulubione porno.',
    'Opowiedz żart o seksie',
    'Wybierz dwie osoby, które muszą się pocałować.',
    'Daj się pomasować w uwodzicielski sposób przez osobę siedzącą obok',
    'Masuj stopy osobie siedzącej po lewej stronie',
    'Połóż się na dowolnej osobie płci przeciwnej',
    'Usiądź na kolanach osoby po twojej prawej przez następne 3 rundy',
    'Przeprowadź wykład o męskim układzie płciowym. ',
    'Zadzwoń na losowo wybrany numer i udawaj, że dzwonisz z ogłoszenia matrymonialnego w celu spotkania się',
    'Zamknij oczy. Reszta grupy wybierze osobę, którą musi Cię pocałować. Musisz odgadnąć kto to był ',
    'Włącz swoją ulubioną stronę porno ',
    'Przeprowadź wykład o żeńskim układzie płciowym.',
    'Zasymuluj osiąganie orgazmu.',
    'Usiądź na czyiś kolanach przez następne 3 rundy.',
    'Wymień 5 innych określeń na sex.',
    'Każda z osób w grupie może zadać Ci jedno dowolne pytanie, na które musisz odpowiedzieć szczerze.'
]
let losowe = Math.floor(Math.random() * 10)
// console.log(losowe)

function losujLiczbyBezPowtorzen(ilosc, zakres) {
    var liczbyP = [];
    var liczbyW = [];
    for (var i = 1; i <= zakresLiczbPrawda; i++) {
      liczbyP.push(i);
    } 
    for (var i = 1; i <= zakresLiczbWyz; i++) {
        liczbyW.push(i);
      } 
    var wynikP = [];
    var wynikW = [];
    for (var j = 0; j < iloscLiczbPrawda; j++) {
      var losowyIndexP = Math.floor(Math.random() * liczbyP.length);
      var wylosowanaLiczbaP = liczbyP.splice(losowyIndexP, 1)[0];
      wynikP.push(wylosowanaLiczbaP);
    //   console.log(pyt[wynik[j]])
    }
    for (var k = 0; k < iloscLiczbWyz; k++) {
        var losowyIndexW = Math.floor(Math.random() * liczbyW.length);
        var wylosowanaLiczbaW = liczbyW.splice(losowyIndexW, 1)[0];
        wynikW.push(wylosowanaLiczbaW);
      //   console.log(pyt[wynik[j]])
      }
      console.log(wyz.length);
    PRAWDA.addEventListener('click', function() {
        if(iloscPrawd >=pyt.length) {
            alert('Pula pytań wyczerpana')
        } else {
        PRAWDA.classList.toggle('ukryty')
        WYZWANIE.classList.toggle('ukryty')
        RESET.classList.toggle('ukryty')

            TEKST.innerHTML = `
                <p id='head1' class='header'>${pyt[wynikP[iloscPrawd]]}</p>
                <p id='head2' class='header'>${pyt[wynikP[iloscPrawd]]}</p>
                <p id='head3' class='header'>${pyt[wynikP[iloscPrawd]]}</p>
                <p id='head4' class='header'>${pyt[wynikP[iloscPrawd]]}</p>
                <p id='head5' class='header'>${pyt[wynikP[iloscPrawd]]}</p>
            `
            iloscPrawd++
        

    }})

    RESET.addEventListener('click', function() {
        PRAWDA.classList.toggle('ukryty')
        WYZWANIE.classList.toggle('ukryty')
        RESET.classList.toggle('ukryty')

        TEKST.innerHTML = ''
    })
    //383 pytan 
    //167 wyzwan
    
    WYZWANIE.addEventListener('click', function() {
        if(iloscWyzwan>=wyz.length) {
            alert('Pula pytań wyczerpana')
    } else {
        PRAWDA.classList.toggle('ukryty')
        WYZWANIE.classList.toggle('ukryty')
        RESET.classList.toggle('ukryty')
            TEKST.innerHTML = `
                <p id='head1' class='header'>${wyz[wynikW[iloscWyzwan]]}</p>
                <p id='head2' class='header'>${wyz[wynikW[iloscWyzwan]]}</p>
                <p id='head3' class='header'>${wyz[wynikW[iloscWyzwan]]}</p>
                <p id='head4' class='header'>${wyz[wynikW[iloscWyzwan]]}</p>
                <p id='head5' class='header'>${wyz[wynikW[iloscWyzwan]]}</p>
            `
            console.log(wyz[wynikW[iloscWyzwan]])

            iloscWyzwan++
    }})
    return wynikP,wynikW;
  }
  
  var iloscLiczbPrawda = pyt.length - 1;
  var zakresLiczbPrawda = pyt.length - 1;
  var iloscLiczbWyz = wyz.length - 1;
  var zakresLiczbWyz = wyz.length - 1;
  var wylosowaneLiczby = losujLiczbyBezPowtorzen(iloscLiczbPrawda, zakresLiczbPrawda);
//   var wylosowaneLiczby = losujLiczbyBezPowtorzen(iloscLiczbWyz, zakresLiczbWyz); //






