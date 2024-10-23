"use client";
import Item from "./item";
import { useState } from "react";
import item from "./items.json";


export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    const sorted = [...item].sort((a, b) => { 
      if (sortBy === "name"){ 
        return a.name > b.name; 

      } 
      else if (sortBy === "category"){ 
        return a.category > b.category;

      }
    });
 
    
      return(
        <div className="min-h-screen">
            <div className="flex space-x-4 mb-4">
                <button 
                    onClick={() => setSortBy("name")} 
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Sort by Name
                </button>
                <button 
                    onClick={() => setSortBy("category")} 
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Sort by Category
                </button>
            </div>
      
           

        <main>
            <ul>
                {sorted.map((itemObj) => {
                    return <Item key={itemObj.id} itemObj={itemObj} />;
                    })}
               
            </ul>
        </main>
        </div>
      );
}
