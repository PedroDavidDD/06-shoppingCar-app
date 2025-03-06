import React, { useEffect, useState } from 'react'

const Timer = () => {
  const date = new Date(0, 0, 0, 23, 0, 0);
   const [timeDate, setTimeDate] = useState( date );

   useEffect(() => {
    const interval = setInterval(()=>{        
        setTimeDate( prevDate => {
            if (
                prevDate.getHours() == 0 && 
                prevDate.getMinutes() == 0 && 
                prevDate.getSeconds() == 0
            ){
                return date; 
            }
            return new Date(prevDate.getTime() - 1000);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>{ timeDate.toLocaleTimeString("en-GB") }</span>
  )
}
export default Timer;