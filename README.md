# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Valérie Muller

  #### Je startniveau:
  Blauw

  #### Je focus:
  Surface plane
 
</detail>


## Je website

<details>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.porsche.com/netherlands/nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  <img src="readme-images/detailpagina-taycan-volledig.png" width="375px" alt="Detailpagina van de Porsche Taycan (https://www.porsche.com/netherlands/nl/models/taycan/taycan-models/taycan-turbo-gt-wp/)">

  #### Screenshot(s) van de tweede pagina (small screen):
  <img src="readme-images/modellen-vergelijken-volledig.png" width="375px" alt="Pagina om Porsche modellen te vergelijken (https://www.porsche.com/netherlands/nl/models/?compare=Y1AFP1)">

</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Gebruik https://www.a11yproject.com/checklist/

- **Duidelijke Taal**:
  De website gebruikt over het algemeen duidelijke taal, maar sommige technische termen en marketingtaal kunnen moeilijk te begrijpen zijn voor sommige gebruikers.

- **Alt-Attributen**:
  Niet alle afbeeldingen hebben alt-attributen. Dit moet worden toegevoegd om de toegankelijkheid te verbeteren.

- **Tekstalternatieven voor complexe afbeeldingen**:
  Complexe afbeeldingen zoals grafieken en kaarten missen tekstalternatieven. Dit is essentieel voor gebruikers die schermlezers gebruiken.

- **Zichtbare Focusstijl**:
  Interactieve elementen hebben een zichtbare focusstijl, wat goed is voor toetsenbordnavigatie.

- **Toetsenbordfocusvolgorde**:
  De focusvolgorde komt overeen met de visuele lay-out, wat de navigatie vergemakkelijkt.

- **Gebruik van Heading-Elementen**:
  Heading-elementen worden correct gebruikt om inhoud te introduceren, maar de volgorde kan soms verbeterd worden voor een logischer structuur.

- **Gebruik van Lijst-Elementen**:
  Lijst-elementen (`ol`, `ul`, `dl`) worden correct gebruikt voor lijstinhoud, wat de leesbaarheid verbetert.

- **Skip Link**:
  Er is geen zichtbare skip link aanwezig. Dit zou toegevoegd moeten worden om gebruikers snel naar de hoofdinhoud te laten springen.

- **Gebruik van `label`-Elementen**:
  Niet alle invoerelementen hebben een bijbehorend `label`-element. Dit moet worden gecorrigeerd om de toegankelijkheid te verbeteren.

- **Ondertiteling en Transcripties**:
  Video's hebben geen ondertiteling en audio heeft geen transcripties. Dit is cruciaal voor gebruikers met gehoorproblemen.

- **Contrast**:
  Het contrast voor tekst, iconen en randen van invoerelementen is over het algemeen goed, maar kan op sommige plaatsen verbeterd worden.

- **Responsive Design**:
  De site is goed te gebruiken op zowel desktop als mobiele apparaten, zonder horizontaal scrollen.

**Dit wil ik gaan proberen te verbeteren**
- Alt-attributen toevoegen aan alle afbeeldingen
- Tekstalternatieven voor complexe afbeeldingen
- Zichtbare skip link toevoegen
- Alle invoerelementen een bijbehorend `label`-element geven
- Contrast verbeteren waar nodig

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina (1): 
  Detailpagina van de Porsche Taycan
  - <img src="readme-images/schets-detail.JPG" width="375px" alt="breakdown van de detailpagina van de Porsche Taycan">

  ### de hele pagina (2): 
  Pagina om Porsche modellen te vergelijken
  - <img src="readme-images/schets-vergelijken.JPG" width="375px" alt="breakdown van de pagina om Porsche modellen te vergelijken">

  ### dynamisch deel (bijv menu): 
  Hamburgermenu
  - <img src="readme-images/schets-menu.JPG" width="375px" alt="breakdown van het hamburgermenu">

</details>


## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik heb voor de eerste pagina alle HTML opgestelt en de basis van mijn CSS opgesteld.
  Mijn HTML is nog niet helemaal semantisch correct. Ik moet de HTML nog op gaan breken in sections, articles, etc.
  Ik vind het tot nu toe nog niet zo heel lastig, ik heb alleen wat moeite met het onderzoeken van de toegankelijkheid. 
  En het zelf gebruiken van bijvoorbeeld de screenreader.
  Ik heb helaas ook de breakdown schetsen veel te lang uitgesteld. 
  Daardoor kwam ik er pas tegen het einde van het blok achter hoe handig die schets zou zijn geweest aan het begin van het proces...
  Dan had ik denk ik mijn HTML veel eerder netjes kunnen opbreken in de juiste hoeveelheid sections etc.. 
  In plaats van dat ik achteraf nog heel veel heb moeten knippen en plakken en schuiven en bewerken omdat ik erg veel sections en classes en id's had.

  **Herkansing notitie**

  Aangezien ik mijn README niet heel erg up to date had gehouden tijdens het programmeren is het lastig om nog screenshots toe te voegen van hoe ver ik was op dit moment in het proces. Daarom heb ik mijn best gedaan om het in zoveel mogelijk detail uit te leggen.


  ### Agenda voor meeting

  | student 1 (Valérie)      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | Dit hebben wij met ons groepje eigenlijk niet gedaan...  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting

  - Sections beginnen met h2's (kopjes aanpassen in mijn HTML)
  - Sections mogen (probeer wel semantische HTML te gebruiken)
  - nth of child proberen te vermijden?
  - Is het echt een button of een link?

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik begon me steeds meer af te vragen of ik misschien een te ambitieuze website had gekozen. Er zitten veel dynamische elementen in die ik niet goed wist te vertalen naar code, en ik merkte dat dit een beetje overweldigend aanvoelde. De HTML en CSS die ik tot nu toe had opgebouwd, zagen er visueel wel mooi uit, maar ik voelde me vastlopen bij de complexere onderdelen. Daarnaast kwam ik erachter dat ik nog nauwelijks aan de tweede pagina was begonnen, wat me wel stress gaf, aangezien ik daar eigenlijk nu al een begin mee had moeten maken. Maar omdat de eerste pagina zo veel aandacht vroeg, had ik nog geen kans gehad om de tweede op te zetten. Ik weet dat ik daar snel een start mee moest maken, anders liep ik het risico tijd tekort te komen tegen het einde van het project. (Dit was vervolgens ook wat er gebeurde helaas).

  **Herkansing notitie**

  Ook hier weer helaas niet goed bij gehouden. En ook hier heb ik weer mijn best gedaan om zo gedetailleerd mogelijk mijn poces te beschrijven.


  ### Agenda voor meeting

  | student 1 (Valérie)     | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | Hoe kom ik aan het juiste font?  | en dit             | en ik dit    | en dan ik dat    |
  | Zijn mijn sections zo goed ingedeeld? | dit als er tijd is | nog een punt | dit wil ik zeker |
  | Gebruik ik id's op de goede manier?            | ...                | ...          | ...              |

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - "Hoofd" sections classes geven
  - Onder" sections aanroepen met bijv nth of type/child --> dus wel nth of child gebruiken
  - Section in section mag
  - Class namen mogen vaker op een pagina genoemt worden,  id namen niet
  - Dus bijv 2 afbeeldingen in 2 verschillende sections zijn hetzelfde gestijlt mag je ze dezelfde class naam geven

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):
  - Nog niet kunnen doen (01-10)

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Deze week is de HTML voor beide pagina's eindelijk helemaal af. Ik heb ervoor gezorgd dat de structuur voor elke pagina klopt en alle secties, artikelen en elementen nu netjes zijn opgenomen. Dat was een hele stap vooruit en gaf me wel wat meer overzicht. De CSS voor de eerste pagina is ook bijna compleet, met alle basisstijlen en opmaak die ik wilde bereiken. Voor de tweede pagina heb ik wel al een eerste opzet in CSS, maar er moet nog behoorlijk wat aan gebeuren om het te krijgen zoals ik wil. 
  Ik merk dat het soms lastig is om alles bij elkaar te laten komen. Het voelt alsof ik nog steeds veel moet aanpassen en verbeteren, en ik heb vaak het idee dat ik door de bomen het bos niet meer zie. Vooral de details in de layout en de meer dynamische stukken kosten veel tijd, en ik begin me af te vragen of ik dit alles binnen de deadline kan afronden.
  Het helpt wel dat ik in ieder geval de HTML helemaal af heb en de basisstijl voor de eerste pagina al goed staat. Dat geeft me een fundament om op verder te bouwen, maar het blijft lastig om de rust te bewaren en gestructureerd verder te werken zonder overweldigd te raken.
  
  **Herkansing notitie**
  
  Ook deze week heb ik mijn voortgang niet helemaal bijgehouden, dus ik schrijf dit vanuit mijn herinnering zo gedetailleerd mogelijk op.









  ### Agenda voor meeting

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting

  - CSS style sheets samenvoegen
  - Wel een beetje responsief maken
  - Hoe ga ik mijn website verbeteren op gebied van toegankelijkheid?
  - Welke "surface plane" onderdelen ga ik toevoegen?
  - README bijwerken

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 

  *Na het eerste toetsmoment*

  Het opzetten van de HTML ging goed en verliep redelijk vlot. Ik voelde me steeds zekerder over hoe ik de structuur moest opbouwen en welke semantische elementen ik moest gebruiken, ook al had ik hier in het begin wat moeite mee.

  Een van de dingen die ik echt heb geleerd, is hoe ik light / dark mode kon implementeren. Het idee om de gebruikersinterface aan te passen aan de voorkeur van de gebruiker was interessant en ik vond het leuk om te experimenteren met de verschillende stijlen voor beide modussen. Dit ging uiteindelijk best goed, ondanks dat het wat extra tijd kostte om de juiste schakeling en styling te realiseren.

  Ook heb ik geleerd hoe ik custom properties effectief kan gebruiken en bijhouden. Dit vond ik een beetje lastig, vooral toen ik light / dark mode wilde toevoegen, omdat de variabelen goed gecoördineerd moesten worden om de kleuren consistent te houden voor beide modi. Het was even puzzelen, maar uiteindelijk werkte het zoals ik had gehoopt.

  Verder heb ik de toepassing van CSS properties zoals z-index en transform leren begrijpen en gebruiken. Het toepassen van z-index voor lagen en transform voor het positioneren van elementen gaf me meer controle over de layout, wat ik voorheen niet helemaal goed begreep.

  Tot slot heb ik geleerd hoe belangrijk ARIA-labels en Alt teksten zijn voor toegankelijkheid, en ik heb ze toegepast waar nodig. 


  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:

  Het surface plane onderdeel is niet gelukt. Ik heb de website niet per se meer toegankelijk gemaakt dan die al was.
  Ook veel dynamische onderdelen zijn niet gelukt om na te maken. Ik hoop dat dit bij de herkansing wel lukt.
  Ik weet eigenlijk nog steeds niet of ik het nou op de goede manier heb gedaan? Ik heb een beetje het gevoel dat ik zomaar wat heb gedaan en dat het deels per ongelijk gewoon gelukt is.

  *Na het eerste toetsmoment*

  Ik denk dat het me nog steeds niet is gelukt om genoeg surface plane onderdelen toe te voegen. Ik ovnd het allemal meoilijker dan verwacht. Vooral omdat ik dus eigenlijk achteraf nog dingen moest toe gaan voegen terwijl ik mijn algemene code nagenoeg al af had. Ik ben te hard van stapel gelopen met het willen afmaken en verbeteren van mijn code waardoor ik niet meer naar de gehele opdracht heb gekeken. En hierdoor misschien andere onderdelen een beetje heb verwaardloosd of te weinig aandacht aan heb besteed.

  Toen ik een skip link ging toevoegen kwam ik erachter dat het toch niet erg handig was om de afbeeldingen die lijken bij de header te horen (waar we nog even over getwijfeld hebben maar toch hebben besloten dat dat handiger was om in de main te stoppen). Want nu als ik op mijn eerste pagina skip link wil gebruiken schuift mijn pagina natuurlijk maar een klein beetje naar beneden. Maar goed, ik weet nu wel voor toekomstige prijecten hoe het moet en zal het nu altijd kunnen toepassen, daar gaat het naturlijk om.

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">

