
var DECK_LIST = getDeckList();

var CARDS_COUNTER = 0;
var PAGE = null;

function addCard(cardPath, disable_backs){

  if(cardPath == "back.png" && disable_backs){
    return;
  }

  let horizMARGIN = "2.5%";
  let vertMARGIN = "2.6%";

  let img = document.createElement("img");
  img.style.width = "28%";
  img.src = "./Core_All_Cards/"+cardPath;
  img.style.marginTop = vertMARGIN;

  if(cardPath == "back.png")
  {
    img.style.transform = "scale(1.03)";
  }

  // FIRST ROW CARD
  if((CARDS_COUNTER/3)%3 == 0 || ((CARDS_COUNTER-1)/3)%3 == 0 || ((CARDS_COUNTER-2)/3)%3 == 0){
    img.style.marginTop = "7.5%";
  }


  // LEFT CARD
  if(CARDS_COUNTER%3 == 0){
    img.style.marginLeft = "5.55%";
  }
  // MIDDLE CARD
  if(CARDS_COUNTER%3 == 1){
    img.style.marginLeft = horizMARGIN;
    img.style.marginRight = horizMARGIN;
  }
  // RIGTH CARD
  if(CARDS_COUNTER%3 == 2){
    img.style.marginRight = horizMARGIN;
  }

  if(CARDS_COUNTER%9 == 0){
    PAGE = document.createElement("div");
    PAGE.id = "page " + ((CARDS_COUNTER/9) + 1).toString();
    PAGE.style.border = "1px solid";
    PAGE.style.overflow = "hidden";
    PAGE.style.width = (2480/2.2).toString() + "px";
    PAGE.style.height = (3508/2.2).toString() + "px";
    document.body.appendChild(PAGE);
  }

  PAGE.appendChild(img);

  /*
  if([0,1,2,15,16,17].indexOf(CARDS_COUNTER) == -1){
    img.style.opacity = "0";
  }
  */

  CARDS_COUNTER++;
}

function getDeckByName(deck_to_print){
  let deck = [];
  for(let i = 0; i < DECKS_LIST.length; i++){
    if(DECKS_LIST[i]["name"] == deck_to_print){
      deck = DECKS_LIST[i]["cards"];
    }
  }
  return deck;
}

function pagePrintableDeck() {

  document.body.style.background = "transparent";
  document.body.style.margin = "0";

  let deck_to_print = localStorage.getItem("display_name");
  let disable_backs = localStorage.getItem("allow_backs") != "true";

  if(deck_to_print == null || disable_backs == null){
    return;
  }

  displayDeck(deck_to_print, disable_backs)
}

function doPrintDeck() {
  window.print();
}

function reshowButton() {
  let b = document.getElementById("print_deck_button");
  b.style.display = "block";
}

function printDeck() {
  setTimeout(doPrintDeck,500);
  window.onafterprint = reshowButton;
  let b = document.getElementById("print_deck_button");
  b.style.display = "none";
}

function addPrintAbsoButton() {
  let b = makeNode("div","Print Deck", "print_deck_button");
  b.onclick = printDeck;
  b.id = "print_deck_button";
  document.body.append(b);
}

function displayDeck(deck_to_print, disable_backs){

  let deck = getDeckByName(deck_to_print);

  if(deck == null || deck == undefined){
    alert("You selected a deck that does not exist in the list: "+ deck_to_print);
    return;
  }

  deck.sort((a,b)=>{
    if(a["name"] < b["name"]){ return -1;}
    if(a["name"] > b["name"]){ return 1;}
    return 0;
  });

  let cards = 0;
  let perfected_deck = [];
  for(let i = 0; i < deck.length; i++){
    for(let j = 0; j < deck[i]["amount"];j++){
      perfected_deck.push(deck[i]["name"]+".png");
      cards++;
      if(perfected_deck.length%9 == 0 && perfected_deck.length > 0){
        for(let k = 0; k < 9; k++){
          perfected_deck.push("back.png");
        }
      }
    }
  }

  addPrintAbsoButton();

  let deck_padding_perfect = 9 - cards%9;
  if(deck_padding_perfect != 9){
    while(deck_padding_perfect > 0){
      perfected_deck.push("placeholder.png");
      deck_padding_perfect--;
    }
    for(let k = 0; k < 9; k++){
      perfected_deck.push("back.png");
    }
  }

  for(let i = 0; i < perfected_deck.length; i++){
    addCard(perfected_deck[i], disable_backs);
  }

}

