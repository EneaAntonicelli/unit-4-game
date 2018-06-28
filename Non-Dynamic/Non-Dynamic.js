$(document).ready(function () {

    //GLOBAL 
    var characters = $('.character-img');
    var heroChosen = false;
    var opponentChosen = false;
    var killCount = 0;

    //CHARACTER ARRAY

    var characterArray = [

        kenshiro = {
            name: "Kenshiro",
            technique: "Hokuto Shin Ken",
            hp: 120,
            attackPower: 8,
            image: '<img src="assets/images/kenshiro.png" class="image">'
        },

        rei = {
            name: "Rei",
            technique: "Nanto Suichoken",
            hp: 120,
            attackPower: 8,
            image: '<img src="assets/images/rei.png" class="image">'
        },

        raoh = {
            name: "Raoh",
            technique: "Hokuto Shin Ken ",
            hp: 120,
            attackPower: 8,
            image: '<img src="assets/images/raoh.png" class="image">'
        },

        heart = {
            name: "Heart",
            technique: "Kenpo Goroshi",
            hp: 120,
            attackPower: 8,
            image: '<img src="assets/images/heart.png" class="image">'
        },
    ];

    //**FUNCTIONS**


    // var gameStarted = false;


    $('.character-img').click(function () {
        for (var i = 0; i < characters.length; i++) {
            if (characters[i] == this) {
                $('.hero').append(characters[i]);
                $('.character-img').removeClass(".character-img").addClass('.enemy');
                heroChosen = true;

            }
        }
    });

    $('.enemy').click(function () {
        if (heroChosen == true && opponentChosen == false && killCount == 0);
        for (var i = 0; i < characters.length; i++) {
            if (characters[i] == this) {
                $('.opponent').append(characters[i]);
            }
        }
    });



});       //END OF DOCUMENT READY
