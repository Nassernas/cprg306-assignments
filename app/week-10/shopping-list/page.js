"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems } from "../_services/shopping-list-service";
import { addItem } from "../_services/shopping-list-service";
import { useState, useEffect} from "react";
import { useUserAuth } from "../_utils/auth-context";




export default function Page() {

  const {user} = useUserAuth();
  const [items, setItems] = useState([]);
  
  
  const handleAddItem = async (newItem) => {
    if (user) {
      
    const itemId = await addItem(user.uid, newItem);

    if (itemId) {
      newItem.id = itemId;
      setItems( [...items, newItem]);
    }
  }
  };
  
  const [selectedItemName, setSelectedItemName] = useState("");
  
  const handleItemSelect = (itemObj) => {
    const cleanedName = itemObj.name.trim();
    setSelectedItemName(cleanedName);

  }

  const loadItems = async () => {
    const userItems = await getItems(user.uid);
    setItems(userItems);
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);
  
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
  