function clearPage(){

  document.body.style.background = "";
  document.body.style.margin = "";

  while(document.body.firstChild){
    document.body.removeChild(document.body.firstChild);
  }
}



function deck_descr(deck_to_print){

  let deck = getDeckByName(deck_to_print);

  let count_deck = 0;
  let count_extra = 0;
  let count_tokens = 0;
  for(let i = 0; i < deck.length; i++){
    if(deck[i]["type"] == "Deck"){
      count_deck+= deck[i]["amount"];
    }
    if(deck[i]["type"] == "Extra Deck"){
      count_extra+= deck[i]["amount"];
    }
    if(deck[i]["type"] == "Tokens"){
      count_tokens+= deck[i]["amount"];
    }
  }

  return deck_to_print + " " + summarizeDeck(count_deck, count_extra, count_tokens);
}

function summarizeDeck(count_deck, count_extra, count_tokens) {
  let c1 = +count_deck;
  let c2 = +count_extra;
  let c3 = +count_tokens;
  let tot = c1 + c2 + c3;
  return "Deck has the following cards structure:<ul><li><div style=\"display:inline-block; padding-top:0.3em; min-width:10em;\">Total card(s): </div>" + tot.toString() + "</li><li><div style=\"display:inline-block; padding-top:0.3em; min-width:10em;\">Deck card(s): </div>" + count_deck  + "</li><li><div style=\"display:inline-block; padding-top:0.3em; min-width:10em;\">Extra Deck  card(s): </div>" + count_extra + "</li><li><div style=\"display:inline-block; padding-top:0.3em; min-width:10em;\">Token card(s): </div>" + count_tokens + "</li></ul>";
}

function tell_deck() {
  let deck_name = document.getElementById("chosen_id").value;
  let descr = deck_descr(deck_name);
  document.getElementById("description").innerHTML = descr;
}

function makeSelect(options, onchance){
  let s = makeNode("select",null,null);
  s.onchange = onchance;
  s.className = "wide_select";
  for(let i = 0; i < options.length; i++){
    let o = makeNode("option",options[i], null);
    o.value = options[i];
    s.appendChild(o);
  }
  return s;
}

function makeNode(type, innerHTML, className){
  let d = document.createElement(type);
  if(innerHTML != null){
    d.innerHTML = innerHTML;
  }
  if(className != null){
    d.className = className;
  }

  return d;
}

function setId(element, id){
  element.id = id;
  return element;
}

function makeButton(text, className, onclick){
  let d = document.createElement("button");
  d.innerHTML = text;
  d.style.padding = "0.5em 1em";
  if(className != null){
    d.className = className;
  }
  if(onclick != null){
    d.onclick = onclick;
  }
  return d;
}

function makeCheckBox(text, id) {

  let label = document.createElement("label");

  let check = document.createElement("input");
  check.type = "checkbox";
  check.id = id;

  let wrd = document.createElement("span");
  wrd.innerHTML = text;

  label.appendChild(check);
  label.appendChild(wrd);

  return label;
}

function makeSpace(count){
  let e = document.createElement("div");
  for(let i = 0; i < count; i++){
    e.appendChild(document.createElement("br"));
  }
  return e;
}

function objArrayExtractKeyArray(obj_array, keyname) {
  let key_array = [];
  for(let i = 0; i < obj_array.length;i++){
    key_array.push(obj_array[i][keyname]);
  }
  return key_array;
}

