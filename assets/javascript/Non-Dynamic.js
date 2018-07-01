//GLOBAL 

var characters = $('.character');
var heroSwitch = false;
var opponentSwitch = false;
var heroChosen = false;
var opponentChosen = false;
var killCount = 0;
var deaths = 0;
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

    var result = $('#result')

result.hide().html('<%= j @result %>').fadeIn(250);
playAudio(result);

function playAudio(result){
  if (result.html() === "Yes"){

    $('#yes-audio').trigger('play')
  }
  else if (result.html() === "Nope."){
    $('#no-audio').trigger('play')
  }

}

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
                    $('.character').removeClass("character").addClass('enemy');
                    $('.hero').find('.enemy').removeClass("character col-md-2 col-sm-4 col-xs-6 enemy");
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
                    $('.opponent').find('.enemy').removeClass("character col-md-2 col-sm-4 col-xs-6 enemy");

                    opponentSwitch = true;
                    opponentChosen = $(this);
                } // end of if
            } // end for loop

        } // end if 

    }); // end of click function

    $('.attackLogo').click(function() {
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
        
        } else if (hero.hp === 0 || hero.hp < 0) {
            $('#sub-title').text("GAME OVER. YOU LOST.");
            $('.hero').css('display', 'flex');
            deaths++
            $('#attackInfo').text("Your opponent has killed you.");
        } 

        else {
        $('#attackInfo').text("You hit your opponent for " + (hero.attackPower*damage) + ". Your opponent's health is now at: " + oppo.hp + ". " + "Your opponent countered for: " + oppo.attackPower + " and left your health at " + hero.hp + ".");
       
        }
      });


});

























//****SCRATCH NOTES****

// ON ATTACK CLICK, TAKE HERO ATTACK VALUE AND SUBTRACT IT FROM OPPONENT HEALTH
// DISPLAY damage = "YOU ATTACKED" + OPPONENT.NAME + "FOR" + hero.attackPower"

// INCREASE ATTACK VALUE BY TURNCOUNTER EXPONENTIAL INCREMENT ++
// TAKE OPPONENT ATTACK VALUE AND SUBTRACT IT FROM THE HERO HEALTH

//SET A CHARACTER ARRAY FROM THE HTML IDS CORRESPONDING TO EACH CHARACTER

