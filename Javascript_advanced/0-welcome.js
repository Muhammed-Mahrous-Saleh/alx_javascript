#!/usr/bin/node

// Welcome the user
function welcome (firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  function displayFullName (fullName) {
    alert('Welcome' + ' ' + fullName + '!');
  }
  displayFullName(fullName);
}
