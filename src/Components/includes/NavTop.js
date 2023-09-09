import React from 'react'
import{ styled }from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function NavTop() {
  return ( 
    <>
    <NavTopContainer>
        <Top>
            <Item>
                <Heading>Welcome to kopiku Dashboard</Heading>
                <Title>Let's choose menu</Title>
            </Item>
            <Item2>
                <Box>
                    <Input placeholder='search menu...'/>
                    <Span>
                        <Search src={require("../../Assets/Search.svg").default} alt="image" />
                    </Span>
                </Box>
            </Item2>
            <Item3>
                <Notify>
                    <Notification src={require("../../Assets/Noti.svg").default} alt="notify"/>
                </Notify>
            </Item3>
            <Item4>
                    <Profile>
                        <Man src={require("../../Assets/man.jpg")} alt="man" />
                    </Profile>
                    <Bio>
                        <Position>Admin</Position>
                        <Name>Alex Jorand</Name>
                    </Bio>
            </Item4>
            <Item6>
               <AddMenu>
                    <Plus>
                        <PlusImage src={require("../../Assets/Plus.svg").default} alt="plus" />
                    </Plus>
                    <Menu>Add new menu</Menu>
                </AddMenu>
            </Item6>
        </Top>
    </NavTopContainer>
    </>
  );  
}

const NavTopContainer = styled.section `
width:90%;
padding:2%;
height:60px;
border-bottom:2px solid #EEECEB;

`
const Top = styled.div`
display: flex;
align-items: center;

`
const Item = styled.div`
margin-right:150px;
`
const Heading = styled.h5`
margin: 0px 0px 5px 0px;
font-size:12px;
color:grey;
`
const Title = styled.h3`
margin: 0;
font-size:22px;
width:190px;
`
const Item2 = styled.div`


`
const Box = styled.div`
display:flex;
`
const Input = styled.input`
text_decoration: none;
border-radius: 30px;
background-color:  #EEECEB;
padding: 18px;
width:300px;
border: 1px solid #EEECEB;
&::placeholder {
    color: #918c8c;
}
`
const Span = styled.span`

`
const Search = styled.img`
width: 50%;
margin: 15px 57px 0px -37px
`
const Item3 = styled.div`

`
const Notify = styled.div`

`
const Notification = styled.img`
width:30%;
margin-right: 90px;
`
const Item4 = styled.div`
display: flex;
`
const Profile = styled.div`
width:70px;

`
const Man = styled.img`
display:block;
border-radius:50%;
width:90%;
`
const Bio = styled.div`
width:50px;
`
const Position = styled.h5`
margin:10px 0 15px ;
font-size:10px;
color:#918c8c;
`
const Name = styled.h4`
margin:0;
width:90px;
font-size:13px;
`
const AddMenu = styled.div`
display: flex;
align-items: center;
border: 1px solid #EEECEB;
border-radius: 30px;
width:200px;
height:50px;
background-color: #EEECEB;

`
const Plus = styled.span`
width: 12%;

`
const PlusImage = styled.img`
margin:5px 0px 0px 40px;
width:100%;
`
const Menu = styled.h5`
width:150px;
margin-left:50px;

`
const Item6 = styled.div`
margin-left:70px;

`