function save_deck_recipe() {

  let name = document.getElementById("deck_name_id").value;

  if(name.length == 0){
    alert("Please, enter the Deck's name");
    return;
  }

  let cards = document.getElementById("recipe_box").children;

  if(cards.length == 0){
    alert("Please, add at least 1 card to the Deck Recipe");
    return;
  }


  let cards_array = [];
  for(let i = 0; i < cards.length; i++){
    cards_array.push(cards[i]);
  }

  let deckcards = [];
  // { "type": "Tokens", "name":"mirror_knight_token", "amount":4},
  for(let i = 0; i < cards_array.length; i++){

    let img = cleanCardPathImg(decodeURI(cards_array[i].src));

    let el_index = getElementFromCardsArrayIndex(deckcards, img);
    if(el_index == -1){
      deckcards.push({ "type": cards_array[i].name, "name": img, "amount": 1});
    }else{
      deckcards[el_index]["amount"] = deckcards[el_index]["amount"] + 1;
    }
  }

  let deck = {
    "name": name,
    "cards":deckcards
  }

  storeCustomDeck(deck);

  alert("Deck " + name + " created!");

  pageHome();
}

function mergeCustomDecks(){
  let c_decks = localStorage.getItem("c_decks");
  if(c_decks != null){
    c_decks = JSON.parse(c_decks);
    for(let i = 0; i < c_decks.length; i++){
      DECKS_LIST.push(c_decks[i]);
    }
  }
}

function storeCustomDeck(deck) {
  let c_decks = localStorage.getItem("c_decks");
  if(c_decks == null){
    c_decks = [deck];
  }else{
    c_decks = JSON.parse(c_decks);
    c_decks.push(deck);
  }
  localStorage.setItem("c_decks", JSON.stringify(c_decks));
}

function cleanCardPathImg(fullSrc) {
  let spl = fullSrc.replace(".png","").split("/");
  return spl[spl.length-1];
}

function getElementFromCardsArrayIndex(deckcards, imgPathFull){
  for(let i = 0; i < deckcards.length; i++){
    if(deckcards[i]["name"] == imgPathFull){
      return i;
    }
  }
  return -1;
}

function addDom(el){
  document.body.appendChild(el);
}

function pageHome(){

  mergeCustomDecks();

  clearPage();
  document.body.style.margin = "2rem";

  addDom(makeNode("div","Yu Gi Oh - Print Your Deck","title"));
  addDom(makeSpace(1));

  addDom(makeNode("div","Step 1 (optional): Create your own Deck","subtitle"));
  addDom(makeSpace(1));

  addDom(makeButton("Create Deck", "wide_button", gotoCreate));
  addDom(makeSpace(1));

  addDom(makeNode("div","Step 2: Pick one Deck from the list","subtitle"));
  addDom(makeSpace(1));

  addDom(setId(makeSelect(objArrayExtractKeyArray(DECKS_LIST, "name"), tell_deck),"chosen_id"));
  addDom(makeSpace(1));

  addDom(setId(makeNode("div","","description_label"), "description"));
  addDom(makeSpace(1));

  addDom(makeCheckBox("Allow print for card-backs (This adds 'card-backs' pages)","allow_back_check"));
  addDom(makeSpace(1));

  addDom(makeNode("div","If you print card-backs, when printing select \"Flip on the <strong>short</strong> side of the paper\" to have a perfect back match.","infobox"));
  addDom(makeSpace(1));

  addDom(makeNode("div","Step 3: Generate the Printable PDF","subtitle"));
  addDom(makeSpace(1));

  addDom(makeNode("div","When you are ready, hit the \"Generate Printable Deck Page\" button to see the ready-to-print Deck page. For best results, you must save the whole page by right-clicking the page and printing as PDF. Remember to use A4 format and no margins.","infobox"));
  addDom(makeSpace(1));

  addDom(makeButton("Generate Printable Deck Page", "wide_button", gotoProcess));
  addDom(makeSpace(1));

  tell_deck();
}


