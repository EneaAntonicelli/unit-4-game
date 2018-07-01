
//GLOBAL VARIABLES
var death_sound = new Audio("assets/audio/death.mp3")
var select_sound = new Audio("assets/audio/select.mp3")

var characters = $('.character');
var heroSwitch = false;
var opponentSwitch = false;
var heroChosen = false;
var opponentChosen = false;
var killCount = 0;
var kills = 0;
var deaths = 0;
var damage = 0;

// CHARACTER OBJECTS INSIDE A CHARACTER DICTIONARY

var characterDict = {
    kenshiro: {
        name: "Kenshiro",
        technique: "Hokuto Shin Ken",
        hp: 120,
        attackPower: 8,
        image: '<img src="assets/images/kenshiro.png" class="image">'
    },
    mamiya: {
        name: "Mamiya",
        technique: "Yo-Yos, Emeici, Crossbow",
        hp: 100,
        attackPower: 14,
        image: '<img src="assets/images/mamiya.png" class="image">'
    },
    raoh: {
        name: 'Raoh',
        technique: 'Hokuto Shin Ken ',
        hp: 180,
        attackPower: 20,
        image: '<img src="assets/images/raoh.png" class="image">'
    },
    heart: {
        name: 'Heart',
        technique: 'Kenpo Goroshi',
        hp: 140,
        attackPower: 20,
        image: '<img src="assets/images/heart.png" class="image">'
    },
    shu: {
        name: 'Shu',
        technique: 'Kenpo Goroshi',
        hp: 130,
        attackPower: 30,
        image: '<img src="assets/images/shu.png" class="image">'
    },
    kaioh: {
        name: 'Kaioh',
        technique: 'Kenpo Goroshi',
        hp: 110,
        attackPower: 10,
        image: '<img src="assets/images/kaioh.png" class="image">'
    }
}

$(document).ready(function () {

    // INITIATE AUDIO PLAYER AT THE TOP LEFT OF THE SCREEN

    var result = $('#result')

    result.hide().html('<%= j @result %>').fadeIn(250);
    playAudio(result);

    function playAudio(result) {
        if (result.html() === "Yes") {

            $('#yes-audio').trigger('play')
        }
        else if (result.html() === "Nope.") {
            $('#no-audio').trigger('play')
        }

    }

    // CHARACTER ARRAY DATA BOUND TO CHARACTERS

    $('.character').each(function (index) {
        var $character = $(this);
        var characterData = characterDict[this.id];
        $character.find('.technique').append(characterData.technique);
        $character.find('.health').append(characterData.hp);
        $character.find('.attackPower').append(characterData.attackPower);
        
    });

    // CHARACTERS SELECTED AND MOVED TO CORRECT AREAS

    $('.character').click(function () {
        select_sound.play();
        if (heroChosen == false) {

            for (var i = 0; i < characters.length; i++) {
                if (characters[i] == this) {
                    $('.hero').append(characters[i]);
                    $('.character').removeClass("character").addClass('enemy');
                    $('.hero').find('.enemy').removeClass("character col-md-2 col-sm-4 col-xs-6 enemy");
                    heroSwitch = true;
                    heroChosen = $(this);
                } // END OF IF LOOP

            } // END OF FOR LOOP

        } // END OF FRUIT LOOP

        else if (heroSwitch == true && opponentChosen == false && killCount == 0) {

            for (var i = 0; i < characters.length; i++) {
                if (characters[i] == this) {
                    $('.opponent').append(characters[i]);
                    $('.character-section').css('display', 'none');
                    $('.opponent').find('.enemy').removeClass("character col-md-2 col-sm-4 col-xs-6 enemy");

                    opponentSwitch = true;
                    opponentChosen = $(this);

                } // END OF IF STATEMENT

            } // END OF FOR LOOP

        } // END IF STATEMENT

    }); // END OF CLICK FUNCTION


    // ATTACK FUNCTION

    $('.attackLogo').click(function () {
        damage++;
        var oppo = characterDict[opponentChosen.attr('id')];
        var hero = characterDict[heroChosen.attr('id')];
        oppo.hp -= hero.attackPower * damage;
        hero.hp -= oppo.attackPower;

        if (oppo.hp === 0 || oppo.hp < 0) {
            $('#attackInfo').text("You killed your opponent! Choose another.");
            $('.opponent').html('');
            opponentChosen = false;
            opponentSwitch = true;
            $('.character-section').css('display', 'flex');
            kills++;
            $("#kills").text("Current kills: " + kills);

        } else if (hero.hp === 0 || hero.hp < 0) {
            death_sound.play();
            $('#sub-title').text("GAME OVER. YOU LOST.");
            $('.hero').css('display', 'flex');
            deaths++
            heroChosen = false;
            opponentChosen = false;
            $('#attackInfo').text("Your opponent has killed you. CLICK HERE TO PLAY AGAIN.");

            // TO DO: I AM ATTEMPTING TO UNBING EVERYTHING ONCE THE GAME IS OVER. UNFORTUNATELY THE CHARACTER CHOICE CAN STILL BE MADE.

            $('.character, .opponent, .hero, .selection-img').off("click");

        }

        else {
            $('#attackInfo').text("You hit your opponent for " + (hero.attackPower * damage) + ". Your opponent's health is now at: " + oppo.hp + ". " + "Your opponent countered for: " + oppo.attackPower + " and left your health at " + hero.hp + ".");

        }
    });//END OF ATTACK FUNCTION

    // THIS ATTACKINFO CLICK RESETS THE GAME

    $('#attackInfo').click(function () {
        location.reload();
    });

});// END OF DOCUMENT READY

























//****SCRATCH NOTES****

// ON ATTACK CLICK, TAKE HERO ATTACK VALUE AND SUBTRACT IT FROM OPPONENT HEALTH
// DISPLAY damage = "YOU ATTACKED" + OPPONENT.NAME + "FOR" + hero.attackPower"

// INCREASE ATTACK VALUE BY TURNCOUNTER EXPONENTIAL INCREMENT ++
// TAKE OPPONENT ATTACK VALUE AND SUBTRACT IT FROM THE HERO HEALTH

//SET A CHARACTER ARRAY FROM THE HTML IDS CORRESPONDING TO EACH CHARACTER

