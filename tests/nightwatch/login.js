var url = 'http://localhost/palestra/';
var max_timeout = 10000;

var usuario = "andre";
var senha = "palestra";
var form_login = "#form_login";

module.exports={
  'Teste login':function(browser){
    browser
      .url(url)
      .waitForElementVisible('#usuario', max_timeout)
      .clearValue('#usuario')
      .clearValue('#senha')
      .setValue('#usuario', usuario)
      .setValue('#senha', senha)
      .submitForm(form_login)
  },

  'Logado':function(browser){
    browser
      .waitForElementVisible("h1", max_timeout)
      .assert.containsText('h1', 'Login feito com sucessox')
      // .pause(5000)
  },

  'Fecha browser':function(browser){
    browser.end();
  }
};
