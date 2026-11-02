const zdjeciaPotraw = document.querySelectorAll(".zdjecie-potrawy");
const oknoPrzepisu = document.querySelector("#okno-przepisu");
const tytulPrzepisu = document.querySelector("#tytul-przepisu");
const trescPrzepisu = document.querySelector("#tresc-przepisu");
const zamknijPrzepis = document.querySelector("#zamknij-przepis");

const przepisy = {
    paella: {
        tytul: "Paella",
        skladniki: [
            "300 g ryżu",
            "200 g kurczaka",
            "150 g krewetek",
            "1 papryka",
            "1 cebula",
            "2 ząbki czosnku",
            "500 ml bulionu",
            "Szafran, sól i pieprz"
        ],
        przygotowanie: "Pokrój kurczaka i warzywa. Podsmaż cebulę, czosnek i kurczaka na patelni. Dodaj ryż, paprykę, przyprawy oraz bulion. Gotuj, aż ryż wchłonie płyn. Pod koniec dodaj krewetki i gotuj jeszcze kilka minut."
    },
    tortilla: {
    tytul: "Tortilla española",
    skladniki: [
        "4 ziemniaki",
        "5 jajek",
        "1 cebula",
        "Oliwa z oliwek",
        "Sól i pieprz"
    ],
    przygotowanie: "Obierz ziemniaki i pokrój je w cienkie plasterki. Podsmaż je z cebulą na oliwie, aż zmiękną. Roztrzep jajka, dodaj ziemniaki i cebulę, a następnie wymieszaj. Wlej całość na patelnię i smaż na małym ogniu. Gdy spód się zetnie, ostrożnie przewróć tortillę i usmaż z drugiej strony."
    },
    churros: {
    tytul: "Churros",
    skladniki: [
        "250 ml wody",
        "150 g mąki pszennej",
        "50 g masła",
        "2 jajka",
        "Szczypta soli",
        "Olej do smażenia",
        "Cukier i cynamon do posypania"
    ],
    przygotowanie: "Zagotuj wodę z masłem i solą. Zdejmij garnek z ognia, wsyp mąkę i energicznie wymieszaj. Po lekkim ostudzeniu dodaj jajka i wymieszaj na gładkie ciasto. Przełóż je do rękawa cukierniczego z gwiazdkową końcówką. Wyciskaj paski ciasta na rozgrzany olej i smaż na złoty kolor. Na koniec posyp cukrem z cynamonem."
    },
    patatas: {
    tytul: "Patatas bravas",
    skladniki: [
        "600 g ziemniaków",
        "2 łyżki oliwy z oliwek",
        "2 ząbki czosnku",
        "1 łyżeczka słodkiej papryki",
        "Pół łyżeczki ostrej papryki",
        "200 g passaty pomidorowej",
        "Sól i pieprz"
    ],
    przygotowanie: "Obierz ziemniaki i pokrój je w kostkę. Wymieszaj z oliwą, solą i pieprzem, a następnie piecz w temperaturze 200°C przez około 30–40 minut, aż będą złociste. W międzyczasie podsmaż czosnek, dodaj paprykę i passatę pomidorową. Gotuj kilka minut, aż sos zgęstnieje. Podawaj ziemniaki polane pikantnym sosem."
    },
    gazpacho: {
    tytul: "Gazpacho",
    skladniki: [
        "1 kg dojrzałych pomidorów",
        "1 ogórek",
        "1 czerwona papryka",
        "1 mała cebula",
        "2 ząbki czosnku",
        "3 łyżki oliwy z oliwek",
        "2 łyżki octu winnego",
        "Sól i pieprz"
    ],
    przygotowanie: "Umyj pomidory, ogórka i paprykę. Pokrój warzywa na mniejsze kawałki. Dodaj cebulę, czosnek, oliwę, ocet, sól i pieprz. Zmiksuj wszystkie składniki na gładką masę. Wstaw zupę do lodówki na kilka godzin. Podawaj schłodzoną."
    },
    pulpo: {
    tytul: "Pulpo a la gallega",
    skladniki: [
        "1 kg ośmiornicy",
        "500 g ziemniaków",
        "Oliwa z oliwek",
        "2 łyżeczki słodkiej papryki",
        "Sól gruboziarnista",
        "Liść laurowy"
    ],
    przygotowanie: "Ugotuj ośmiornicę w osolonej wodzie z liściem laurowym, aż będzie miękka. Ugotuj ziemniaki w osobnym garnku. Pokrój ośmiornicę na kawałki, a ziemniaki w plastry. Ułóż je na talerzu, skrop oliwą z oliwek, posyp słodką papryką i gruboziarnistą solą. Podawaj na ciepło."
    }
};

zdjeciaPotraw.forEach(zdjecie => {
    zdjecie.addEventListener("click", () => {
        const nazwaPrzepisu = zdjecie.dataset.przepis;
        const przepis = przepisy[nazwaPrzepisu];

        if (!przepis) return;

        tytulPrzepisu.textContent = przepis.tytul;

        trescPrzepisu.innerHTML = `
            <h3>Składniki:</h3>
            <ul>
                ${przepis.skladniki.map(skladnik => `<li>${skladnik}</li>`).join("")}
            </ul>
            <h3>Przygotowanie:</h3>
            <p>${przepis.przygotowanie}</p>
        `;

        oknoPrzepisu.hidden = false;
    });
});

