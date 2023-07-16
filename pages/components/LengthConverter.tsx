import React, { useState } from "react";

const LengthConverter = () => {

  const [converted, setConverted] = useState({});

  const handleConvert = async () => {
    try {
      const response = await fetch('https://agile-chamber-63259-f06a567fe59d.herokuapp.com/api/convert/length/', {
        method: "POST",
        body: JSON.stringify({
          value: 10,
          unit: 'meters'  
        })
      });
      const data = await response.json();
      setConverted(data);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={handleConvert}>Convert</button>
      
      <div>
        {Object.keys(converted).map(unit => (
          <div key={unit}>
            {unit}: {converted[unit]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LengthConverter;