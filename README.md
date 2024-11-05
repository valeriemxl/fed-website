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

  <!-- Lijst met je bevindingen die in de test naar voren kwamen: de website van Porsche voldoet niet volledig aan de A11Y Project Checklist
  - Er zijn enkele toegankelijkheidsmaatregelen aanwezig, zoals alternatieve teksten voor afbeeldingen en voldoende kleurcontrast
  - Hoewel sommige afbeeldingen alt-teksten hebben, is er geen uitgebreide beschrijving voor complexe visuele elementen zoals grafieken of diagrammen
  - Er ontbreken belangrijke elementen zoals correcte semantische HTML, toetsenbordnavigatie, en focusstaten voor interactieve elementen
  - Interactieve elementen zoals knoppen of links hebben dus geen duidelijke visuele focusstatus, waardoor toetsenbordnavigatie moeilijker wordt
  - De hiërarchie van koppen (zoals h1, h2, etc.) wordt niet altijd goed gebruikt, wat moeilijk is voor schermlezers en de navigatie belemmert
  - Gebruikers kunnen niet altijd controle uitoefenen op animaties of automatische inhoud, wat afleidend kan zijn voor bepaalde gebruikersgroepen​ -->

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


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Sections beginnen met h2's (kopjes aanpassen in mijn HTML)
  - Sections mogen (probeer wel semantische HTML te gebruiken)
  - nth of child proberen te vermijden?
  - Is het echt een button of een link?

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik ben bang dat ik misschien toch een te moeilijke website heb gekozen


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |

  Vragen:
  1. Hoe kom ik aan het juiste font?
  2. Zijn mijn sections zo goed ingedeeld?
  3. Gebruik ik id's op de goede manier?

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - "hoofd" sections classes geven
  - "onder" sections aanroepen met bijv nth of type/child --> dus wel nth of child gebruiken
  - section in section mag
  - class namen mogen vaker op een pagina genoemt worden,  id namen niet
  - dus bijv 2 afbeeldingen in 2 verschillende sections zijn hetzelfde gestijlt mag je ze dezelfde class naam geven

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
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

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
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Het surface plane onderdeel is niet gelukt. Ik heb de website niet per se meer toegankelijk gemaakt dan die al was.
  Ook veel dynamische onderdelen zijn niet gelukt om na te maken. Ik hoop dat dit bij de herkansing wel lukt.
  Ik weet eigenlijk nog steeds niet of ik het nou op de goede manier heb gedaan? Ik heb een beetje het gevoel dat ik zomaar wat heb gedaan en dat het deels per ongelijk gewoon gelukt is.

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


</details>