function makeTextEntry(placeholder, onchange) {
  let d = makeNode("input",null,null);
  d.type = "text";
  d.className = "text_entry";
  d.placeholder = placeholder;
  d.onchange = onchange;
  return d;
}

function cardMatchesFilter(card, s_name, s_effect, level, attribute, type){

  if(card["Name"] == ""){
    return false;
  }

  if(s_name != "" && card["Name"].toLocaleLowerCase().indexOf(s_name) == -1){
    return false;
  }
  if(s_effect != "" && card["Meta"]["Effect"].toLocaleLowerCase().indexOf(s_effect) == -1){
    return false;
  }
  if(level != "any" && card["Stars"] != +level){
    return false;
  }
  if(attribute != "any" && card["Meta"]["Attribute"].toLocaleLowerCase().indexOf(attribute) == -1){
    return false;
  }
  if(type != "any"){

    let card_type = card["Type"].toLocaleLowerCase();

    let type_spl = type.replace("(","").replace(")","").split(" ");
    let type_main = type_spl[0];
    let type_sub = type_spl[1];

    if(type_sub != "any" && card_type.indexOf(type_sub) == -1){
      return false;
    }else{
      if(type_main == "trap" && card_type.indexOf("trap ") == -1){
        return false;
      }
      if(type_main == "spell" && card_type.indexOf("spell ") == -1){
        return false;
      }
      if(type_main == "monster" && (card_type.indexOf("spell ") != -1 || card_type.indexOf("trap") != -1)){
        return false;
      }
    }
  }

  return true;
}

function filterCards(s_name, s_effect, level, attribute, type) {

  let card_filtered = [];

  for(let i = 0; i < CARDS_DB.length; i++){
    let card = CARDS_DB[i];
    if(cardMatchesFilter(card, s_name.toLocaleLowerCase(), s_effect.toLocaleLowerCase(), level.toLocaleLowerCase(), attribute.toLocaleLowerCase(), type.toLocaleLowerCase())){
      card_filtered.push(card);
    }
  }

  return card_filtered;
}

function searchCard() {

  let s_name = document.getElementById("name_search_id").value;
  let s_effect = document.getElementById("effect_search_id").value;
  let level = document.getElementById("level_id").value;
  let attribute = document.getElementById("attribute_id").value;
  let type = document.getElementById("type_id").value;

  let filtered = filterCards(s_name, s_effect, level, attribute, type);
  clearFilterBox();
  for(let i = 0; i < filtered.length; i++){
    addFilteredBoxToRecipe(filtered[i]);
  }
}


function getCardDescription(card) {

  let desc = "";

  desc += "<strong>"+card["Name"]+ "</strong>" + "\n";
  if(card["Stars"] != 0 && card["Type"].indexOf("Link") != -1){
    desc += "Link Level: " + card["Stars"] + "\n";
  }
  else if(card["Stars"] != 0 && card["Type"].indexOf("Xyz") != -1){
    desc += "Rank: " + card["Stars"] + "\n";
  }
  else if(card["Stars"] != 0){
    desc += "Level: " + card["Stars"] + "\n";
  }

  if(card["Type"].indexOf("Spell") == -1 && card["Type"].indexOf("Trap") ==-1){
    desc += "Attribute: " + card["Meta"]["Attribute"] + "\n";

    if(card["Meta"]["ATK"] != 0){
      desc += "ATK " + card["Meta"]["ATK"].toString() + "\n";
    }
    if(card["Type"].indexOf("Link") == -1){
      if(card["Meta"]["DEF"] != 0){
        desc += "DEF " + card["Meta"]["DEF"].toString() + "\n";
      }
    }
  }


  desc += "Type: " + card["Type"] + "\n\n";
  desc += card["Meta"]["Effect"];

  return desc;
}

function resetRecipeContentResume(){
  let d = document.getElementById("recipe_resume");
  if(d != null){
    d.parentNode.removeChild(d);
  }
}

