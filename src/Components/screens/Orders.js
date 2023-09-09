import React, { useState } from 'react';
import { styled } from 'styled-components';

function Orders({ beanItems, orders, setOrders, setBeanItems,items, selectedCategory }) {

    const [active, setActive] = useState(1)
    const [roast, setRoast] = useState("25%")
    const [volume, setVolume] = useState("250g")

    const addOrder = (item) => {
        const existingOrder = orders.find((order) => order.id === item.id);

        if (existingOrder) {
            const updatedOrders = orders.map((order) => {
                if (order.id === item.id) {
                    return {
                        ...order, roast: roast,
                        volume: volume, quantity: order.quantity + 1
                    };
                }
                return order;
            });

            setOrders(updatedOrders);  
        } else {
            const newOrder = {
                id: item.id,
                image: item.image,
                title: item.title,
                price: item.price,
                roast: roast,
                volume: volume,
                quantity: 1,
            };

            setOrders((prevOrders) => [...prevOrders, newOrder]);
        }
    };

    function viewDetail(id) {
        setActive(id)
        const existingOrder = orders.find((order) => order.id === id);
        if (existingOrder) {
            setRoast(existingOrder.roast)
            setVolume(existingOrder.volume)
        } else {
            setRoast("25%")
            setVolume("250g")
        }
    }

    let beanItemsLeft = () => {
        return beanItems.slice(0, 10).filter((item) => item.category === selectedCategory).map((item) => {
            return (
                <Indonesian key={item.id}>
                    <Box>
                        <Imager>
                            <Image src={item.image} />
                        </Imager>
                        <Contents>
                            <Sub>{item.title}</Sub>
                            <Para>{item.detail}</Para>
                            <Select>$ {item.price}</Select>
                        </Contents>
                    </Box>
                    {
                        active === item.id ? (<><Roast>Roasting Type</Roast>
                            <Roasting>
                                <Pricebox onClick={() => setRoast("25%")} style={roast === "25%" ? { background: "#000", color: "#fff" } : {}}><Price>25%</Price></Pricebox>
                                <Pricebox onClick={() => setRoast("50%")} style={roast === "50%" ? { background: "#000", color: "#fff" } : {}}><Price>50%</Price></Pricebox>
                                <Pricebox onClick={() => setRoast("75%")} style={roast === "75%" ? { background: "#000", color: "#fff" } : {}}><Price>75%</Price></Pricebox>
                                <Pricebox onClick={() => setRoast("100%")} style={roast === "100%" ? { background: "#000", color: "#fff" } : {}}><Price>100%</Price></Pricebox>
                            </Roasting>

                            <Pack>Volume Pack</Pack>
                            <Volume>
                                <Volumebox onClick={() => setVolume('250g')} style={volume === '250g' ? { background: '#000', color: '#fff' } : {}}><Price>250g</Price></Volumebox>
                                <Volumebox onClick={() => setVolume('500g')} style={volume === '500g' ? { background: '#000', color: '#fff' } : {}}><Price>500g</Price></Volumebox>
                                <Volumebox onClick={() => setVolume('750g')} style={volume === '750g' ? { background: '#000', color: '#fff' } : {}}><Price>750g</Price></Volumebox>
                            </Volume>
                            <Add onClick={() => addOrder(item)}>Add to bill</Add>
                        </>) : (
                            <View onClick={() => { viewDetail(item.id) }}>View details</View>
                        )
                    }

                </Indonesian>
            )
        })
    }

    let beanItemsRight = () => {
        return beanItems.slice(11).filter((item) => item.category === selectedCategory).map((item) => {
            return <Indonesian key={item.id}>
                <Box>
                    <Imager>
                        <Image src={item.image} />
                    </Imager>
                    <Contents>
                        <Sub>{item.title}</Sub>
                        <Para>{item.detail}</Para>
                        <Select>$ {item.price}</Select>
                    </Contents>
                </Box>
                {
                    active === item.id ? (<><Roast>Roasting Type</Roast>
                        <Roasting>
                            <Pricebox onClick={() => setRoast("25%")} style={roast === "25%" ? { background: "#000", color: "#fff" } : {}}><Price>25%</Price></Pricebox>
                            <Pricebox onClick={() => setRoast("50%")} style={roast === "50%" ? { background: "#000", color: "#fff" } : {}}><Price>50%</Price></Pricebox>
                            <Pricebox onClick={() => setRoast("75%")} style={roast === "75%" ? { background: "#000", color: "#fff" } : {}}><Price>75%</Price></Pricebox>
                            <Pricebox onClick={() => setRoast("100%")} style={roast === "100%" ? { background: "#000", color: "#fff" } : {}}><Price>100%</Price></Pricebox>
                        </Roasting>

                        <Pack>Volume Pack</Pack>
                        <Volume>
                            <Volumebox onClick={() => setVolume('250g')} style={volume === '250g' ? { background: '#000', color: '#fff' } : {}}><Price>250g</Price></Volumebox>
                            <Volumebox onClick={() => setVolume('500g')} style={volume === '500g' ? { background: '#000', color: '#fff' } : {}}><Price>500g</Price></Volumebox>
                            <Volumebox onClick={() => setVolume('750g')} style={volume === '750g' ? { background: '#000', color: '#fff' } : {}}><Price>750g</Price></Volumebox>
                        </Volume>
                        <Add onClick={() => addOrder(item)} >Add to bill</Add>
                    </>) : (
                        <View onClick={() => { viewDetail(item.id) }}>View details</View>
                    )
                }

            </Indonesian>

        });
    }
    return (
        <>
            <Container>
                <Heading>Beans menu</Heading>
                <MainBox>
                    <Left>
                        {beanItemsLeft()}
                    </Left>
                    <Right>
                        {beanItemsRight()}
                    </Right>
                </MainBox>
            </Container>
        </>
    )
}

