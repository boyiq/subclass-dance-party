$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);

    $('.heart').on('mouseover', function(event) {
      $(this).fadeOut('slow');
    });

    $('.dancer').on('click', function(e) {
      let x1 = $(this).position().top;
      let y1 = $(this).position().left;
      var currMin = Infinity;
      var currMinIndex, target, distance;
      for (let i = 0; i < window.dancers.length; i++) {
        var x2 = window.dancers[i].top;
        var y2 = window.dancers[i].left;
        if (window.dancers[i] !== $(this)) {
          distance = Math.pow(x1 - x2, 2) + Math.pow(y2 - y1, 2);
          console.log(`distance: ${distance}`);
          if (distance < currMin && distance > 10) {
            currMin = distance;
            currMinIndex = i;
            target = window.dancers[i];
          }
        }
      }
      window.dancers[currMinIndex].lineUp();
    });
    $('.lineUp').on('click', function(event) {
      for (let i = 0; i < window.dancers.length; i++) {
        window.dancers[i].lineUp();
      }
    });

  });
});
