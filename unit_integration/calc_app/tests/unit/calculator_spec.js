var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add numbers', function(){
    actual = calculator.add(1)
    assert.equal(actual, calculator.add(4))
  })

  it('it can subtract numbers', function(){
    actual = calculator.subtract(4)
    assert.equal(actual, calculator.subtract(7))
  })

  it('it can multiply numbers', function(){
    actual = calculator.multiply(3)
    assert.equal(actual, calculator.multiply(5))
  })

  it('it can divide numbers', function(){
    actual = calculator.divide(21)
    assert.equal(actual, calculator.divide(7))
  })

  it('it can concatenate multiple number button clicks', function(){
    actual = calculator.numberClick()
    assert.equal(actual, calculator.numberClick())
  })

  it('it can chain multiple operations together', function(){
    actual = calculator.operatorClick()
    assert.equal(actual, calculator.operatorClick())
  })

  // it('it can clear the running total without affecting the calculation', function(){
  //   actual = calculator.clearClick()
  //   assert.equal(actual, clearClick())
  // })

});
