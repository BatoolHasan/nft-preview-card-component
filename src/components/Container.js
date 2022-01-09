import styled from "styled-components";
const StyledContainer = styled.div`
width:100%;
height:100vh;
background:${props=>props.theme.MainBackground};
position:relative;
display:flex;
align-items:center;
justify-content:center;

@media only screen and (max-width: 600px) {
    &{
        height:100%;
        padding-top: 5em;
        display:block;
    }
}

`;
const Container = ({children})=>{
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
}
export default Container;
