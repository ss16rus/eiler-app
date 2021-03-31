// Простые делители числа 13195 - это 5, 7, 13 и 29.
// Каков самый большой делитель числа 600851475143, являющийся простым числом?

import React, {useState, useEffect} from 'react';

export default function Test ({limit}) {
  const [time, setTime] = useState()
  const [progress, setProgress] = useState( 0 );

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    const step = 200000000;

    const process = ( from ) => {
    setTimeout(() => {
        let counter = 0;

        while (counter < step && from + counter < limit ) {
            ++counter;
        }

        const pr = Math.round((from + counter) * 100 / limit);
        setProgress( pr );
        console.log( pr );

        if ( from + counter < limit) process ( from + counter );

    }, 0);
    }

    process( 0 );

    return () => {
      clearInterval( interval );
    }
  }, [])

	return (
    <div>{time} Выполнено {progress}%</div>
	)
}