function updateRecipeContentResume(cardType, delta) {
  let d = document.getElementById("recipe_resume");
  if(d == null){
    d = document.createElement("div");
    d.id = "recipe_resume";
    d.style.display = "none";
    d.innerHTML = "{ \"Deck\": 0, \"Extra Deck\": 0, \"Tokens\": 0}";
    document.body.appendChild(d);
  }

  let obj = JSON.parse(d.innerHTML);
  obj[cardType] = obj[cardType]+delta;
  d.innerHTML = JSON.stringify(obj);

  updateRecipeDescription(obj);
}

function clearFilterBox() {
  let box = document.getElementById("filtered_cards_results");
  while(box.firstChild){
    box.removeChild(box.firstChild);
  }
}

function removeCardFromRecipe(element){
  updateRecipeContentResume(element.name,-1);
  element.parentNode.removeChild(element);
}

function updateRecipeDescription(obj){

  let c1 = 0;
  let c2 = 0;
  let c3 = 0;

  if(obj != null){
    c1 = obj["Deck"];
    c2 = obj["Extra Deck"];
    c3 = obj["Tokens"];
  }

  let desc = "Your " + summarizeDeck(c1,c2,c3);

  document.getElementById("description").innerHTML = desc;
}

function addCardToRecipe(cardDeckDest___cardImg) {

  let spl = cardDeckDest___cardImg.split("___");
  let deckDest = spl[0];
  let cardImg = spl[1];

  updateRecipeContentResume(deckDest,1);

  let c = makeNode("img", "", "card_in_recipe");
  c.src = "./Core_All_Cards/"+ cardImg + ".png";
  c.name = deckDest;
  c.setAttribute("onclick", "removeCardFromRecipe(this)");
  let d = document.getElementById("recipe_box");
  d.appendChild(c);
}

function getCardDeckDest(card) {
  let t = card["Type"];
  if(t.indexOf("Fusion") != -1 || t.indexOf("Xyz") != -1 || t.indexOf("Synchro") != -1 || t.indexOf("Link") != -1){
    return "Extra Deck";
  }

  if(t == "Token"){
    return "Tokens";
  }

  return "Deck";
}



function addFilteredBoxToRecipe(card){

  let box = document.getElementById("filtered_cards_results");

  let cardDeckDest = getCardDeckDest(card);

  let table = makeNode("table", "", "card_slot");
  table.id = card["Name"];
  table.setAttribute("onclick" , "addCardToRecipe('"+cardDeckDest + "___" + card["Img"] +"')");
  let row = makeNode("tr","","");
  let cell_1 = makeNode("td", "", "");
  let cell_2 = makeNode("td", "", "");

  let card_i = makeNode("img", "", "filtered_img");
  card_i.src = "./Core_All_Cards/"+card["Img"] + ".png";
  cell_1.appendChild(card_i);

  let card_d = makeNode("div", getCardDescription(card), "card_description");
  cell_2.appendChild(card_d);

  row.appendChild(cell_1);
  row.appendChild(cell_2);
  table.appendChild(row);
  box.appendChild(table);
}

function makeBackTitle(txt) {
  return makeNode("div","<div class=\"back_btn\" onclick=\"goBack();\">ᐊ</div><div style=\"display: inline-block;\">" + txt + "</div>","title");
}

function gotoCreate() {
  setNavigation("create");
}

function gotoProcess() {

  let deck_name = document.getElementById("chosen_id").value;
  let allow_backs = document.getElementById("allow_back_check").checked;
  localStorage.setItem("display_name", deck_name);
  localStorage.setItem("allow_backs", allow_backs.toString());

  setNavigation("printable_deck");
}


