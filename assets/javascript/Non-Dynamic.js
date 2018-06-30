//GLOBAL
const characterClass = '.character';
const characters = $(characterClass);
let heroChosen = false;
let opponentChosen = false;
const killCount = 0;
const damage = 0;

//YOU NEED SEPARATE ARRAY OBJECTS BECAUSE THE OBJECT WILL HOLD MULTIPLE KEYS AND VALUES THAT CORRESPOND TO THE
// CHOSEN CHARACTER

//CHARACTER ARRAY

const characterArray = [
  {
    name: 'Kenshiro',
    technique: 'Hokuto Shin Ken',
    hp: 120,
    attackPower: 8,
    image: '<img src="assets/images/kenshiro.png" class="image">'
  },
  {
    name: 'Rei',
    technique: 'Nanto Suichoken',
    hp: 120,
    attackPower: 8,
    image: '<img src="assets/images/rei.png" class="image">'
  },
  {
    name: 'Raoh',
    technique: 'Hokuto Shin Ken ',
    hp: 120,
    attackPower: 8,
    image: '<img src="assets/images/raoh.png" class="image">'
  },
  {
    name: 'Heart',
    technique: 'Kenpo Goroshi',
    hp: 120,
    attackPower: 8,
    image: '<img src="assets/images/heart.png" class="image">'
  }
];

characterArray.forEach((character) => {
  const name = '#' + character.name.toLowerCase();
  $(name + ' > .technique')
    .text('Technique: ' + character.technique);
  $(name + ' > .health')
    .text('Health: ' + character.hp);
  $(name + ' > .attackPower')
    .text('Attack Power: ' + character.attackPower);

});
//**FUNCTIONS**
$(document)
  .ready(function () {

    $('.character')
      .click(function () {
        console.log(this);

        let i;
        if (heroChosen === false) {

          for (i = 0; i < characters.length; i++) {
            console.log(characters[i] === this);
            if (characters[i] === this) {
              $('.hero')
                .append(characters[i]);
              $('.character')
                .removeClass('.character')
                .addClass('.enemy');
              heroChosen = true;
            } // if
          } // for loop

        } // if
        else if (heroChosen === true && opponentChosen === false && killCount === 0) {
          for (i = 0; i < characters.length; i++) {
            if (characters[i] === this) {
              opponentChosen = true;
              $('.opponent')
                .append(characters[i]);
              $('.enemy')
                .css('display', 'none');

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
