console.log('hello from scripts');

var hoverBoxes = document.getElementsByClassName('hover-box');

for (var i = 0; i < hoverBoxes.length; i++) {
  hoverBoxes[i].addEventListener("mouseenter", function(e) {
    handleBoxMouseOver(e);
  });
  hoverBoxes[i].addEventListener("mouseleave", function(e) {
    handleBoxMouseExit(e);
  });
}

var handleBoxMouseOver = function(e) {
  var progressBar; 
  var currentHeight;
  var newHeight;

  progressBar = getProgressBar(e.currentTarget);

  currentHeight = parseInt(window.getComputedStyle(progressBar, null)
                  .getPropertyValue('height'));

  newHeight = currentHeight + 10;

  if (newHeight < 100) {
    progressBar.style.height = newHeight.toString() + 'px'; 
  }
}

// takes in hover box and returns the corresponding progress bar
var getProgressBar = function(node) {
  var children = node.parentNode.children;
  for (var i = 0; i < children.length; i++) {
    if (children[i].className === 'progress') {
      return children[i].children[0];
    }
  }
}

var handleBoxMouseExit = function(e) {
}
