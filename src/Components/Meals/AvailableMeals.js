import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chicken Fried Rice',
      description: 'Chinese specialty!',
      price: 99.99,
    },
    {
      id: 'm2',
      name: 'Parotta',
      description: 'An Indian specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Ice cream',
      description: 'All time favourite!!',
      price: 52.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 58.99,
    },
  ];
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map( meal => <MealItem id={meal.id} key ={meal.id} name ={meal.name} description ={meal.description} price={meal.price}/>);
    return(
        <section className={classes.meals}>
            <Card>
            <ul>
               {mealsList} 
            </ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;