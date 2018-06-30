//GLOBAL 
var characters = $('.character');
var heroSwitch = false;
var opponentSwitch = false;
var heroChosen = false;
var opponentChosen = false;
var killCount = 0;
var damage = 0;

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
        hp: 120,
        attackPower: 8,
        image: '<img src="assets/images/mamiya.png" class="image">'
    },
    raoh: {
        name: 'Raoh',
        technique: 'Hokuto Shin Ken ',
        hp: 120,
        attackPower: 8,
        image: '<img src="assets/images/raoh.png" class="image">'
    },
    heart: {
        name: 'Heart',
        technique: 'Kenpo Goroshi',
        hp: 120,
        attackPower: 8,
        image: '<img src="assets/images/heart.png" class="image">'
    },
    shu: {
        name: 'Shu',
        technique: 'Kenpo Goroshi',
        hp: 120,
        attackPower: 8,
        image: '<img src="assets/images/shu.png" class="image">'
    },
    kaioh: {
        name: 'Kaioh',
        technique: 'Kenpo Goroshi',
        hp: 120,
        attackPower: 8,
        image: '<img src="assets/images/kaioh.png" class="image">'
    }
}

$(document).ready(function () {

    $('.character').each(function(index) {
        var $character = $(this);
        var characterData = characterDict[this.id];
        $character.find('.technique').append(characterData.technique);
        $character.find('.health').append(characterData.hp);
        $character.find('.attackPower').append(characterData.attackPower);
        // etc.
      });
      


    $('.character').click(function () {

        if (heroChosen == false) {

            for (var i = 0; i < characters.length; i++) {
                if (characters[i] == this) {
                    $('.hero').append(characters[i]);
                    $('.character').removeClass(".character").addClass('.enemy');
                    heroSwitch = true;
                    heroChosen = $(this);
                } // if
            } // for loop

        } // if
        else if (heroSwitch == true && opponentChosen == false && killCount == 0) {

            for (var i = 0; i < characters.length; i++) {
                if (characters[i] == this) {
                    $('.opponent').append(characters[i]);
                    $('.character-section').css('display', 'none');
                    opponentSwitch = true;
                    opponentChosen = $(this);
                } // end of if
            } // end for loop

        } // end if 

    }); // end of click function

    $('.attackLogo').click(function() {
        damage++;
        console.log(opponentChosen);
        var opponentHP = opponentChosen.find(".stats.health");
        console.log(parseInt(opponentHP.text()));
        //console.log(opponentChosen.hp);

        //opponentChosen.hp = opponentChosen.hp - (heroChosen.attackPower * damage);
        //console.log(opponentChosen);

        //$('#attackInfo').text(opponentChosen.hp + " now");
        // etc.
      });
});

























//****SCRATCH NOTES****

// ON ATTACK CLICK, TAKE HERO ATTACK VALUE AND SUBTRACT IT FROM OPPONENT HEALTH
// DISPLAY damage = "YOU ATTACKED" + OPPONENT.NAME + "FOR" + hero.attackPower"

// INCREASE ATTACK VALUE BY TURNCOUNTER EXPONENTIAL INCREMENT ++
// TAKE OPPONENT ATTACK VALUE AND SUBTRACT IT FROM THE HERO HEALTH

//SET A CHARACTER ARRAY FROM THE HTML IDS CORRESPONDING TO EACH CHARACTER

