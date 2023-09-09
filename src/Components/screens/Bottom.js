import React, { useState } from "react";

import { styled } from "styled-components";

import CoffeeBeans from "./CoffeeBeans";
import Orders from "./Orders";
import { home } from "./Home";




function Bottom({ beanItems, orders, setOrders, setBeanItems }) {

  const [category, setCategory] = useState(null)

 
  return (
    <>
      <BottomContainer>
      <CoffeeBeans home={home} selectCategory={(category) => setCategory(category)} />
      <Orders selectedCategory={category} beanItems={beanItems} orders={orders} setOrders={setOrders} />
      </BottomContainer>
    </>
  );
}

const BottomContainer = styled.section`

`;
export default Bottom;

