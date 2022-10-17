// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen (zoals 2021) in op. Log dit in de terminal.
// ==========================================

const jaartallen = [ "2019", "2020", "2021", "2022"];
console.log(jaartallen);

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies (zoals muziek luisteren en koekjes eten) in op. Log dit in de terminal.
// ==========================================

const hobbies = [ "sport", "lezen", "lopen"];
console.log(hobbies);

// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Zorg er nu voor dat je de eerste waarde uit die array in de terminal logt             // geeft 3
// ==========================================

const cijfers = [ "3", "4", "5", "7", "2"];
console.log(cijfers[0]);

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje.
// Nu gaan we de waardes weer aanspreken!
// 4b. Zorg ervoor dat je de vijfde waarde uit bovenstaande array in de terminal logt       // geeft blauw
// 4c. Zorg ervoor dat je de tweede waarde uit bovenstaande array in de terminal logt       // geeft geel
// ==========================================

const kleuren = [ "groen", "geel", "rood", "paars", "blauw", "groen"];
console.log(kleuren[4]);
console.log(kleuren[1]);

// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25 en log dit in de terminal
// 5b. Overschrijf één van de items in de array dusdanig dat de cijferreeks netjes doorloopt (je mag de declaratie op de vorige regel niet aanpassen).
// 5c. Log de array in de terminal                                                          // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================

const getallen = [ "21", "22", "23", "25", "25"];
getallen[3] = "24";
console.log(getallen);


// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Overschrijf daarna de waarde bladerdeeg met lasagne bladen (je mag de declaratie op de vorige regel niet aanpassen).
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================

const ingredienten = [ "bladerdeeg", "knoflook", "spinazie"];
ingredienten[0] = "lasange bladen";
const ingredientenLengte = ingredienten.length;

console.log(ingredienten);
console.log(ingredientenLengte);