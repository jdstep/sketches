var 

var addAnimalButton = document.getElementsByName('add-animal')[0];
var animalTableBody = document.getElementsByClassName('animal-table-body')[0];

var handleAddAnimalClick = function() {
  var animalName = document.getElementsByName('animal')[0].value;
  
}
addAnimalButton.addEventListener('click', function() {
  handleAddAnimalClick();

});