const Container = styled.section`
    width: 100%; 
`;
const MainBox = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 640px){
        display:inline;
    };

`;
const Left = styled.div`
    width: 49%;
`;
const Right = styled.div`
    width: 49%;
`;
const Heading = styled.h2`
    font-size:20px;
    text-align: left;
    @media all and (max-width: 640px){
        margin-top:130px;
    };
`;
const Indonesian = styled.div`
    background-color: #F6F5F4;
    width: 100%;
    border-radius:14px;
    @media all and (max-width: 1080px){
        width:100%;
    };
    @media all and (max-width: 480px){
        width:180px;
    };
`;
const Box = styled.div`
    display: flex;
    align-items: center; 
    @media all and (max-width: 640px){
        display:inline;
    };
`;
const Imager = styled.div`
    width: 200px;
    margin-right: 20px;
    
`;
const Image = styled.img`
    display: block;
    width: 100%;
    padding: 10px;
    @media all and (max-width: 640px){
        width: 60%;
    };
    @media all and (max-width: 480px){
        width: 40%;
    };
`;
const Contents = styled.div`
    
`;
const Sub = styled.h3`
    text-align: left;
    @media all and (max-width: 480px){
        font-size:15px;
    };
`;
const Para = styled.p`
    text-align: left;
    @media all and (max-width: 480px){
        font-size:15px;
    };
`;
const Select = styled.h3`
text-align: left;
`;
const Roasting = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 768px){
        height:50px;
    };
    @media all and (max-width: 640px){
        display: inline;
    };
`;
const Pricebox = styled.div`
    background-color: #EEECEB;
    padding: 6px 35px;
    border-radius: 50px;
    cursor:pointer;
    @media all and (max-width: 1380px){
    width:16px;
    };
    @media all and (max-width: 1280px){
        padding: 2px 22px;
    };
    @media all and (max-width: 980px){
        padding: 0px 18px;
    };
    @media all and (max-width: 768px){
        padding: 0px 13px;
    };
    @media all and (max-width: 640px){
        display: inline-block;
        padding: 0px 18px;
    };
    @media all and (max-width: 480px){
        padding: 0px 37px;
    };
`;
const Price = styled.h4`
    font-size:14px;
    @media all and (max-width: 1280px){
    font-size:15px;
    margin-left:-6px;
    };
    @media all and (max-width: 768px){
        font-size:12px;
        margin-left:-4px;
    };
`;
const Volume = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    @media all and (max-width: 640px){
        display: inline;
    };
`;
const Roast = styled.h4`
`;
const Pack = styled.h4`
    text-align:left;
    
`;
const Volumebox = styled.div`
    background-color: #EEECEB;
    padding: 6px 48px;
    border-radius: 50px;
    cursor:pointer;
    @media all and (max-width: 1380px){
    width:16px;
    };
    @media all and (max-width: 1280px){
    padding: 2px 22px;
    };  
    @media all and (max-width: 640px){
        display: inline-block;
        padding: 0px 18px;
    };
    @media all and (max-width: 480px){
        padding: 0px 22px;
    };
`;
const Add = styled.a`
    color: #fff;
    background-color: #FF7B00;
    display: block;
    padding: 15px;
    border-radius: 50px;
    text-align: center;
    cursor:pointer;
`;
const View = styled.a`
    background-color: #EEECEB;
    display: block;
    padding: 15px;
    border-radius: 50px;
    text-align: center;
    cursor:pointer;
`;



export default Orders;