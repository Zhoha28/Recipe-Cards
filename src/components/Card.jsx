import React from 'react'
import ProductCard from './ProductCard'
import Headphones from './images/headphones.jpg'
import Smartwatch from './images/smartwatch.jpg'
import Keyboard from './images/keyboard.jpg'
const Card = () => {
  return (
    <div className='cards-grid'>
        <ProductCard
        image={Headphones}
        title={"Wireless Headphones"}
        description={"High-quality sound with noise cancellation"}
        button={"Buy now"}
        price={"$199"}
        />
        <ProductCard
          image={Smartwatch}
        title={"Smartwatch Pro"}
        description={"Track your fitness and stay connected on the go"}
        button={"Order now"}
        price={"$249"}
        />
        <ProductCard
                  image={Keyboard}
        title={"Gaming Keyboard"}
        description={"Mechanical RGB keyboard with custom macros"}
        button={"Shop now"}
        price={"$129"}
        />
    </div>
  )
}

export default Card
