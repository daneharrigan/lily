### What is Lily?

Lily is a simple integration testing framework written in JavaScript.
It is currently being written to streamline iOS automated testing, but
with the hope of adoption to solve other problems.

Lily is broken out into four main components:

1. Scenarios
2. Expectations/Matchers
3. Platform drivers
4. Suite Runners

Lily has been broken out into these four pieces so that single
components can be swapped in and out to support things like Node.js or
usage within a browser.

### Plans

    Scenario('Asking John Smith a question',function(){
      var person;
      Before(function(){
        person = new Person('John Smith');
      });

      Given('I know "John Smith"',function(full_name){
        expect(person.is(full_name)).toBe(true);
      });

      When('I ask John, "What is your age?"',function(question){
        person.ask(question);
      });

      Then('John answers with "25"',functino(age){
        age = parseInt(age);
        expect(person.answer).toEqual(age);
      });
    });
