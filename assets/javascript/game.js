$(document).ready(function () {

    //GLOBAL 

  

//CHARACTER ARRAY

let characters = {

    'kenshiro': {
        name: "Kenshiro",
        technique: "Hokuto Shin Ken",
        hp: 120,
        attackPower: 8,
        image: '<img src="assets/images/kenshiro.png" class="image">'
    },

    'rei': {
        name: "Rei",
        technique: "Nanto Suichoken",
        hp: 120,
        attackPower: 8,
        image: '<img src="assets/images/rei.png" class="image">'
    },

    'raoh': {
        name: "Raoh",
        technique: "Hokuto Shin Ken ",
        hp: 120,
        attackPower: 8,
        image: '<img src="assets/images/raoh.png" class="image">'
    },

    'heart': {
        name: "Heart",
        technique: "Kenpo Goroshi",
        hp: 120,
        attackPower: 8,
        image: '<img src="assets/images/heart.png" class="image">'
    },
}
//**FUNCTIONS**

function createCharacters (){

    for (var i = 0; i < Object.keys(characters).length; i++) {
        var userObj = Object.keys(characters)[i];
        console.log(characters[userObj]
    );

    
            var $character = $('<div id='+characters[userObj]+'>');
            $character.append('<div class="characterName">'+characters[userObj].name);
            $character.append('<div class="characterImage">'+characters[userObj].image);
            $character.append('<div class="characterTechnique">'+characters[userObj].technique);
            $character.append('<div class="characterHp">'+characters[userObj].hp);
            $character.append('<div class="characterAttackPower">'+characters[userObj].attackPower);
            // $character.attr("data_name", characters[i].name);
            // $character.attr('data_technique', characters[i].technique);
            // $character.attr('data_hp', characters[i].hp);
            // $character.attr('data_attackPower', characters[i].attackPower);
            // $character.attr('class', 'character col-md-2');

            // characters.push(characters[userObj]);

            $('#characters').append($character);

            }
}
createCharacters();


//DYNAMICALLY POPULATE CHARACTER SELECTION DIV
    

        //END OF DOCUMENT READY
});