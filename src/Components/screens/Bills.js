import React, { useState } from "react";
import { styled } from "styled-components";

function Bills({ orders, setOrders }) {
  const [orderStatus, setOrderStatus] = useState("Delivery");
  const [payment, setPayment] = useState("Cash");
  const [showPopup, setShowPopup] = useState(false);

  const calculateSubtotal = () => {
    let totalItemsPrice = 0;
    orders.forEach((order) => {
      totalItemsPrice += order.price * order.quantity;
    });
    return totalItemsPrice;
  };

  const calculateDiscountAmount = () => {
    const discountRate = 0.1; // Assuming a 10% discount rate
    const subtotal = calculateSubtotal();
    return subtotal * discountRate;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = calculateDiscountAmount();
    return subtotal - discountAmount;
  };

  const updateOrderQuantity = (itemId, quantityChange) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === itemId) {
        return { ...order, quantity: order.quantity + quantityChange };
      }
      return order;
    });

    setOrders(updatedOrders);
  };

  const handleStatusClick = (status) => {
    setOrderStatus(status);
  };

  const handlePaymentClick = (paymentOption) => {
    setPayment(paymentOption);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {orders.length !== 0 ? (
        <MainContainer>
          <Billing>
            <Heading>Bills</Heading>
            <SubHeading>Order #3243</SubHeading>
          </Billing>
          <OrderStatus>
            <Status
              onClick={() => handleStatusClick("Dine in")}
              style={
                orderStatus === "Dine in"
                  ? { background: "#000", color: "#fff" }
                  : {}
              }
            >
              <Item>Dine in</Item>
            </Status>
            <Status
              onClick={() => handleStatusClick("Take Away")}
              style={
                orderStatus === "Take Away"
                  ? { background: "#000", color: "#fff" }
                  : {}
              }
            >
              <Item1>Take Away</Item1>
            </Status>
            <Status
              onClick={() => handleStatusClick("Delivery")}
              style={
                orderStatus === "Delivery"
                  ? { background: "#000", color: "#fff" }
                  : {}
              }
            >
              <Item2>Delivery</Item2>
            </Status>
          </OrderStatus>
          {orders.map((item) => {
            return (
              <Sections key={item.id}>
                <Imager>
                  <Image src={item.image} />
                </Imager>
                <Contents>
                  <Sub>{item.title}</Sub>
                  <Para>
                    Beans = {item.roast} + {item.volume}
                  </Para>
                  <Select>$ {item.price}</Select>
                </Contents>
                <Accounts>
                  <Round onClick={() => updateOrderQuantity(item.id, -1)}>
                    <Cash
                      src={require("../../Assets/Minus.svg").default} alt="plus"
                    ></Cash>
                  </Round>
                  <CashTag>{item.quantity}</CashTag>
                  <Round onClick={() => updateOrderQuantity(item.id, +1)}>
                    <Cash
                      src={require("../../Assets/Add.svg").default} alt="plus"
                    ></Cash>
                  </Round>
                </Accounts>
              </Sections>
            );
          })}
          <Cost>
            <CostItem>Items</CostItem>
            <CostPrice>$ {calculateSubtotal().toFixed(2)}</CostPrice>
          </Cost>
          <Cost>
            <CostItem>Discount</CostItem>
            <DiscountPrice>
              -$ {calculateDiscountAmount().toFixed(2)}
            </DiscountPrice>
          </Cost>
          <TotalTag>
            <Total>Total</Total>
            <TotalPrice>$ {calculateTotal().toFixed(2)}</TotalPrice>
          </TotalTag>
          <Payment>
            <PaymentTag>Payment</PaymentTag>
            <PaymentOption>
              <PayTag
                onClick={() => handlePaymentClick("Cash")}
                style={
                  payment === "Cash"
                    ? { background: "#000", color: "#fff" }
                    : {}
                }
              >
                <PayCash>Cash</PayCash>
              </PayTag>
              <PayTag
                onClick={() => handlePaymentClick("Debit")}
                style={
                  payment === "Debit"
                    ? { background: "#000", color: "#fff" }
                    : {}
                }
              >
                <PayDebit>Debit</PayDebit>
              </PayTag>
              <PayTag
                onClick={() => handlePaymentClick("E-Wallet")}
                style={
                  payment === "E-Wallet"
                    ? { background: "#000", color: "#fff" }
                    : {}
                }
              >
                <PayEWallet>E-Wallet</PayEWallet>
              </PayTag>
            </PaymentOption>
            <Conform>
              <Checkout onClick={togglePopup}>Checkout</Checkout>
            </Conform>
          </Payment>
          
        </MainContainer>
      ) : (
        <Item>No orders placed yet..</Item>
      )}
    </>
  );
}

const MainContainer = styled.section`
  width: 25%;
  background-color: #F6F5F4;
`;
const Billing = styled.div`
  display: flex;
  justify-content: space-between;
;`;
const Heading = styled.h2`
  font-size: 20px;
  margin-left: 50px;
`;
const SubHeading = styled.h2`
  font-size: 25px;
  @media all and (max-width: 1380px){
    font-size:20px;
    margin:15px;
  }
`;
const OrderStatus = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 10px;
`;
const Status = styled.span`
  border-radius: 50%;
  padding: 10px 10px;
  background-color: aliceblue;
  display: inline-block;
  cursor: pointer;
  @media all and (max-width: 1280px){
    padding:6px;
  };
`;
const Item = styled.a`
    `;

const Item1 = styled.a``;

const Item2 = styled.a``;
const Sections = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  margin-bottom: 30px;
`;
const Imager = styled.div`
  width: 30%;
`;
const Image = styled.img`
  width: 100%;
  padding: 10px;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;
const Sub = styled.small`
  font-weight: bold;
`;
const Para = styled.span``;
const Select = styled.div`
  font-weight: bold;
`;
const Accounts = styled.div`
  gap: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 185px;
  margin-bottom: 10px;
  @media all and (max-width: 1280px){
    margin-left:150px;
  };
`;
const Round = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #212b33;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  cursor: pointer;
  @media all and (max-width: 1280px){
   width:22px;
   height:22px;
  };
`;
const Cash = styled.img`
@media all and (max-width: 1280px){
  width:90%;
 };
`;

const CashTag = styled.small``;
const Cost = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;
const CostItem = styled.span`
  font-weight: bold;
`;
const CostPrice = styled.span`
  font-weight: bold;
  color: #13ee5f;
`;

const DiscountPrice = styled.span`
  font-weight: bold;
  color: red;
`;
const TotalTag = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const Total = styled.span`
  font-weight: bold;
`;
const TotalPrice = styled.span`
  font-weight: bold;
  color: #13ee5f;
`;
const Payment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const PaymentTag = styled.div`
  font-weight: bold;
`;
const PaymentOption = styled.div`
  display: flex;
  justify-content: space-between;
 
`;
const PayTag = styled.div`
  background-color: #C9BEBE;
  display: inline-block;
  padding: 15px;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  @media all and (max-width: 1280px){
    padding:12px 6px;
  };
`;
const PayCash = styled.div`
  width: 66px;
`;
const PayDebit = styled.div`
  width: 66px;
`;
const PayEWallet = styled.div`
  width: 66px;
`;
const Conform = styled.div`
  display: inline-block;
`;
const Checkout = styled.div`
  background-color: #ff7b00;
  display: block;
  padding: 15px;
  border-radius: 50px;
  text-align: center;
`;


export default Bills;
