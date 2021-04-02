// Число-палиндром с обеих сторон (справа налево и слева направо) читается одинаково.
// Самое большое число-палиндром, полученное умножением двух двузначных чисел –
// 9009 = 91 × 99.
//
// Найдите самый большой палиндром, полученный умножением двух трехзначных чисел.


import React, {useEffect, useState} from 'react';

function isItPalindrom ( num ) {
  const arr = new Array(6);
  let length = 0;

  let ostatok = num;

  while ( ostatok ) {
    arr[length++] = ostatok % 10;
    ostatok = Math.floor( ostatok / 10 );
  }

  let isPalindrom = true;

  for( let i=0; i < length-1-i; ++i) {
    if (arr[i] != arr[length -1-i]) {
      isPalindrom = false;
      break;
    }
  }

  return isPalindrom;
}


function Task () {
  let firstNumber, secondNumber;
  let answer = 0;

  const [gotAnswer, setAnswer] = useState( 0 );

  useEffect(() => {
    for (firstNumber = 999; firstNumber>=100; --firstNumber)
      for (secondNumber = firstNumber ; secondNumber >=100; --secondNumber ) {
        const nextNumber = firstNumber * secondNumber;

        if ( isItPalindrom( nextNumber )) {
          if ( answer < nextNumber  ) answer = nextNumber;
          break;
        }
      }

      setAnswer( answer );
  }, [])

  return  gotAnswer != 0 ?
    <div>
      Founded palindrom { gotAnswer }
    </div>
  :
    <div> Ищем ответ...</div>
}

export default Task;