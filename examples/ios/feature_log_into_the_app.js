#import "helper.js"

Scenario('Logging into the application', function(){
  Given('I have a username of "dharrigan" and a password of "sweet123"', function(username, password){
    fillIn('Username', { with: username });
    fillIn('Password', { with: password });
  });

  When('I tap on the "Login" button', function(button){
    tapOn(button);
  });

  Then('I see the "Logout" button', function(button){
    var element = application.getElementByLabel(button);
    expect(element).toExist();
  });

  And('I see the "Settings" button', function(button){
    var element = application.getElementByLabel(button);
    expect(element).toExist();
  });
});
