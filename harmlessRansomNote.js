/* This Algorithms made from word cut out from a magazin harmless ransom no */

function harmlessRansomNote(noteText, noteMagazin){
    var magazinArray = noteMagazin.split(' ');
    var textArray = noteText.split(' ');
    var magazinObj = {};
    var possibleNote = true;
  
    //for aeach element of array magazinArray we execute word function
    //and we verify if element  in array magazinArray existe in magazinObj if not we initialise it at 0
    //if it existe we add 1
    magazinArray.forEach(word => {
      if(!magazinObj[word]) magazinObj[word] = 0;
      magazinObj[word]++;
    })
    
    //for aeach element of array textArray we execute word function
    //and we verify if element of textArray existe in magazinObj and if he is diffrent from 0 if this condition is okey we -1
    textArray.forEach(word => {
      if(magazinObj[word] > 0 && magazinObj[word] !== 0){
        magazinObj[word]--;
      }else possibleNote = false;
    });
   return possibleNote;
  }
  
  harmlessRansomNote('salut ami', 'salut copain ça va copain');