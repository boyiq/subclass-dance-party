var makeCupcakeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('cupcake');
};

makeCupcakeDancer.prototype = Object.create(makeDancer.prototype);
makeCupcakeDancer.prototype.constructor = makeCupcakeDancer;
