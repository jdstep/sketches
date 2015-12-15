
var enemies = {
  "Counter": {
    name: "Counter",
    hp: 2,
    img: 'img/counter.gif'
  }

}




$(document).ready(function() {
  var $root = $('.root');

  var loadEnemy = function(name) {
    name = "Counter";
    var $enemyStats = $('.enemy.stats');
    var $enemyImg = $('.enemy-img');
    var enemyData = enemies[name];
    var $enemyName = $('.enemy-name');
    var $enemyHp = $('.enemy-hp');

    $enemyImg.attr('src', enemyData.img);
    $enemyName.html('<h3>' + enemyData.name + '</h3>');
    $enemyHp.html('<h2>' + enemyData.hp + '</h2>');

  };

  var setupListeners = function() {
    $('.buy-btn').click(function() {
      console.log('clicked the button');
    }); 
  };

  var addPawn = function(attackValue) {
    var $pawnsContainer = $('.pawns-container');

    var $pawnTemplate = $(
        '<div class="pawn-container">' +
          '<div class="pawn-stats">' + 
            '<div class="pawn-attack-value">' +
            '</div>' + 
          '</div>' + 
          '<div class="pawn-options">' + 
            '<button class="pawn-attack-btn">Attack</button>' + 
          '</div>' +
        '</div>')

    $pawnTemplate.find('.pawn-attack-value').html('<p>' + attackValue + '</p>');
    $pawnTemplate.find('.pawn-optons').html('<button class="pawn-attack-btn">Attack</button>');
    $pawnTemplate.find('.pawn-attack-btn').click(function() {
      console.log('clicked pawn attack button');
    });

    console.log($pawnTemplate);

    $pawnsContainer.append($pawnTemplate);




  }



  setupListeners();
  loadEnemy();
  addPawn(6);
});