import React from 'react';
import "./Menu.css";
import greekSaladImage from 'images/greek-salad.jpg';
import bruchettaImage from 'images/bruchetta.svg';
import  grilledFishImage from 'images/grilled-fish.jpg';
import  lemonChickenImage from 'images/lemon-chicken.jpg';
import lemonDessertImage from 'images/lemon-dessert.jpg';
import tiramisuImage from 'images/tiramisu.jpg';

function Menu() {
  const menuItems = [
    {
      id: 1,
      category: 'Starters',
      items: [
        { name: 'Greek Salad',
          price: '$12.99',
          description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
          image: greekSaladImage},
          { name: 'Bruschetta',
            price: '$5.99',
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
            image: bruchettaImage}
          ],
        },
        {
          id: 2,
          category: 'Main Courses',
          items: [
            { name: 'Grilled Fish',
              price: '$25.99',
              description: 'Freshly grilled fish seasoned with aromatic herbs and served with a light lemon butter sauce, bringing out the natural flavors of the Mediterranean.' ,
              image: grilledFishImage},
              { name: 'Lemon Chicken',
                price: '$21.99',
                description: 'Tender, marinated chicken infused with zesty lemon and Mediterranean spices, grilled to perfection and served with a side of seasonal vegetables.' ,
                image: lemonChickenImage}
              ]
            },
            {
              id: 3,
              category: 'Desserts',
              items: [
                { name: 'Lemon Dessert',
                  price: '$5.00',
                  description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
                  image: lemonDessertImage },
                  { name: 'Tiramisu',
                    price: '$8.99',
                    description: 'A classic Italian dessert with layers of espresso-soaked ladyfingers, rich mascarpone cream, and a dusting of cocoa for the perfect sweet finish.' ,
                    image: tiramisuImage}
                  ]
                }
              ];

              return (
                <div className="menu">
                <div className="menu-container">
                <h1>Our Menu</h1>
                {menuItems.map((category) => (
                  <div key={category.id} className="menu-category">
                  <h2>{category.category}</h2>

                  <div className="menu-grid">
                  {category.items.map((item, index) => (
                    <div key={index} className="menu-item">
                    <img src={item.image} alt={item.name} className="menu-item-image" />
                    <h3>{item.name}</h3>
                    <p className="menu-price">{item.price}</p>
                    <p className="menu-description">{item.description}</p>
                    </div>
                  ))}
                  </div>
                  </div>
                ))}
                </div>
                </div>
              );
            }

            export default Menu;