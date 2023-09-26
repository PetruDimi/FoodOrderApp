import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://foodorderapp-8b986-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

       let loadingMeals = [];

      for (const key in data) {
        loadingMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadingMeals);
      setIsLoading(false)
    };
    fetchMeals();
  }, []);

  if(isLoading){
    return(<p className={classes.loading}>Loading...</p>)
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
