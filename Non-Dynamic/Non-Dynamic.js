$(document).ready(function () {

    //GLOBAL 



    //CHARACTER ARRAY

    var characters = [

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
    var characters = $('.character-img');
    // var gameStarted = false;


    $('.character-img').click(function () {
        for (var i = 0; i < characters.length; i++) {
                if (characters[i] == this) {
                            $('.hero').append(characters[i]);
                }
            }
        });
            
        
                    // if (characters[i] != this) {
                    //     $(characters[i]).addClass("redBorder")
                    // };


                    // gameStarted = true;
                    // //if the image is clicked, it moves to new row
                    // $('#enemiesAvailable img.character').click(function () {
                    //     

                    //         if (characters[i] = this) {
                    //             $(characters[i]).removeClass("redBorder").addClass('yellowBorder')
                    //         };

                    //     }

                    // });
                



    // //Scoring section
    // var pointsIncrementUser = 8;
    // var initialPoints = 8;
    // var pointsIncrementEnemy = 25;
    // var pointsUser = 120; //beginning HP
    // var pointsEnemy = 180; //beginning HP


    // $('#attack').click(function () {
    //     if (pointsEnemy >= 0 && pointsUser >= 0) {
    //         pointsEnemy = pointsEnemy - pointsIncrementUser;
    //         pointsUser = pointsUser - pointsIncrementEnemy;
    //         pointsIncrementUser = pointsIncrementUser + initialPoints;
    //         document.querySelector('#score').innerHTML =
    //             '<p>You attacked enemy for ' + pointsUser + ' points.</p>' +
    //             '<p>Enemy attacked you for ' + pointsEnemy + ' points.</p>';

    //     } else
    //         alert("Game Over!!");

    // });

    // $('#reset').click(function () {
    //     location.reload();
    // });
    // var characters = $('.character-img');
    // var gameStarted = false;



    // $('#character-img').click(function () {
    //     if (gameStarted == false) {
    //         for (var i = 0; i < characters.length; i++) {
    //             if (characters[i] != this) {
    //                 $(characters[i]).addClass("redBorder");
    //             }
    //         }
    //     }

    // });


});       //END OF DOCUMENT READY
