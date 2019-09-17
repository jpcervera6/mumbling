function accum (letters){
    let key = true;
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(i = 0; i < letters.length; i++){
      if(alphabet.includes(letters.charAt(i).toUpperCase())){
        key = true;
      } else{
        key = false;
        console.log('Characters not valid!');
        break;
      }
    }
    if(key === true){
      let mumble = '';
      for(i = 0; i < letters.length; i++){
        for(j = 0; j<=i+1; j++){
          if(j === 0){
            mumble = mumble + letters.charAt(i).toUpperCase();
          } else{
            if(j === i+1 && j < letters.length){
              mumble = mumble + '-';
            } else{
              if(j < i+1){
              mumble = mumble + letters.charAt(i).toLowerCase();
            } else{
              continue;
            }
            }
          }
        }
      }
      console.log(mumble);
    }
    }
    accum();