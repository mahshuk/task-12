import React from 'react'
import{ styled }from 'styled-components';
import { NavLink } from 'react-router-dom';
import Tea from '../screens/Tea';
import Wallet from '../screens/Wallet';
import Graph from '../screens/Graph';
import Settings from '../screens/Settings';

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
`;
const NavList = styled.ul`
display:flex;
flex-direction:column;

`;
const Navlistli = styled(NavLink)`
&.active{
  border-right:4px solid #FF7B00;
  padding:5px;
}
`;
const NavImages = styled.img`
width:25px;
margin-top:30px;

`;

