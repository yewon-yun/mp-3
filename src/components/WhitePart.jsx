import styled from "styled-components";


const WhitePart = styled.div`
  width: 70vw;
  display: flex;
  font-family: 'Playfair Display';

  img {
    object-fit: cover;
    width: 30vw;
    height: 75vh;
    max-width: 80%;
    padding: 2%;
  }

  .text {
    width: 55vw;
    padding: 7% 3%;
    line-height: 180%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    margin-bottom: 5%;
    font-size: calc(2px + 1vw);
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;

    img {
      width: 90%;
      max-width: 100%;
      height: 65vh;
      object-fit: cover;
      object-position: center 40%;
      padding: 2%;
    }

    .text {
      width: 70vw;
    }

    p {
      font-size: calc(2px + 2.5vw);
    }
  }

  @media screen and (max-width: 750px) {
    img {
      height: 45vh;
      object-position: center 30%;
    }
  }
`;

export default WhitePart;