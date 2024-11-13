"use client";
import { useState, useEffect } from "react";


async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        if(!response.ok){
            console.log(response.status);
        }
        const data = await response.json();
        
        return data.meals || [];
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);
    
    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    };
    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h1>Meal Ideas</h1>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <h2>{meal.strMeal}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )

    
    };

    
        

        
