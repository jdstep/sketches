
var enemies = {
  "Counter": {
    hp: 5,
    img: 'http://www.11points.com/images/animatedgifs/counter.gif'
  }

}

var loadEnemy = function(name) {
  name = "Counter";
  var $enemyStats = $('.enemy.stats');
  var $enemyImg = $('.enemy-img');
  var enemyData = enemies[name];

  $enemyImg.attr('src', enemyData.img);
}


$(document).ready(function() {
  var $root = $('.root');

  loadEnemy();
});