import styled from "styled-components";
import React from 'react';
import Card from './Card';
import equilibriumImage from '../images/image-equilibrium.jpg';
import avatar from '../images/image-avatar.png';
import ethereumIcon from '../images/icon-ethereum.svg';
import clockIcon from '../images/icon-clock.svg'
const StyledContainer = styled.div`
height:100%;
max-width:350px;
display:flex;
justify-content:center;
align-items:center;
@media only screen and (max-width: 600px) {
    &{
       margin:auto;
    }
}
@media only screen and (max-width: 400px) {
    &{
       padding-right:0.5em;
       padding-left:0.5em;
    }
}
`;
const CardContainer =(props)=>{
return (
    <StyledContainer>
        <Card 
        imgSrc={equilibriumImage}
        userAvatar={avatar}
        title="Equilibrium #3429"
        body="Our Equilibrium collection promotes balance and calm."
        currencyIcon={ethereumIcon}
        currency="0.041 ETH"
        clockIcon={clockIcon}
        timeLeft="3 days left"
        username="Jules Wyvern"
        />
    </StyledContainer>
);
}
export default CardContainer;