</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  0. Studentassistent
  1. https://flexboxfroggy.com/#nl
  2. https://www.w3schools.com/css/tryit.asp?filename=trycss_zindex2
  3. https://www.w3schools.com/howto/howto_css_image_text.asp
  4. https://developer.mozilla.org/en-US/docs/Web/CSS/content
  5. https://www.w3schools.com/cssref/pr_gen_content.php
  6. https://developer.mozilla.org/en-US/docs/Web/CSS/::before
  7. ChatGPT prompt: Wat doet transform: translateX(-50%) en wanneer gebruik ik dit?
  8. ChatGPT prompt: Hoe zorg ik ervoor dat het minder hard opschaalt als ik het scherm groter maak?
  9. ChatGPT prompt: Hoe kan ik ervoor zorgen dat de tekstkleur alleen op de tweede sectie wordt toegepast zonder het gebruik van extra classes of ID's?
  10. ChatGPT promtp: Hoe voorkom ik dat een CSS-regel onbedoeld invloed heeft op andere secties van mijn website?
  11. ChatGPT prompt: Hoe kan ik in CSS de breedte van een element in percentages omrekenen naar pixels in de Inspector?
  12. https://churchm.ag/responsive-calculator-pixels-percentages/
  13. https://www.w3schools.com/css/css_display_visibility.asp
  14. https://www.w3schools.com/css/css_grid.asp
  15. https://www.youtube.com/watch?v=aNDqzlAKmZc&ab_channel=Treehouse
  16. https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
  17. https://mukundkumra.medium.com/create-a-responsive-hamburger-menu-with-html-and-css-a-step-by-step-tutorial-c63e44fcee2e
  18. https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
  19. https://www.tutorialspoint.com/how-to-create-hamburger-menu-for-mobile-devices
  20. https://www.youtube.com/watch?v=3ncFpP8GP4g&ab_channel=KevinPowell
  21. https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  22. https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX
  23. https://www.w3schools.com/css/css_positioning.asp
  24. https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
  25. https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
  26. https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
  27. ChatGPT prompt: wat gebeurt er als je met classList.toggle een class toevoegt of verwijdert om een menu te openen en te sluiten? Geef voorbeelden en leg uit.
  28. https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark  
  29. https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
  30. https://www.w3schools.com/accessibility/accessibility_skip_links.php
  31. https://css-tricks.com/how-to-create-a-skip-to-content-link/



</details>