$(document).ready(function () {

  //GLOBAL 

  var glb_selectedHero = false;
  var glb_selectedOpponent = false;
  var glb_hero = {};
  var glb_opponent = {};
  var glb_opponentsLeft = 0;
  var glb_attacks = 0;
  var glb_defeatedOpponents = 0;
  // var glb_characterObjectArray = [kenshiro, rei, raoh, heart]

  //CHARACTER OBJECTS

  function start() {
    characters = resetCharacters()
    gameState = resetGameState()
    createCharacters()
  }

  function resetGameState() {
    // resets game state to originals.
    return {
      glb_selectedHero: null,
      glb_selectedOpponent: null,
      glb_hero: {},
      glb_opponent: {},
      glb_opponentsLeft: 0,
      glb_attacks: 0,
      glb_defeatedOpponents: 0
    }
  }

  function resetCharacters() {
    return {
      'kenshiro': {
        name: "Kenshirō",
        technique: "Hokuto Shin Ken",
        hp: 120,
        attackPower: 8,
        image: '<img src="assets/images/kenshiro.png" class="image">'
      },

      'rei': {
        name: "Rei",
        technique: "Nanto Suichōken",
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
      }
    }
  }
  //**FUNCTIONS**

  // INITIALIZE CHARACTER SELECTORS

  function initializeCharacterDivs(character, key) {

    var lcl_characterDiv = $("#character-choices").empty().append("<div class='character' data-name='" + key + "'>");
    var lcl_characterName = $("#character-choices").append("<div class='character-name'>").text(character.name);
    var lcl_characterTechnique = $("#character-choices").append("<div class='character-name'>").text(character.technique);
    var lcl_characterImage = $("#character-choices").append("<img alt='image' class='character-image'>").attr('src', character.image)
    var lcl_characterHP = $("#character-choices").append("<div class='character-hp'>").text(character.hp)
    var lcl_characterAttackPower = $("#character-choices").append("<div class='character-hp'>").text(character.attackPower)
    lcl_characterDiv.append(characterAttackPower).append(characterAttackPower).append(characterAttackPower)

    // RETURN VALUES TO THE GLOBAL SCALE
    return characterDiv
  }
//var chardiv = initializeCharacterDivs(character1,2)

  // RENDER CHARACTERS TO THE SELECTION AREA GOING THROUGH EACH CHARACTER'S OBJECT
  // THE KEYS IN THIS EXAMPLE WILL BE "NAME, TECHNIQUE, IMAGE, HP, AND ATTACK POWER"

  function renderCharacters() {
    var keys = $(this).keys(characters)
    for (var i = 0; i < keys.length; i++) {
      var characterKey = keys[i]
      var character = characters[characterKey]

      var lcl_characterDiv = initializeCharacterDivs(character, characterKey)
      $('#character-choices').append(lcl_characterDiv)
    }
  }

  function renderOpponents(selectedCharacterKey) {
    // RUN THROUGH THE REMAINING SELECTION AND RENDER OPPONENT DIVS
    // FOR ANYONE THAT HAS NOT BEEN SELECTED AS THE HERO
    var characterKeys = $(this).keys(characters)
    for (var i = 0; i < characterKeys.length; i++) {
      if (characterKeys[i] !== selectedCharacterKey) {
        var enemyKey = characterKeys[i]
        var enemy = characters[enemyKey]

        var enemyDiv = initializeCharacterDivs(enemy, enemyKey)
        $(enemyDiv).addClass('enemy')
        $('#character-choices').empty().append(enemyDiv)
      }
    }
  }

  // SELECTION OF ENEMY CHARACTER
  function opponentSelection() {
    $('.enemy').on('click.glb_selectedOpponent', function () {
      var opponentKey = $(this).attr('data-name')
      gameState.glb_selectedOpponent = characters[opponentKey]

      // RELOCATE OPPONENT
      $('#opponent').append(this)
      $('#attack-button').show()
      $('.enemy').off('click.glb_selectedOpponent')
    })
  }

  // ATTACK FUNCTION

  function attack(glb_attacks) {
    gameState.glb_selectedOpponent.hp -= gameState.glb_selectedHero.attack * glb_attacks
  }

  // COUNTER ATTACK FUNCTION

  function counterAttack() {
    gameState.glb_selectedHero.hp -= gameState.glb_selectedOpponent.counterAttack
  }

  // WHAT HAPPENS WHEN CHARACTER DIES FUNCTION

  function heroKilled(character) {
    return character.hp <= 0
  }

  function gameWon() {
    return gameState.glb_opponentsLeft === 0
  }

  function attackResult() {
    if (heroKilled(gameState.glb_selectedHero)) {
      alert('You were killed by ' + gameState.glb_selectedOpponent.name + '. Click reset to play again.')
      // display lose message to user, and present reset button.
      $('#selected-hero').empty()
      $('#reset-button').show()

      //ATTACK COMPLETE

      return true

    } else if (heroKilled(gameState.glb_selectedOpponent)) {

      gameState.glb_opponentsLeft--
      $('#opponent').empty()


      if (gameWon()) {

        alert('You win! Click Reset to play again')
        $('#reset-button').show()

      } else {

        alert('You killed ' + gameState.glb_selectedOpponent.name + '! Select another opponent to fight.')
        opponentSelection()
      }

      //ATTACK COMPLETE

      return true
    }
    //ATTACK NOT COMPLETE  
    return false
  }

  //RESET BUTTON EMPTYING DIVS

  function emptyDivs() {
    $('#selected-hero').empty()
    $('#opponent').empty()
    $('#character-choices .enemy').empty()
    $('#character-choices').empty()
    $('#characters-choices').show()
  }

  $('#character-choices').on('click', '.character', function () {
    var selectedKey = $(this).attr('data-name')
    gameState.glb_selectedHero = characters[selectedKey]
    $('#selected-hero').append(this)

    renderOpponents(selectedKey)

    $('#characters-choices').hide()

    // set the number of enemies, and enable enemy selection;
    gameState.glb_opponentsLeft = $(this).keys(characters).length - 1
    opponentSelection()
  })

  $('#attack-button').on('click.attack', function () {

    gameState.glb_attacks++

    // attack and defend stages
    attack(gameState.glb_attacks)
    counterAttack()

    // display updated values for character health
    $('#selected-hero .character-hp').text(gameState.glb_selectedHero.hp)
    $('#opponent .character-hp').text(gameState.glb_selectedOpponent.hp)

    if (attackResult()) {
      $(this).hide()
    }
  })

  $('#reset-button').on('click.reset', function () {
    emptyDivs()
    $(this).hide()

    startGame()
  })

  //END OF DOCUMENT READY
});