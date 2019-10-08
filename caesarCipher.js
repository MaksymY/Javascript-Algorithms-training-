function caesarCipher(str, num){
    var lowStr = str.toLowerCase();
    var arrayStr = lowStr.split('');
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var indexStr = [];
    var finalArray = [];
  
    arrayStr.forEach(chr =>{
      if(chr === ' '){
        indexStr.push(' ');
      }
      else if(alphabet.indexOf(chr) > -1){
        indexStr.push(alphabet.indexOf(chr));
      }
    });
  
    indexStr.forEach(chr => {
      if(chr === ' '){
        finalArray.push(' ');
      };
      if(chr + num > 25){
        var sup = (chr + num) - 26;
        finalArray.push(alphabet[sup]);
      };
      if(chr + num <= 25){
        finalArray.push(alphabet[chr + num]);
      };
    });
  
    console.log(finalArray.join(''));
  }
  
  caesarCipher('zoo keeper', 2);