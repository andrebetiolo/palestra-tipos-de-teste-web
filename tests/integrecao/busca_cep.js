var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
chai.use(chaiHttp);

var cep = 76914850;
var bairro = 'Primavera';

describe('Teste de integração - Busca Cep', function(){
  var url = 'http://localhost/cep/';
  // var url = 'http://viacep.com.br/ws/'+cep+'/json';
  it('Cep ' + cep + ' deve retornar bairro ' + bairro, function(done){
    chai.request(url)
    .get('/')
    .end(function(err, res){
      console.log(res.text);
      expect(res.statusCode).to.equal(200);
      expect(res.text).to.contain(bairro);
      done();
    });
  }) ;
});
