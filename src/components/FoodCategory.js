import React from 'react';
import './FoodCategory.css';

const categories = [
    { name: 'Burgers', image: '/assets/burger.jpg' },
    { name: 'Pizzas', image: '/assets/pizza.jpg' },
    { name: 'Sushi', image: '/assets/sushi.jpg' },
    { name: 'Desserts', image: '/assets/dessert.jpg' },
];

const FoodCategory = () => {
    return (
        <div className="food-category">
            <h2>Explore Our Categories</h2>
            <div className="category-list">
                {categories.map((category, index) => (
                    <div className="category-card" key={index}>
                        <img src={category.image} alt={category.name} />
                        <h3>{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FoodCategory;
