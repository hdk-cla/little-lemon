import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Specials.css";
import greekSaladImage from 'images/greek-salad.jpg';
import bruchettaImage from 'images/bruchetta.svg';
import lemonDessertImage from 'images/lemon-dessert.jpg';

function Specials() {
  const navigate = useNavigate();
  const handleMenuClick = () => {
    navigate('/menu');
  };

  const specialItems = [
    {
      name: "Greek salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSaladImage
    },
    {
      name: "Bruchetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruchettaImage
    },
    {
      name: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessertImage
    }
  ];

  return (
    <section className="specials">
      <div className="specials-top">
        <h2>This week specials!</h2>
        <button className="online-menu-btn" onClick={handleMenuClick}>Online Menu</button>
      </div>

      <div className="specials-grid">
        {specialItems.map((item, index) => (
          <div key={index} className="special-item">
            <img src={item.image} alt={item.name} className="special-item-image" />
            <div className="special-item-content">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p className="description">{item.description}</p>
              {/* <button>Order a delivery</button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;