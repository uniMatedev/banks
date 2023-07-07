import { useState } from "react";

const apiUrl = process.env.NEXT_PUBLIC_CONVERTER_API_URL;

interface InputValue {
    value: number;
    unit: string;
}

const LengthConverter = () => {
    const [value, setValue] = useState("");
    const [inputUnit, setInputUnit] = useState("");
    const [convertedValues, setConvertedValues] = useState({});

    const convertLength = async () => {
        try {
            const response = await fetch(
                apiUrl,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        value,
                        input_unit: inputUnit,
                    }).toString(),
                }
            );

            if (!response.ok) {
                throw new Error("Conversion failed");
            }

            const data = await response.json();
            const convertedValues = data?.converted_values;
            setConvertedValues(convertedValues);
        } catch (error) {
            console.error(error);
            setConvertedValues({});
        }
    };

    return (
        <div className="container mx-auto mt-8 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-bold mb-2">Length Converter</h2>
                <div className="grid grid-cols-4 gap-6 mb-4">
                    <div className="col-span-1">
                        <div className="flex items-center">
                            <label className="font-semibold mr-2">Value:</label>
                            <input
                                type="number"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder="Enter value"
                                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex items-center">
                            <label className="font-semibold mr-2">Unit:</label>
                            <select
                                value={inputUnit}
                                onChange={(e) => setInputUnit(e.target.value)}
                                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                            >
                                <option value="">Select input unit</option>
                                <option value="feet">feet</option>
                                <option value="inches">inches</option>
                                <option value="yards">yards</option>
                                <option value="meters">meters</option>
                                <option value="centimeters">centimeters</option>
                                <option value="millimeters">millimeters</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-1 flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                            onClick={convertLength}
                        >
                            Convert
                        </button>
                    </div>
                </div>
                <div>
                    {Object.keys(convertedValues).length > 0 && (
                        <div className="mt-4">
                            <h4 className="font-semibold mb-2">Converted values:</h4>
                            <ul className="list-disc pl-6">
                                {Object.entries(convertedValues).map(([unit, value]) => {
                                    const isInput = unit === "input";
                                    if (isInput && typeof value === "object" && value !== null) {
                                        const inputValue = value as InputValue;
                                        return (
                                            <li key={unit} className="mb-1">
                                                {`${inputValue.value} ${inputValue.unit}`}
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li key={unit} className="mb-1">
                                                {`${unit}: ${value}`}
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LengthConverter;
