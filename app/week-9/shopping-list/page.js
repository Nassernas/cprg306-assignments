"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";


export default function Page() {

  const {user} = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) => {
    setItems( [...items, newItem])
  };
  const [selectedItemName, setSelectedItemName] = useState("");
  const handleItemSelect = (itemObj) => {
    const cleanedName = itemObj.name.trim();
    setSelectedItemName(cleanedName);

  }
  if (!user) {
    return (
      <main className="bg-gray-800 p-5 text-white ">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <p>You must be signed in to view this page.</p>
      </main>
)};





    return (
      <main className="bg-gray-800 p-5 text-white ">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <div className="flex">
        <div className="w-1/2 pr-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2 pl-4">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>

        
      </main>
    );
  }
  