"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        let currentCount = quantity;
        if(currentCount < 20) {
            setQuantity(currentCount + 1);
        }
    };

    const decrement = () => {
        let currentCount = quantity;
        if (currentCount > 1) {
            setQuantity(currentCount - 1);
        }
    };

    let incrementButtonStyle = "px-4 py-2 bg-blue-500 text-white rounded";
    if (quantity >= 20)  {
        incrementButtonStyle = "px-4 py-2 bg-blue-500 text-white rounded opacity-50";
    }

    let decrementButtonStyle = "px-4 py-2 bg-red-500 text-white rounded";
    if (quantity <= 1) {
        decrementButtonStyle = "px-4 py-2 bg-red-500 text-white rounded opacity-50";
    }

    return (
        <div className="min-h-screen flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">{quantity}</h2>
                <div className="flex space-x-4">
                    <button 
                        onClick={increment} 
                        className={incrementButtonStyle}
                    >
                        +
                    </button>
                    <button 
                        onClick={decrement}  
                        className={decrementButtonStyle}
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
        
}
