var makeExpandingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass('blink');
  this.$node.addClass('expander');
};

makeExpandingDancer.prototype = Object.create(makeDancer.prototype);
makeExpandingDancer.prototype.constructor = makeExpandingDancer;

makeExpandingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({width: '100px', height:'100px'});
  this.$node.animate({width: '25px', height:'25px'});
};