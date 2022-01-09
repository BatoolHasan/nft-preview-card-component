import styled from "styled-components";
const StyledFooter = styled.footer`
width:100%;
height: 3em;
position: absolute;
bottom: 0;
left:0;
display: flex;
justify-content: center;
align-items: center;
background-color:${props=> props.theme.FontColor1};
& a:link{
color: ${props=> props.theme.FontColor3}
}
& a:visited{
color: ${props=> props.theme.FontColor3}
}
@media only screen and (max-width: 600px) {
    &{
        margin-top:1em;
        position:unset;
        font-size:0.8em;
    }
}
`
const Footer = (props)=>{ 
return (
<StyledFooter>
    <p>
        Challenge by <a href={props.challengeUrl}>Frontend Mentor</a>. 
            Coded by <a href={props.repoUrl}>Batool H.</a>
    </p>
</StyledFooter>
);
} 
export default Footer;