zamknijPrzepis.addEventListener("click", () => {
    oknoPrzepisu.hidden = true;
});

oknoPrzepisu.addEventListener("click", event => {
    if (event.target === oknoPrzepisu) {
        oknoPrzepisu.hidden = true;
    }
});

const pytaniaQuizu = [
    {
        pytanie: "Co najbardziej lubisz podczas podróży?",
        odpowiedzi: [
            "Plaże i morze",
            "Zabytki i architekturę",
            "Muzykę i tradycję",
            "Jedzenie i lokalne smaki"
        ]
    },
    {
        pytanie: "Jak najchętniej spędzasz wolny czas?",
        odpowiedzi: [
            "Spacerując nad morzem",
            "Zwiedzając muzea",
            "Odkrywając lokalne festiwale",
            "Odpoczywając w klimatycznych kawiarniach"
        ]
    },
    {
        pytanie: "Jaki klimat najbardziej Ci odpowiada?",
        odpowiedzi: [
            "Ciepły i nadmorski",
            "Miejski i pełen energii",
            "Gorący i słoneczny",
            "Łagodny i śródziemnomorski"
        ]
    },
    {
        pytanie: "Co jest dla Ciebie najważniejsze w podróży?",
        odpowiedzi: [
            "Piękne widoki",
            "Wielkie atrakcje",
            "Kultura i tradycja",
            "Relaks i dobre jedzenie"
        ]
    }
];
let aktualnePytanie = 0;
let odpowiedziQuizu = [];

const quizZawartosc = document.querySelector("#quiz-zawartosc");

function pokazPytanie() {
    const pytanie = pytaniaQuizu[aktualnePytanie];

    quizZawartosc.innerHTML = `
        <h3>${pytanie.pytanie}</h3>

        <div class="odpowiedzi-quizu">
            ${pytanie.odpowiedzi.map((odpowiedz, indeks) => `
                <button type="button" class="odpowiedz-quizu" data-odpowiedz="${indeks}">
                    ${odpowiedz}
                </button>
            `).join("")}
        </div>

        <p>Pytanie ${aktualnePytanie + 1} z ${pytaniaQuizu.length}</p>
    `;

    quizZawartosc.querySelectorAll(".odpowiedz-quizu").forEach(przycisk => {
        przycisk.addEventListener("click", () => {
            odpowiedziQuizu.push(Number(przycisk.dataset.odpowiedz));
            aktualnePytanie++;

            if (aktualnePytanie < pytaniaQuizu.length) {
                pokazPytanie();
            } else {
                pokazWynikQuizu();
            }
        });
    });
}

function pokazWynikQuizu() {
    const punkty = [0, 0, 0, 0];

    odpowiedziQuizu.forEach(odpowiedz => {
        punkty[odpowiedz]++;
    });

    const miasta = [
        {
            nazwa: "Barcelona",
            opis: "To miasto dla Ciebie, jeśli kochasz morze, plaże i niezwykłą architekturę."
        },
        {
            nazwa: "Madryt",
            opis: "To idealne miejsce, jeśli lubisz wielkie miasta, muzea i mnóstwo atrakcji."
        },
        {
            nazwa: "Sewilla",
            opis: "To miasto dla Ciebie, jeśli fascynują Cię tradycje, flamenco i gorący hiszpański klimat."
        },
        {
            nazwa: "Walencja",
            opis: "To świetny wybór, jeśli cenisz śródziemnomorski klimat, odpoczynek i pyszną kuchnię."
        }
    ];

    const najwyzszyWynik = Math.max(...punkty);
    const zwyciezca = punkty.indexOf(najwyzszyWynik);
    const wynik = miasta[zwyciezca];

    quizZawartosc.innerHTML = `
        <h3>Twoim idealnym miastem jest: ${wynik.nazwa}!</h3>
        <p>${wynik.opis}</p>
        <button type="button" id="powtorz-quiz">Rozwiąż ponownie</button>
    `;

    document.querySelector("#powtorz-quiz").addEventListener("click", () => {
        aktualnePytanie = 0;
        odpowiedziQuizu = [];
        pokazPytanie();
    });
}

pokazPytanie();

const przyciskMenu = document.querySelector("#menu-hamburger");
const listaMenu = document.querySelector("#menu-lista");

przyciskMenu.addEventListener("click", () => {
    const menuJestOtwarte = listaMenu.classList.toggle("menu-otwarte");

    przyciskMenu.setAttribute("aria-expanded", menuJestOtwarte);
    przyciskMenu.setAttribute(
        "aria-label",
        menuJestOtwarte ? "Zamknij menu" : "Otwórz menu"
    );
});

listaMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        listaMenu.classList.remove("menu-otwarte");
        przyciskMenu.setAttribute("aria-expanded", "false");
        przyciskMenu.setAttribute("aria-label", "Otwórz menu");
    });
});