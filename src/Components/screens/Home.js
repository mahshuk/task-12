import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
    <TopContainer>
        <Options>
            <Images>
                <Icons>
                    <Image src={require("../../Assets/Tea-fill.svg").default} alt="image"/>
                </Icons>
                <Name>
                    Coffee
                </Name>
            </Images>
            <Images>
                <Icons>
                    <Image src={require("../../Assets/Tea-fill.svg").default} alt="image"/>
                </Icons>
                <Name>
                    Tea
                </Name>
            </Images>
            <Images>
            <Icons>
                <Image src={require("../../Assets/Cake.svg").default} alt="image"/>
            </Icons>
                <Name>
                    Cakes
                </Name>
            </Images> 
            <Images>
                <Icons>
                    <Image src={require("../../Assets/Bottle.svg").default} alt="image"/>
                </Icons>
                <Name>
                    Bundles
                </Name>
            </Images>
            <Images>
                <Icons>
                    <Image src={require("../../Assets/noodles.svg").default} alt="image"/>
                </Icons>
                <Name>
                    Snacks
                </Name>
            </Images>
        </Options>   
    </TopContainer>    
    </>
  )
}

const TopContainer = styled.section`

`
const Options = styled.div`
display:flex;

`
const Icons = styled.div`
width:40px;
height:40px;
margin-left:10px;
background-color: #c1bfbf;
border-radius: 50%;
display:flex;
justify-content: center;
align-items:center;
`
const Images = styled.div`
display:flex;
align-items:center;
border: 1px solid #EEECEB;
border-radius: 40px;
width:130px;
height:70px;
background-color: #EEECEB;
margin-top:20px;
margin-left:20px;
`
const Image = styled.img`
display:block;

`
const Name = styled.span`
margin: 0 auto;
`
