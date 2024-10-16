"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

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

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert("Added Item: " + name + " " + quantity + " " + category);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <div className="min-h-screen flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
            <input type="text" 
                    value={name} onChange={(event) => setName(event.target.value)} 
                    placeholder="Item Name" 
                    className="p-2 mt-4 rounded-lg text-black"
                    required 
                    />
                <div className="flex items-center space-x-4 mt-4">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold mb-4">{quantity}</h2>
                        <div className="flex space-x-4">
                            <button
                                type="button"
                                onClick={increment} 
                                className={incrementButtonStyle}
                            >
                                +
                            </button>
                            <button
                                type="button" 
                                onClick={decrement}  
                                className={decrementButtonStyle}
                            >
                                -
                            </button>
                        </div>
                    </div>
                    <select 
                        value={category} 
                        onChange={(event) => setCategory(event.target.value)}
                        className="p-2 mt-4 rounded-lg text-black"
                    >
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>

                    </select>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded mt-4">Submit</button>
            </form>
        </div>
    );
        
}
