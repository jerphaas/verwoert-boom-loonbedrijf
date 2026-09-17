# R. Verwoert — Boomkwekerij & Loonbedrijf

Een statische bedrijfswebsite met eigen bedrijfsfotografie, een responsive ontwerp, afzonderlijke pagina's voor boomkwekerij en containerteelt, fotogalerijen en direct contact. Loonbedrijf blijft in de bedrijfsnaam; loonwerk wordt niet als dienst aangeboden.

De vormgeving heeft het karakter van een verzorgde kwekerijcatalogus: een gecentreerd origineel logo, grote schreefletters, een boogvormige openingsfoto met een kleinere werkfoto, brede dienstenregels en een asymmetrische fotogalerij. Warme papier-, blad- en groentinten sluiten aan op de bestaande merkidentiteit.

**Website:** https://jerphaas.github.io/verwoert-boom-loonbedrijf/

## Eenvoudig te onderhouden

De complete website staat in `site/` en bestaat uit gewone HTML, CSS en JavaScript. Geen database, CMS, framework, npm-installatie of bouwstap nodig.

| Bestand                    | Inhoud                                                 |
| -------------------------- | ------------------------------------------------------ |
| `site/index.html`          | Homepage, over ons, fotogalerij en contact             |
| `site/boomkwekerij.html`   | Vollegrondsteelt, 9 foto's en totaalleverancier        |
| `site/containerteelt.html` | Bomen in pot en plantzak, 3 foto's                     |
| `site/vacature.html`       | Vacature Machinist Boomkwekerij en direct solliciteren |
| `site/loonwerk.html`       | Doorverwijzing van de oude URL naar boomkwekerij       |
| `site/privacy.html`        | Feitelijke privacy-informatie over deze website        |
| `site/styles.css`          | Alle vormgeving en responsive opmaak                   |
| `site/script.js`           | Mobiel menu, fotogalerij en jaartal                    |
| `site/assets/`             | Lokale foto’s, lettertype, favicon en fontlicentie     |

Pas tekst rechtstreeks in de betreffende HTML-pagina aan. Algemene contactgegevens staan ook in de gedeelde kop- en voetteksten van de losse pagina’s. Houd die bij wijzigingen gelijk.

## Lokaal bekijken

Open `site/index.html` in een browser of serveer de map met een eenvoudige webserver:

```sh
python -m http.server 4173 --directory site
```

Open daarna http://localhost:4173/. Er is geen installatie van afhankelijkheden nodig.

## Publicatie

De GitHub Actions-workflow publiceert uitsluitend `site/` naar GitHub Pages na een push naar `main`. GitHub Pages is ingesteld op **GitHub Actions**. Werkbestanden en documentatie worden niet in de website opgenomen. De 404-pagina gebruikt het pad `/verwoert-boom-loonbedrijf/`; pas dit aan bij een andere repositorynaam of een eigen domein.

Deze GitHub Pages-versie vervangt het bestaande bedrijfsdomein niet. De telefoon- en e-maillinks verwijzen naar de bestaande openbare bedrijfscontactgegevens. De mailknop opent het e-mailprogramma van de bezoeker; de website bevat geen server of formulierverwerking.

## Inhoud en beeld

De bedrijfsinformatie komt van [de bestaande website](https://verwoertboom-loonbedrijf.nl/), geraadpleegd op 17 september 2026, en de later aangeleverde correcties. De twaalf door de gebruiker aangeleverde bedrijfsfoto's zijn als WebP-bestanden opgenomen, met behoud van de volledige beeldverhouding in de teeltgalerijen. Portretfoto's blijven ook in de vergroting volledig zichtbaar. De homepage toont een selectie en linkt naar beide complete galerijen. Zie [SOURCES.md](SOURCES.md) voor de herkomst en toewijzing. Er zijn geen klantbeoordelingen, projectresultaten of certificeringen verzonnen.

De lettertypen Manrope (lopende tekst) en DM Serif Display (koppen, normaal en cursief) zijn lokaal opgeslagen onder de SIL Open Font License; zie `site/assets/FONT-LICENSE.txt` en `site/assets/DM-SERIF-LICENSE.txt`. De bedrijfsfoto’s en merkidentiteit behouden hun bestaande rechten. Het openbaar maken van deze repository verleent geen algemene hergebruiklicentie voor die beelden.

De website gebruikt geen analytics, externe fontverzoeken of ingebedde kaarten. Google Maps wordt pas geopend na een klik op de routelink.

## Vacature

De vacature Machinist Boomkwekerij staat op `site/vacature.html`, in de hoofdnavigatie en op de homepage. Tekst en voorwaarden komen uit de aangeleverde personeelsadvertentie van 17 september 2026. De originele JPG is ongewijzigd te bekijken en te downloaden. Solliciteren gaat rechtstreeks via telefoon of e-mail aan Ruth Verwoert; er worden geen sollicitaties op de website opgeslagen. Werk bij het sluiten van de vacature ook het homepageblok en de navigatie bij.
