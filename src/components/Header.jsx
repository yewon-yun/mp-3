import styled from "styled-components";

const StyledHeader = styled.header`
  height: 20vh;
  background-color: #477c6f;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3%; 
    
    h1 {
        font-family: 'Londrina Outline';
        font-size: calc(1px + 5vw);
    }

    p {
        font-family: 'Petit Formal Script';
        font-size: calc(1px + 1.3vw);
    }

    @media screen and (max-width: 1000px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 3%;
        p {
            font-size: calc(1px + 1.7vw);
        }
    }

    @media screen and (max-width: 750px){
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        
        h1{
            font-size: calc(1px + 7vw);
        }
        
        p{
            font-size: calc(1px + 2vw);
        }
    }
`;


export default function Header(){
    return(
        <StyledHeader>
            <h1>Yewon Yun</h1>
            <p>An online resume website</p>
        </StyledHeader>
    )
}