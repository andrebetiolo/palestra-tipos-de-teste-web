var expect = require('chai').expect;

var arrayDeValores = [1,2,3,4];

function somaValores(previousValue, currentValue){
  return previousValue + currentValue;
}

describe('Somatoria', function(){
  it('Sematoria do array deve ser igual a 10', function(){
    expect(arrayDeValores.reduce(somaValores)).to.equal(10);
  }) ;
});
