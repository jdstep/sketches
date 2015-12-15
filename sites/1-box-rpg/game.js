
var enemies = {
  "Counter": {
    name: "Counter",
    hp: 5,
    img: 'http://www.11points.com/images/animatedgifs/counter.gif'
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

  }
  

  loadEnemy();
});