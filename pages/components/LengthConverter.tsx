import React, { useState } from "react";
const apiUrl = process.env.NEXT_PUBLIC_API_URL
const LengthConverter = () => {

  const [value, setValue] = useState(10);
  const [unit, setUnit] = useState("meters");
  const [loading, setLoading] = useState(false);
  const [converted, setConverted] = useState({});
  const [error, setError] = useState(null);

  const handleConvert = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiUrl + 'convert/length/', {
        method: 'POST',
        body: JSON.stringify({
          value: Number(value),
          unit  
        })
      });
      
      const data = await response.json();

      setConverted(data);

    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto p-4">

      {error && 
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          {error}
        </div>
      }

      <label className="block text-gray-700 font-bold mb-2" htmlFor="value">
        Value
      </label>

      <input
        id="value"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
        type="number"
        value={value}
        onChange={e => setValue(Number(e.target.value))} 
      />

      <label className="block text-gray-700 font-bold mb-2" htmlFor="unit">
        Unit
      </label>

      <select
        id="unit"
        className="form-select block w-full mt-1"
        value={unit}
        onChange={e => setUnit(e.target.value)}
      >
        <option value="meters">Meters</option>
        <option value="feet">Feet</option>
        <option value="inches">Inches</option>
        <option value="miles">Miles</option>
        <option value="kilometers">Kilometers</option>
        <option value="millimeters">Millimeters</option>
        <option value="centimeters">Centimeters</option>
        <option value="nautical miles">Nautical Miles</option>
        <option value="yards">Yards</option>
      </select>

      <button
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleConvert}  
      >
        {loading ? 'Converting...' : 'Convert'}
      </button>

      <div className="mt-4">
        {Object.keys(converted).map(unit => (
          <div key={unit} className="text-gray-700">
            {unit}: {converted[unit]}
          </div>
        ))}
      </div>

    </div>
  );
}

export default LengthConverter;