// Простые делители числа 13195 - это 5, 7, 13 и 29.
// Каков самый большой делитель числа 600851475143, являющийся простым числом?

import React, {useState, useEffect} from 'react';


function isSimple( num ) {
  if ( num % 2 == 0 ) return false;

  let divider = 3;
  const halfTarget = Math.floor( num / 2);
  while ( num % divider != 0 && divider < halfTarget) divider+=2;
  return divider >= halfTarget;
}


function* myGenerator( target ) {
  const data = {
    progress: 0,
    value: 0
  }
  let halfTarget = Math.round( target / 2 );
  if (halfTarget % 2 == 0 ) --halfTarget;

  for (let loopDivider = 2; loopDivider <= target / loopDivider; ++loopDivider) {

    if ( target % loopDivider == 0 ) {
      const progress = Math.round( 100 * loopDivider / halfTarget );
      data.progress = progress;
      const secondDivider = target / loopDivider;

      const loopDividerIsSimple = isSimple( loopDivider );
      const secondDividerIsSimple = isSimple( secondDivider );

      if ( loopDividerIsSimple && secondDividerIsSimple ) {
        data.value = loopDivider > secondDivider ? loopDivider : secondDivider;
      } else {
        if ( loopDividerIsSimple ) {
          data.value = loopDivider;
        } else {
          if ( secondDividerIsSimple ) {
            data.value = secondDivider;
          } else {
            data.value = 1;
          }
        }
      }
      yield data;
    }
  }
}



export default function Task ({target}) {
  const [divider, setDivider] = useState( 0 );
  const [progress, setProgress] = useState( 0 );


  useEffect(() => {
    const forClearing = {
      timer: null,
      interval: null
    }

    console.log("Start", new Date().toUTCString());

    let prevProgress = 0;
    let maxDivider = 1;
    const gen = myGenerator( target );

    function myFunc () {
      const data = gen.next();

      if ( data.done ) {
        setDivider( maxDivider );
        console.log("Finish", new Date().toUTCString());

      } else {
        const myData = data.value;

        if ( maxDivider < myData.value ) maxDivider = myData.value;

        if ( prevProgress != myData.progress ) {
          prevProgress = myData.progress;
          setProgress( myData.progress );
        }

        forClearing.timer = setTimeout( myFunc, 0);
      }
    }

    myFunc();

    return () => {
      clearTimeout( forClearing.timer );
    }
  }, [])

	return (
    divider == 0 ?
    <div>Выполнено {progress}%</div>
    :
    <div>Наибольший простой делитель {target}: {divider}</div>
	)
}
