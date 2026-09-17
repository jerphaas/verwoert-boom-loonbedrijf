# R. Verwoert — Boomkwekerij & Loonbedrijf

Een nieuwe, statische bedrijfswebsite met eigen bedrijfsfotografie, een responsive ontwerp, informatie over boomkwekerij en loonwerk, een fotogalerij en direct contact.

**Website:** https://jerphaas.github.io/verwoert-boom-loonbedrijf/

## Eenvoudig te onderhouden

De complete website staat in `site/` en bestaat uit gewone HTML, CSS en JavaScript. Geen database, CMS, framework, npm-installatie of bouwstap nodig.

| Bestand                  | Inhoud                                             |
| ------------------------ | -------------------------------------------------- |
| `site/index.html`        | Homepage, over ons, fotogalerij en contact         |
| `site/boomkwekerij.html` | Boomkwekerij, containerteelt en totaalleverancier  |
| `site/loonwerk.html`     | Werkzaamheden en machines                          |
| `site/privacy.html`      | Feitelijke privacy-informatie over deze website    |
| `site/styles.css`        | Alle vormgeving en responsive opmaak               |
| `site/script.js`         | Mobiel menu, fotogalerij en jaartal                |
| `site/assets/`           | Lokale foto’s, lettertype, favicon en fontlicentie |

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

Bedrijfsinformatie en foto’s komen van [de bestaande website](https://verwoertboom-loonbedrijf.nl/), geraadpleegd op 17 september 2026. De foto’s zijn als geoptimaliseerde WebP-bestanden opgenomen. Zie [SOURCES.md](SOURCES.md) voor de herkomst. Er zijn geen klantbeoordelingen, projectresultaten of certificeringen verzonnen.

Het lettertype Manrope is lokaal opgeslagen en beschikbaar onder de SIL Open Font License; zie `site/assets/FONT-LICENSE.txt`. De bedrijfsfoto’s en merkidentiteit behouden hun bestaande rechten. Het openbaar maken van deze repository verleent geen algemene hergebruiklicentie voor die beelden.

De website gebruikt geen analytics, externe fontverzoeken of ingebedde kaarten. Google Maps wordt pas geopend na een klik op de routelink.
