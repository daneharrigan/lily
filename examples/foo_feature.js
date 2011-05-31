Scenario('Launching the app', function(){
  Given('I have my username "jsmith" and password "foo123"', function(username, password){
    fillIn('Username', { with: username });
    fillIn('Password', { with: password });
  });

  Then('I tap then "Sign In!" button', function(button){
    tapOn(button);
  });

  And('I am taken to the dashboard', function(){
    // determine how you're on the dashboard
  });
});
