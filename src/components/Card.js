import styled, { ThemeContext } from "styled-components";
import React from 'react';
import Label from './micro/Label';
import{ useTheme } from 'styled-components';
import viewIcon from '../images/icon-view.svg';
const StyledCard = styled.div`
background-color:${props=>props.theme.CardBackground};
border-radius:15px;
`;
const CardTitle = styled.h1`
color:${props=>props.theme.FontColor3};
font-size:1.5em;
font-weight:600;
margin-top:1em;
margin-bottom:0.7em;
transition:0.4s;
&:hover{
    color:${props=>props.theme.FontColor2};
    cursor:pointer;
}
`;
const CardBody = styled.p`
color:${props=>props.theme.FontColor1};
font-size:18px;
font-weight:300;
`;

const StyledUser= styled.span`
color:${props=>props.theme.FontColor3};
transition:0.4s;
&:hover{
    cursor:pointer;
    color:${props=>props.theme.FontColor2};
}
`;
const CardImage = styled.div`
position:relative;
`;
const StyledIcon = styled.img`
width:0;
transition: 0.4s 0.2s;
`;
const Filter = styled.div`
position:absolute;
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
top:0;
left:0;
background-color:rgb(0 255 247 / 61%);
opacity:0;
transition:0.4s;
cursor:pointer;
&:hover{
    opacity:1;
    & img{
        width:3em;
    }
}
`;
const Card =(props)=>{
    const {
        imgSrc,
        userAvatar,
        title,
        body,
        currencyIcon,
        currency,
        clockIcon,
        timeLeft,
        username
        } = props;
    const theme = useTheme();
return (
    <StyledCard className="p-4">
        <CardImage className="rounded-3 overflow-hidden">
            <img src={imgSrc} alt="equilibrium" className="w-100"/>
            <Filter>
                <StyledIcon src={viewIcon} alt="view"/>
            </Filter>
        </CardImage>
        <CardTitle>{title}</CardTitle>
        <CardBody>{body}</CardBody>
        <div className="d-flex justify-content-between align-items-center pb-4" style={{borderBottom:`1px solid rgb(139 172 218 / 13%)`}}>
            <Label icon={currencyIcon} text={currency} color={theme.FontColor2} bootstrap="fw-bold"/>
            <Label icon={clockIcon} text={timeLeft} color={theme.FontColor1}/>
        </div>
        <div className="d-flex align-items-center mt-3">
            <img src={userAvatar} className="rounded-circle" alt="avatar" style={{width:"2em", border:"1px solid white"}}/>
            <p className="ms-3 mb-0" style={{color:theme.FontColor1, fontSize:"0.9em"}}>Creation of <StyledUser>{username}</StyledUser></p>
        </div>
    </StyledCard>
);
}
export default Card;