function pageCreateDeck() {

  clearPage();
  document.body.style.margin = "2rem";

  addDom(makeBackTitle("Create your own Deck"));
  addDom(makeSpace(1));

  addDom(makeNode("div","Step 1: Use the following filters to find Cards","subtitle"));
  addDom(makeSpace(1));

  addDom(setId(makeTextEntry("Search card by Name:", null), "name_search_id"));
  addDom(makeSpace(1));

  addDom(setId(makeTextEntry("Search card by Effect:", null),"effect_search_id"));
  addDom(makeSpace(1));

  addDom(makeNode("div","Filter Level/Rank/Link-Level", "small_hint"));
  addDom(setId(makeSelect(["Any", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], null),"level_id"));
  addDom(makeSpace(1));

  addDom(makeNode("div","Filter Attribute", "small_hint"));
  addDom(setId(makeSelect(["Any", "DARK",	"DIVINE",	"EARTH", "FIRE", "LIGHT", "WATER", "WIND"], null),"attribute_id"));
  addDom(makeSpace(1));

  addDom(makeNode("div","Filter Card Type", "small_hint"));
  addDom(setId(makeSelect(["Any", "Monster (Any)", "Monster (Normal)", "Monster (Effect)", "Monster (Tuner)", "Monster (Fusion)", "Monster (Ritual)", "Monster (Xyz)", "Monster (Link)", "Monster (Synchro)", "Monster (Pendulum)", "Spell (Any)", "Spell (Normal)", "Spell (Quick-Play)", "Spell (Field)", "Spell (Continuous)", "Spell (Ritual)", "Spell (Equip)",  "Trap (Any)", "Trap (Normal)", "Trap (Counter)", "Trap (Continuous)"], null),"type_id"));
  addDom(makeSpace(1));

  addDom(makeButton("Search Cards", "wide_button", searchCard));
  addDom(makeSpace(1));

  addDom(makeNode("div","Click on a card to add it to the Deck Recipe", "small_hint"));
  addDom(setId(makeNode("div","", "filter_box"),"filtered_cards_results"));
  addDom(makeSpace(1));

  addDom(makeNode("div","Step 2: Verify your Deck Recipe","subtitle"));
  addDom(makeSpace(1));

  addDom(setId(makeNode("div","","description_label"), "description"));
  addDom(makeSpace(1));

  addDom(makeNode("div","Click on each card to remove it", "small_hint"));
  addDom(setId(makeNode("div","", "filter_box"),"recipe_box"));
  addDom(makeSpace(1));

  addDom(makeNode("div","Step 3: Save the Deck Recipe to use it","subtitle"));
  addDom(makeSpace(1));

  addDom(setId(makeTextEntry("Deck's Name:", null), "deck_name_id"));
  addDom(makeSpace(1));

  addDom(makeButton("Save Deck Recipe", "wide_button", save_deck_recipe));
  addDom(makeSpace(1));

  updateRecipeDescription(null);
}

function getUrlSection(segment) {

    if (segment != 0 && segment != 1) {
        return;
    }

    let default_page = "home";
    let curr_url = decodeURI(window.location.href);


    // has page defined
    if (curr_url.split("#").length > 1) {
        return curr_url.split("#")[segment];
    } else {
        window.location.href = encodeURI(window.location.href + "#" + default_page);
        return default_page;
    }
}



function goBack() {
  history.back();
}

function setNavigation(pagerequest) {

    if (pagerequest != getUrlSection(1)) {
        let new_url = encodeURI(getUrlSection(0) + "#" + pagerequest);
        history.pushState(null, null, new_url);

        pageNavigate();
    }

    return ''; // chrome requires return value
}

function pageNavigate() {

    clearPage();

    let page = getUrlSection(1);

    let page_no_args = page.split("?")[0];

    if (page_no_args == "home") {
        pageHome();
        return;
    }
    if (page_no_args == "create") {
        pageCreateDeck();
        return;
    }
    if (page_no_args == "printable_deck") {
        pagePrintableDeck();
        return;
    }


    missingPage();
}

var setupDone = false;
function setup() {

  if(!setupDone){
    window.addEventListener('hashchange', pageNavigate, false);
      setupDone = true;
  }

  pageNavigate();
}
