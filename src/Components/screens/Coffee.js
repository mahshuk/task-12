import React, { useState } from 'react';
import styled from 'styled-components';
import Bottom from './Bottom';
import Bills from './Bills';




function Coffee() {

  const [beanItems, setBeanItems] = useState([
    {
      id: 1,
      title: "Indonesian Beans",
      detail: "Selected coffee beans with the best quality from indonesia",
      image: require("../../Assets/CoffeeBeansPowder.jpg"),
      price: 35.0,
      category: 'Coffee'
    },
    {
      id: 2,
      title: "Indonesian Beans",
      detail: "Selected coffee beans with the best quality from ethopia",
      image: require("../../Assets/DonFransicoCoffee.jpg"),
      price: 55.0,
      category: 'Coffee'
    },
    {
      id: 15,
      title: "Costa Rica Tea",
      detail: "Selected coffee beans with the best quality from costa rica",
      image: require("../../Assets/FallsCoffee.jpg"),
      price: 38.0,
      category: 'Bundles'
    },
    {
      id: 17,
      title: "Peru Beans",
      detail: "Selected coffee beans with the best quality from costa rica",
      image: require("../../Assets/Beans.jpg"),
      price: 115.0,
      category: 'Bundles'
    },
    {
      id: 19,
      title: "Peru Tea",
      detail: "Selected coffee beans with the best quality from costa rica",
      image: require("../../Assets/Beans.jpg"),
      price: 115.0,
      category: 'Snack'
    },
    {
      id: 11,
      title: "Indonesian Beans",
      detail: "Selected coffee beans with the best quality from indonesia",
      image: require("../../Assets/LuxuryCoffee.jpg"),
      price: 35.0,
      category: 'Cakes'
    },
    {
      id: 12,
      title: "Indonesian Beans",
      detail: "Selected coffee beans with the best quality from ethopia",
      image: require("../../Assets/FallsCoffee.jpg"),
      price: 55.0,
      category: 'Cakes'
    },
    
    {
      id: 3,
      title: "Indonesian Tea",
      detail: "Selected coffee beans with the best quality from indonesia",
      image: require("../../Assets/LuxuryCoffee.jpg"),
      price: 35.0,
      category: 'Tea'
    },
    {
      id: 4,
      title: "Indonesian Tea",
      detail: "Selected coffee beans with the best quality from ethopia",
      image: require("../../Assets/DonFransicoCoffee.jpg"),
      price: 55.0,
      category: 'Tea'
    },
    {
      id: 6,
      title: "Costa Rica Beans",
      detail: "Selected coffee beans with the best quality from costa rica",
      image: require("../../Assets/CoffeeBeansPowder.jpg"),
      price: 38.0,
      category: 'Coffee'
    },
    {
      id: 5,
      title: "Costa Rica Tea",
      detail: "Selected coffee beans with the best quality from costa rica",
      image: require("../../Assets/LuxuryCoffee.jpg"),
      price: 38.0,
      category: 'Tea'
    },
    {
      id: 7,
      title: "Peru Beans",
      detail: "Selected coffee beans with the best quality from costa rica",
      image: require("../../Assets/Beans.jpg"),
      price: 115.0,
      category: 'Coffee'
    },
    {
      id: 8,
      title: "Guatemala Beans",
      detail: "Selected coffee beans with the best quality from guatemala",
      image: require("../../Assets/DonFransicoCoffee.jpg"),
      price: 85.0,
      category: 'Coffee'
    },
    
    {
      id: 9,
      title: "Peru Tea",
      detail: "Selected coffee beans with the best quality from costa rica",
      image: require("../../Assets/Beans.jpg"),
      price: 115.0,
      category: 'Tea'
    },
    {
      id: 10,
      title: "Guatemala Tea",
      detail: "Selected coffee beans with the best quality from guatemala",
      image: require("../../Assets/DonFransicoCoffee.jpg"),
      price: 85.0,
      category: 'Tea'
    },
    
    {
      id: 16,
      title: "Costa Rica Beans",
      detail: "Selected coffee beans with the best quality from costa rica",
      image: require("../../Assets/CoffeeBeansPowder.jpg"),
      price: 38.0,
      category: 'Cakes'
    },
    {
      id: 13,
      title: "Indonesian Tea",
      detail: "Selected coffee beans with the best quality from indonesia",
      image: require("../../Assets/LuxuryCoffee.jpg"),
      price: 35.0,
      category: 'Cakes'
    },
    {
      id: 14,
      title: "Indonesian Tea",
      detail: "Selected coffee beans with the best quality from ethopia",
      image: require("../../Assets/CoffeeBeansPowder.jpg"),
      price: 55.0,
      category: 'Cakes'
    },
    
    {
      id: 18,
      title: "Guatemala Beans",
      detail: "Selected coffee beans with the best quality from guatemala",
      image: require("../../Assets/LuxuryCoffee.jpg"),
      price: 85.0,
      category: 'Bundles'
    },
    
    
    {
      id: 20,
      title: "Guatemala Tea",
      detail: "Selected coffee beans with the best quality from guatemala",
      image: require("../../Assets/DonFransicoCoffee.jpg"),
      price: 85.0,
      category: 'Snack'
    },
    
  ]);

  const [orders, setOrders] = useState([]);

  return (
    <>
      <Container>
      <Div>
        <Bottom beanItems={beanItems} setBeanItems={setBeanItems} orders={orders} setOrders={setOrders}/>
      </Div>
        <Bills orders={orders} setOrders={setOrders}/>
      </Container>
    </>
  )
}



const Container = styled.section`
    display:flex;
    justify-content: space-around;
    @media all and (max-width: 1080px){
        display: inline;
    }
`;
const Div = styled.section`
    width:60%;
`;

export default Coffee;