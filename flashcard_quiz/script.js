// gets all the elements
// mode buttons
const normal_bttn = document.querySelector("#normal_bttn");
const learn_bttn = document.querySelector("#learn_bttn");
const category_bttn = document.querySelector("#category_bttn");
const practice_bttn = document.querySelector("#practice_bttn");

// viewing the current  mode
const current_mode = document.querySelector("#current_mode");
const add_bttn = document.querySelector("#add_bttn");
const menu_bttn = document.querySelector("#menu_bttn");

// game options
const current_word = document.querySelector("#current");
const score_txt = document.querySelector("#score");
const option_1 = document.querySelector("#option_1");
const option_2 = document.querySelector("#option_2");
const option_3 = document.querySelector("#option_3");
const option_4 = document.querySelector("#option_4");

const words_csv = [
    ['word', 'hiragana', 'meaning', 'usage'],
    ['ながら', 'ながら', 'while', '食べながら動画を見る'],
    ['禁忌', 'きんき', 'taboo', 'それは禁忌です'],
    ['生身', 'なまみ', 'flesh', '俺の生身'],
    ["基盤", "きばん", 'foundation', ''],
    ["個所", "かしょ", 'passage', ''],
    ['北極', 'ほっきょく', 'north pole', '']
];

// on clicking normal mode
function normal_mode() {
    // shows mode name
    current_mode.textContent = "普通";
    let score_val = 0;

    menu_to_game();    
    normal_game(words_csv, score_val);
    
}
normal_bttn.addEventListener("click", normal_mode);

// on clicking learn mode
function learn_mode() {
    current_mode.textContent = "学ぶ";
}
learn_bttn.addEventListener("click", learn_mode);

// on clicking practice mode
function practice_mode() {
    current_mode.textContent = "練習";
}
practice_bttn.addEventListener("click", practice_mode);

// on clicking category mode
function category_mode() {
    current_mode.textContent = "種類";
}
category_bttn.addEventListener("click", category_mode);

menu_bttn.addEventListener("click", game_to_menu);
    
// normal mode game functionality
function normal_game(word_list, score_val) {
    let wl_len = word_list.length // word list length

    let row = getRandomInt(1, wl_len); // randomly picks a word starting from the second row
    let options = [option_1, option_2, option_3, option_4];

    // updating elements
    current_word.textContent = word_list[row][0];

    // set options
    let correct_index = getRandomInt(0, options.length);
    for (const option of options) {
        if (options.indexOf(option) == correct_index) {
            option.textContent = current_word.textContent;
        }
        else {
            option.textContent = word_list[getRandomInt(1, word_list.length)][1];
        }
    }

    // option_1.addEventListener("click", function(){return normal_game(word_list);});
    option_1.addEventListener("click", function(){
        return check_answer(current_word.textContent, option_1.textContent, score_val)});
    option_2.addEventListener("click", function(){
        return check_answer(current_word.textContent, option_2.textContent, score_val)});
    option_3.addEventListener("click", function(){
        return check_answer(current_word.textContent, option_3.textContent, score_val)});
    option_4.addEventListener("click", function(){
        return check_answer(current_word.textContent, option_4.textContent, score_val)});
}

function check_answer(current_word, selected_option, score_val) {
    if (current_word == selected_option) {
        score_val ++;
        score_txt.textContent = `Score: ${score_val} (${current_word} ${selected_option})`;
        reset_stats();
        normal_game(words_csv, score_val);
    }
    else {
        score_txt.textContent = `Wrong :[ You scored: ${score_val} (${current_word} ${selected_option})!`;
        game_to_menu();
    }
}

function reset_stats(){
    //score_val = 0;
    score_txt.textContent = `Score: ${score_val}`;

    //current_word.textContent = '';
    option_1.textContent = '';
    option_2.textContent = '';
    option_3.textContent = '';
    option_4.textContent = '';

}

// getting random numbers between 2 numbers
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }

  // changes from menu screen to game screen
  function menu_to_game() {
    // hides mode buttons
    normal_bttn.style.display = "none";
    learn_bttn.style.display = "none"; 
    practice_bttn.style.display = "none";
    category_bttn.style.display = "none";

    menu_bttn.style.display = "inline";
    add_bttn.style.display = "none";
    score_txt.style.display = 'block';

    // shows option buttons
    option_1.style.display = "inline";
    option_2.style.display = "inline";
    option_3.style.display = "inline";
    option_4.style.display = "inline";
    current_word.style.display = "block";
  }

  // changes from game to menu screen
  function game_to_menu() {
    current_mode.textContent = "Pick a mode!";

    // shows mode buttons
    normal_bttn.style.display = "inline";
    learn_bttn.style.display = "inline"; 
    practice_bttn.style.display = "inline";
    category_bttn.style.display = "inline";

    menu_bttn.style.display = "none";
    add_bttn.style.display = "inline";

    // hides option buttons
    option_1.style.display = "none";
    option_2.style.display = "none";
    option_3.style.display = "none";
    option_4.style.display = "none";
    current_word.style.display = "none";
}

function test(lis) {
    score_txt.textContent = lis[0]
}

