/* This Algorithms verify if the phrase or word can spelled the same way both backword and forward. */

function isPalindrom(string){
    lowString = string.toLowerCase();
    var arrayString = lowString.split('');
    var validCharacter = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var lettersArray = [];

    /* For each element of array arrayString we look if it existe in valid character.
    IndexOf return index of the element in the array and if element  don't  existe he return -1.
    And if elment existe we add it in lettersArray whith push*/
    arrayString.forEach(char => {
      if(validCharacter.indexOf(char) > -1) lettersArray.push(char);
    })
    
    /* join methods return string of array whith concatenation
    reverse methods revers an array the first element become the last and alst element become the first 
    
    we verify if lettersArray are equal to lettreArray reverse */

    if(lettersArray.join('') === lettersArray.reverse().join('')) return true;
    else return false;
  }
  
  isPalindrom("Madam I'm Adam");