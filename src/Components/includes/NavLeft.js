import React from 'react'
import{ styled }from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function NavLeft() {
  return (
    <>
       <NavContainer>
            <NavLogo src={require("../../Assets/Logo-T12.svg").default} alt="logo" />
            <NavList>
                <Navlistli to="/" className={({isActive})=>(isActive ? "active" : "")}><NavImages src={require("../../Assets/Menu.svg").default} alt="image"  /></Navlistli>
                <Navlistli to="tea"><NavImages src={require("../../Assets/tea.svg").default} alt="image"/></Navlistli>
                <Navlistli to="wallet"><NavImages src={require("../../Assets/wallet.svg").default} alt="image"/></Navlistli>
                <Navlistli to="graph"><NavImages src={require("../../Assets/Graph.svg").default} alt="image"/></Navlistli>
                <Navlistli to="settings"><NavImages src={require("../../Assets/Settings.svg").default} alt="image"/></Navlistli>
            </NavList>
        </NavContainer>
    </>
  );
}

const NavContainer = styled.div `
height:100vh;
`;
const NavLogo = styled.img`
width:35px;
padding:40px;
@media all and (max-width: 1380px){
width:30px;
};
@media all and (max-width: 1280px){
width:20px;
};
@media all and (max-width: 1080px){
  padding:15px;
};
`;
const NavList = styled.ul`
display:flex;
flex-direction:column;
@media all and (max-width: 1080px){
   width:30px;
   margin: 20px 0px 0px -30px;
}
`;
const Navlistli = styled(NavLink)`
&.active{
  border-right:4px solid #FF7B00;
  padding:5px;
}
@media all and (max-width: 1280px){
  &.active{
  border-right:3px solid #FF7B00;
  padding:1px;
 };
 };
`;
const NavImages = styled.img`
width:25px;
margin-top:25px;
@media all and (max-width: 1280px){
  width:20px;
  
  };
`;

