import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    try {
        let items = [];
        const itemsCollection = collection(db, "users", userId, "items");
        const itemsSnapshot = query(itemsCollection);
        const querySnapshot = await getDocs(itemsSnapshot);
        querySnapshot.forEach( (doc) => {
            let thisItem = {
                id: doc.id,
                ...doc.data()
            }
            items.push(thisItem);
        });
        return items;
    } 
    catch (error) {
        console.log(error);
    }
    
    
}

export async function addItem(userId, item) {
    try {
        const itemsCollection = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsCollection, item);
        return docRef.id;
    } 
    catch (error) {
        console.log(error);
    }
}