import styled from "styled-components";

const StyledFooter = styled.footer`
    height: 4vh;
    color:white;
    background-color: #477c6f;
    display:flex;
    justify-content: right;
    text-align: center;
    padding-right:1%;
    
    a {
        color:white;
    }
`;

export default function Footer(){
    return(
        <StyledFooter>
            <p>All rights reserved by Yewon Yun <a href="">Credits</a>&#169;</p>
        </StyledFooter>
    )
}