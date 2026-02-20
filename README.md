# 🔷 Prizma i Piramida — Elektronske lekcije

Interaktivna web aplikacija sa elektronskim lekcijama iz prostorne geometrije, namenjena učenicima osnovne škole. Projekat je kreiran u okviru master rada sa ciljem da učenicima olakša savladavanje gradiva iz oblasti prizme i piramide koristeći savremene nastavne alate.

---

##  Sadržaj

- [O projektu](#-o-projektu)
- [Struktura lekcija](#-struktura-lekcija)
- [Tehnologije](#-tehnologije)
- [Pokretanje projekta](#-pokretanje-projekta)
- [Struktura fajlova](#-struktura-fajlova)
- [Interaktivne funkcionalnosti](#-interaktivne-funkcionalnosti)

---

## 📖 O projektu

Aplikacija sadrži **38 interaktivnih lekcija** organizovanih u dve tematske celine — **Prizma** i **Piramida**. Svaka lekcija uključuje teorijska objašnjenja, vizuelne prikaze, formule, rešene zadatke, interaktivne 3D modele i kviz za samoproveru znanja.

### Ciljevi projekta

- Razvijanje prostornog i logičkog mišljenja učenika
- Vizuelizacija geometrijskih tela putem interaktivnih 3D modela (GeoGebra)
- Korak-po-korak uputstva za crtanje prostornih figura
- Povezivanje geometrije sa svakodnevnim životom i praktičnim primerima
- Samoprovera znanja kroz kvizove na svakoj lekciji

---

## 📚 Struktura lekcija

### Prizma (18 lekcija)

| Tema | Lekcije |
|---|---|
| Pojam i vrste prizme | Pojam i osnovni elementi, Vrste prizme, Dijagonale i dijagonalni preseci |
| Kako nacrtati prizmu | Korak-po-korak uputstvo za crtanje |
| Površina i zapremina | Formule za površinu, Formule za zapreminu |
| Pravilna trostrana prizma | Crtanje, Površina, Zapremina |
| Pravilna četvorostrana prizma | Crtanje, Površina, Zapremina |
| Pravilna šestostrana prizma | Crtanje, Površina, Zapremina |
| Mreža prizme | Razvoj prizme u ravan |
| Osobine prizme | Ojlerova formula, simetrija, preseci |
| Primena u životu | Prizme u svakodnevnom okruženju |

### Piramida (20 lekcija)

| Tema | Lekcije |
|---|---|
| Pojam i vrste piramide | Pojam i osnovni elementi, Vrste piramide, Karakteristični preseci, Teorema o tri normale |
| Kako nacrtati piramidu | Korak-po-korak uputstvo za crtanje |
| Površina i zapremina | Formule za površinu, Formule za zapreminu |
| Pravilna trostrana piramida | Crtanje, Površina, Zapremina |
| Pravilna četvorostrana piramida | Crtanje, Površina, Zapremina |
| Pravilna šestostrana piramida | Crtanje, Površina, Zapremina |
| Mreža piramide | Razvoj piramide u ravan |
| Osobine piramide | Ojlerova formula, odnos visine i apoteme |
| Primena u životu | Piramide u arhitekturi i inženjerstvu |
| Zarubljena piramida | Pojam, osobine, formule za zapreminu i površinu |

---

## 🛠 Tehnologije

| Tehnologija | Namena |
|---|---|
| **HTML5** | Struktura stranica i semantički elementi |
| **CSS3** | Dizajn, animacije, responzivni raspored |
| **JavaScript** | Interaktivnost, kviz engine, dinamičke komponente |
| **GeoGebra** | 3D modeli geometrijskih tela (embed putem iframe-a) |

Projekat ne zahteva nikakav build sistem — sve su čisti HTML/CSS/JS fajlovi koji se mogu servirati sa bilo kog statičkog web servera.

---

## 🚀 Pokretanje projekta

### Preduslov

- [Node.js](https://nodejs.org/) (verzija 14 ili novija) — potreban samo za lokalni razvojni server

### Koraci

1. **Klonirati ili preuzeti** projekat na lokalni računar.

2. **Otvoriti terminal** u root direktorijumu projekta (`projekatWeb/`).

3. **Pokrenuti lokalni server:**

   ```bash
   npx -y serve . -p 3000
   ```

4. **Otvoriti pregledač** i navigirati na:

   ```
   http://localhost:3000
   ```

> **Napomena:** Ukoliko ne želite koristiti Node.js, projekat je moguće otvoriti i putem bilo kog drugog lokalnog servera (npr. VS Code Live Server ekstenzija, Python `http.server`, XAMPP, itd.) ili direktno otvaranjem `index.html` fajla u pregledaču — jedino ograničenje u tom slučaju može biti učitavanje GeoGebra 3D modela.

---

## 📁 Struktura fajlova

```
projekatWeb/
├── index.html              # Početna strana sa pregledom svih lekcija
├── style.css               # Globalni stilovi za celu aplikaciju
├── components.js           # Header, footer i sidebar navigacija
├── script.js               # GeoGebra toggle, toggle rešenja, koraci crtanja
├── quiz.js                 # Quiz engine (multiple-choice, tačno/netačno)
├── arrowDown.png           # Ikonica za dropdown meni
│
├── prizma/                 # Sve lekcije o prizmi
│   ├── PojamIVrstePrizme/  # Pojam, vrste, dijagonale
│   ├── KakoDaNactamPrizmu/ # Crtanje prizme
│   ├── PovrsinaZapremina/  # Formule za P i V
│   ├── PravilnaTrostranaPrizma/
│   ├── PravilnaCetvorostranaPrizma/
│   ├── PravilnaSestostranaPrizma/
│   ├── MrezaPrizme/        # Mreža (razvoj) prizme
│   ├── OsobinePrizme/      # Osobine (Ojlerova formula...)
│   └── PrimenaUZivotu/     # Primena prizme u praksi
│
└── piramida/               # Sve lekcije o piramidi
    ├── PojamIVrstePiramide/ # Pojam, vrste, preseci, teorema
    ├── KakoDaNactamPiramidu/
    ├── PovrsinaZapremina/
    ├── PravilnaTrostranaPiramida/
    ├── PravilnaCetvorostranaPiramida/
    ├── PravilnaSestostranaPiramida/
    ├── MrezaPiramide/
    ├── OsobinePiramide/
    ├── PrimenaUZivotu/
    └── ZarubljenaPiramida/
```

---

## ⚡ Interaktivne funkcionalnosti

### 🧩 Kvizovi za samoproveru

Svaka lekcija sadrži kviz na kraju stranice. Kviz podržava dva tipa pitanja:
- **Multiple-choice** — izbor jednog tačnog odgovora od ponuđenih
- **Tačno/Netačno** — odgovaranje da li je tvrdnja tačna ili ne

Nakon odgovaranja, učenik dobija instant povratnu informaciju sa obeleženim tačnim i netačnim odgovorima i konačnim rezultatom. Kviz je moguće ponoviti neograničen broj puta.

### 🌐 GeoGebra 3D modeli

Lekcije sadrže ugrađene interaktivne 3D modele koji se prikazuju klikom na odgovarajuće dugme. Modeli omogućavaju rotiranje, zumiranje i posmatranje geometrijskih tela iz različitih uglova, čime se razvija prostorno mišljenje učenika.

### 📝 Rešeni zadaci

Obogaćene lekcije sadrže rešene zadatke sa sakrivenim rešenjima. Učenik može sam da pokuša da reši zadatak, a zatim klikom na dugme „Prikaži rešenje" da proveri svoj postupak.

###  Korak-po-korak crtanje

Lekcije o crtanju prizme i piramide sadrže stepenasta uputstva gde se svaki korak postepeno otkriva klikom, čime se simulira proces crtanja u svesci.

---

## 📄 Licenca

Ovaj projekat je kreiran u okviru master rada. Sva prava zadržana.
