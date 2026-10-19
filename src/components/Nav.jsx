import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #f3e8c6;
  width: 15vw;
  min-height: 76vh;
    
    ul{
        padding-left: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
    }
    
    ul :hover{
        background-color: #f0c0c0;
    }

    li{
        text-align: center;;
        padding: 8%;
    }

    a{
        text-decoration: none;
        color: #513721;
        font-size: calc(0.3px + 1.4vw);
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        min-height: auto;

        ul {
            flex-direction: row;
            justify-content: center;
            text-align: center;
        }

        li {
            padding: 1%;
        }

        a {
            font-size: calc(1px + 2vw);
        }
    }

    @media screen and (max-width: 750px) {
        a {
            font-size: 100%;
        }
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experiences">Experience</Link></li>
                <li><Link to="/projects">Project</Link></li>
                <li><Link to="/photography">Photography</Link></li>
                <li><Link to="/certificates">Certificates</Link></li>
            </ul>
        </StyledNav>
    );
}