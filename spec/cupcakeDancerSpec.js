describe('makeCupcakeDancer', function() {

  var cupcakeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cupcakeDancer = new makeCupcakeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(cupcakeDancer.$node).to.be.an.instanceof(jQuery);
  });

});