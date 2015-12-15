
var enemies = {
  "Counter": {
    name: "Counter",
    hp: 200,
    img: 'img/counter.gif'
  }

}

var pawns = {};
var pawnID = 1;
var numPawns = 0;




$(document).ready(function() {
  var $root = $('.root');

  var loadEnemy = function(name) {
    name = "Counter";
    var $enemyStats = $('.enemy.stats');
    var $enemyImg = $('.enemy-img');
    var enemyData = enemies[name];
    var $enemyName = $('.enemy-name');
    var $enemyHp = $('.enemy-hp');
    var gold = 100;

    $enemyImg.attr('src', enemyData.img);
    $enemyName.html('<h3>' + enemyData.name + '</h3>');
    $enemyHp.html('<h2>' + enemyData.hp + '</h2>');

  };

  var setupListeners = function() {
    $('.buy-btn').click(function() {
      if (numPawns <= 5) {
        var attackValue = Math.floor(Math.random() * (5 - 10) + 5);
        addPawn(attackValue);
      }
    }); 

    $(document).on('attack', function(e, data) {
      e.preventDefault();
      var $enemy = $('.enemy-container');
      var $enemyHP = $enemy.find('.enemy-hp');
      var enemyHPValue = $enemyHP.text();
      $enemyHP.html('<h2>' + (enemyHPValue - data.attackValue) + '</h2>');
    });


  };

  var addPawn = function(attackValue) {
    var pawn = {
      attackValue: attackValue,
      pawnID: pawnID++
    };

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

    pawns[pawn.pawnID] = pawn;
    $pawnTemplate.find('.pawn-attack-value').html('<p>' + attackValue + '</p>');
    $pawnTemplate.find('.pawn-optons').html('<button class="pawn-attack-btn">Attack</button>');
    $pawnTemplate.find('.pawn-attack-btn').click(function() {
      $(document).trigger('attack', [{attackValue: attackValue}]);

    });

    $pawnsContainer.append($pawnTemplate);

    numPawns++;

  }




  loadEnemy();
  setupListeners();
});