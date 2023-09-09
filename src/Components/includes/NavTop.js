import React from 'react'
import{ styled }from 'styled-components';

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
@media all and (max-width: 1080px){
    height:30px
};
@media all and (max-width: 640px){
    width:330px;
};

`;
const Top = styled.div`
display: flex;
align-items: center;

`
const Item = styled.div`
margin-right:150px;
@media all and (max-width: 1380px){
    width:100px;
 };
 @media all and (max-width: 1280px){
    width:50px
};
@media all and (max-width: 1080px){
    width:40px;
}
`
const Heading = styled.h5`
margin: 0px -90px 5px 0px;
font-size:12px;
color:grey;
@media all and (max-width: 1280px){
    font-size:10px;
};
@media all and (max-width: 1080px){
    margin: -5px 0px 7px -21px;
    width: 95px;
};
@media all and (max-width: 768px){
    width:110px;
    margin: -5px 0px 0px -12px;
    font-size:12px;
};
@media all and (max-width: 640px){
    display:none;
};
`;
const Title = styled.h3`
margin: 0;
font-size:22px;
width:190px;
@media all and (max-width: 1280px){
    font-size:15px;
};
@media all and (max-width: 1080px){
    margin: -6px 0px 0px -20px;
    font-size:14px;
};
@media all and (max-width: 768px){
    display:none;
};
`;
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
@media all and (max-width: 1280px){
    font-size:12px;
    width:180px;
};
@media all and (max-width: 1080px){
    width:75px;
    height:0;
    margin: 0px 0px 0px -75px;
};
@media all and (max-width: 768px){
    width:115px;
};
@media all and (max-width: 640px){
    width: 115px;
    margin: -4px 22px 23px -142px;
    height: 0px;
};
`;
const Span = styled.span`

`
const Search = styled.img`
width: 50%;
margin: 15px 57px 0px -37px;
@media all and (max-width: 1280px){
    margin: 0px 40px -17px -30px;
    width: 16px;
};
@media all and (max-width: 1080px){
    display:none;
};
@media all and (max-width: 768px){
    width: 12px;
    display:block;
    margin: 12px 25px -17px -20px;
};
@media all and (max-width: 640px){
    width: 12px;
    display: block;
    margin: 10px 39px 0px -41px;
};

};
`
const Item3 = styled.div`

`
const Notify = styled.div`

`
const Notification = styled.img`
width:30%;
margin-right: 90px;
@media all and (max-width: 1080px){
    width: 20px;
    margin: 12px;
};
@media all and (max-width: 980px){
    width: 15px;
};
@media all and (max-width: 640px){
    width: 15px;
    margin: 0px -5px 11px -16px;
};
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
@media all and (max-width: 1280px){
    width:70%;
};
@media all and (max-width: 1080px){
    width:50%;
}
@media all and (max-width: 980px){
    display:none;
};
`
const Bio = styled.div`
width:50px;
@media all and (max-width: 1280px){
    width:35px;
};
@media all and (max-width: 1080px){
    width:20px;
}
`
const Position = styled.h5`
margin:10px 0 15px ;
font-size:10px;
color:#918c8c;
@media all and (max-width: 1280px){
    margin: 10px 0px 17px -15px;
};
@media all and (max-width: 1080px){
    margin: 3px 0px 14px -30px
};
@media all and (max-width: 980px){
    margin: 0px 0px 12px -70px
};
@media all and (max-width: 768px){
    display:none;
};
`
const Name = styled.h4`
margin:0;
width:90px;
font-size:13px;
@media all and (max-width: 1280px){
    width:75px;
    margin:-15px;
};
@media all and (max-width: 1080px){
    margin: -15px 0px 0px -32px;
};
@media all and (max-width: 980px){
    margin: -10px 0px 12px -70px;
};
@media all and (max-width: 768px){
    display:none;
};

`
const AddMenu = styled.div`
display: flex;
align-items: center;
border: 1px solid #EEECEB;
border-radius: 30px;
width:200px;
height:50px;
background-color: #EEECEB;
@media all and (max-width: 1080px){
    width: 135px;
    height: 30px;
};
@media all and (max-width: 980px){
    width: 42px;
};
@media all and (max-width: 768px){
    width: 42px;
    margin: -5px 0px 0px -108px;
};
@media all and (max-width: 640px){
    margin: -19px 1px 9px -100px;
    width: 130px;
};
`
const Plus = styled.span`
width: 12%;
@media all and (max-width: 1080px){
    width:7%;
};

`
const PlusImage = styled.img`
margin:5px 0px 0px 40px;
width:100%;
@media all and (max-width: 1080px){
    width:90%;
    margin:5px 0px 2px 15px;
};
@media all and (max-width: 980px){
    width:12px;
};
`
const Menu = styled.h5`
width:150px;
margin-left:50px;
@media all and (max-width: 1080px){
    margin-left:25px;
    font-size:12px;
};
@media all and (max-width: 980px){
    display:none;
};
@media all and (max-width: 640px){
    width: 180px;
    margin-left: 27px;
    display: block;
};
`;
const Item6 = styled.div`
margin-left:70px;
@media all and (max-width: 1080px){
    margin-left:30px;
};
@media all and (max-width: 980px){
    margin-left:30px;
};
`