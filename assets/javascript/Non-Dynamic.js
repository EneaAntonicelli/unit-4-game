$(document).ready(function () {

    //GLOBAL 
    var characters = $('.character');
    var heroChosen = false;
    var opponentChosen = false;
    var killCount = 0;
    var damage = 0;

    //YOU NEED SEPARATE ARRAY OBJECTS BECAUSE THE OBJECT WILL HOLD MULTIPLE KEYS AND VALUES THAT CORRESPOND TO THE CHOSEN CHARACTER



    //CHARACTER ARRAY

    var characterArray = [
        
        kenshiro = {
            name: "Kenshiro",
            technique: "Hokuto Shin Ken",
            hp: 120,
            attackPower: 8,
            image: '<img src="assets/images/kenshiro.png" class="image">'
        },

        
        mamiya = {
            name: "Mamiya",
            technique: "Yo-Yos, Emeici, Crossbow",
            hp: 120,
            attackPower: 8,
            image: '<img src="assets/images/mamiya.png" class="image">'
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
        shu = {
            name: "Shu",
            technique: "Nanto Hakuro Ken",
            hp: 120,
            attackPower: 8,
            image: '<img src="assets/images/shu.png" class="image">'
        },
        kaioh = {
            name: "Kaioh",
            technique: "Hokuto Sōke no Ken",
            hp: 120,
            attackPower: 8,
            image: '<img src="assets/images/kaioh.png" class="image">'
        },
    ];

    //**FUNCTIONS**


    $('.character').click(function () {

        if (heroChosen == false) {

            for (var i = 0; i < characters.length; i++) {
                if (characters[i] == this) {
                    $('.hero').append(characters[i]);
                    $('.character').removeClass(".character").addClass('.enemy');
                    heroChosen = true;
                } // if
            } // for loop

        } // if
        else if (heroChosen == true && opponentChosen == false && killCount == 0) {

            for (var i = 0; i < characters.length; i++) {
                if (characters[i] == this) {
                    opponentChosen = true;
                    $('.opponent').append(characters[i]);

                } // end of if
            } // end for loop

        } // end if 

    }); // end of click function




});       //END OF DOCUMENT READY




















//****SCRATCH NOTES****

// ON ATTACK CLICK, TAKE HERO ATTACK VALUE AND SUBTRACT IT FROM OPPONENT HEALTH
// DISPLAY damage = "YOU ATTACKED" + OPPONENT.NAME + "FOR" + hero.attackPower"

// INCREASE ATTACK VALUE BY TURNCOUNTER EXPONENTIAL INCREMENT ++
// TAKE OPPONENT ATTACK VALUE AND SUBTRACT IT FROM THE HERO HEALTH

//SET A CHARACTER ARRAY FROM THE HTML IDS CORRESPONDING TO EACH CHARACTER