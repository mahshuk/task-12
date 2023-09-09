import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

function CoffeeBeans({ home, selectCategory }) {
  const [active, setActive] = useState("Coffee");
  useEffect(() => {
    selectCategory(active)
  }, [])
  let handleClick = (dish) => {
    console.log(dish)
    setActive(dish)
    selectCategory(dish)
  }
  return (
    <>
      <Content className="Bean">
      <TopContainer>
        <Coffe>
          {home.map((item) => (
            <Item
              key={item.id}
              onClick={() => handleClick(item.dish)}
              style={active === item.dish ? { background: '#FF7B00' } : null}
            >
              <Box style={active === item.dish ? { background: '#FFF' } : null}>
                {active === item.dish ? (
                  <ImgCoffee src={item.Icon} alt="Image" />
                ) : (
                  <ImgCoffee src={item.Icon} style={{ filter: 'brightness(0)' }} alt="Image" />
                )}
              </Box>
              <Dish style={active === item.dish ? { color: '#FFF' } : null}>{item.dish}</Dish>
            </Item>
          ))}
        </Coffe>
      </TopContainer>
    </Content>
    </>
  );
}

const Content = styled.section`
  width: 100%;
  padding: 30px 30px 30px 0;
  @media all and (max-width: 980px){
    padding: 15px 5px 10px 1px;
  };
  @media all and (max-width: 768px){
    padding: 15px 5px 10px 1px;
  };
`;
const TopContainer = styled.div`
@media all and (max-width: 768px){
  height:10px;
};
`;
const Coffe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Item = styled.div`
  background: #f6f5f4;
  border-radius: 50px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  text-decoration: none;
  @media all and (max-width: 1080px){
    width: 80px;
    height: 40px;
  };
  @media all and (max-width: 768px){
    width:77px;
    height:30px;
  }
`;
const Box = styled.span`
  width: 30px;
  height: 30px;
  padding: 5px;
  margin-right: 5px;
  border-radius: 50px;
  background: #eeeceb;
  display: inline-block;
  @media all and (max-width: 1080px){
    width:15px;
    height:15px;
  };
  @media all and (max-width: 768px){
    display:none;
  };
`;
const ImgCoffee = styled.img`
@media all and (max-width: 1080px){
  width:15px;
};
`;
const Dish = styled.span``;

export default CoffeeBeans;
