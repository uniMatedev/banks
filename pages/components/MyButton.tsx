import React, { useState } from "react";
import axios from "axios";

const MyButton = () => {
  const [responseData, setResponseData] = useState("Waiting for response...");

  const handleButtonClick = async () => {
    try {
      const response = await axios.get("http://localhost:8000/consulting/consultation/1/");
      const responseData = response.data;
      console.log(responseData); // Log the response data to the console
      setResponseData(responseData);
    } catch (error) {
      console.error("Error fetching consultation:", error);
      setResponseData("Error occurred");
    }
  };
  

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Click Me
      </button>
      <h1>{responseData.toString()}</h1>
    </div>
  );
};

export default MyButton;
