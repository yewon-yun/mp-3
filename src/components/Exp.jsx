import styled from "styled-components";

const Exp = styled.div`
  padding: 3%;
  width: 70vw;

  h4 {
    padding-top: 1%;
  }

  li {
    font-size: calc(1px + 1.1vw);
  }

  @media screen and (max-width: 1000px) {
    padding: 7%;
    font-size: calc(1px + 2vw);
    width: 100%;

    .item {
      padding-bottom: 5%;
    }

    h2 {
      font-size: calc(4px + 2vw);
    }

    h4, p, li {
      font-size: calc(1px + 2vw);
    }
  }

  @media screen and (max-width: 750px) {
    font-size: calc(1px + 3vw);

    h2 {
      font-size: calc(4px + 3vw);
    }

    h4 {
      font-size: calc(1px + 3vw);
    }

    p, li {
      font-size: calc(1px + 2.5vw);
    }
  }
`;

export default Exp;