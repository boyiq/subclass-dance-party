var makeheartDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('heart');
  // calling the function below will make heart reamin 150px, 150px forever
  this.grow();
};

makeheartDancer.prototype = Object.create(makeDancer.prototype);
makeheartDancer.prototype.constructor = makeheartDancer;

makeheartDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // setTimeout(this.step.bind(this));
  // calling the function below will make heart smaller and bigger with animating every 3seconds.
  // this.grow();
};

makeheartDancer.prototype.grow = function() {
  this.$node.animate({
    width: '150px',
    height: '150px'
  }, 3000);
};



