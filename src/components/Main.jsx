import styled from "styled-components";

const StyledMain = styled.main`
  flex: 1;
  min-width: 0;
`;

export default function Main({ children }) {
    return (
        <StyledMain>{children}</StyledMain>
    );
}