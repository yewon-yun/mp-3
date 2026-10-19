import styled from "styled-components";
import buildings from "../assets/buildings.jpg";
import morebuildings from "../assets/morebuildings.jpg";
import boston from "../assets/boston.jpg";
import winter from "../assets/winter.jpg";

const Photos = styled.div`
    width: 70vw;
    padding: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 1%;
        font-family: 'Playfair Display';
    }

    .images {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .images img {
        width: 30vw;
        height: 30vh;
        object-fit: cover;
        max-width: 100%;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        max-width: 100%;

        .container {
            flex-direction: column;
        }

        .images img {
            width: 80vw;
            min-height: 50vh;
            max-width: 100%;
            padding: 1%;
        }
    }

    @media screen and (max-width: 750px) {
        .images img {
            width: 80vw;
            min-height: 20vh;
            max-width: 100%;
            padding: 1%;
        }
    }
`

export default function Photography(){
    return (
        <Photos>
            <div className="text">
                <h3>Photography</h3>
                <p>Here are some photography work I did over the years.</p>
            </div>

            <div className="images">

                <div className="container">
                    <img src={buildings} alt="buildings"/>
                    <img src={morebuildings} alt="Boston buildings"/>
                </div>

                <div className="container">
                    <img src={boston} alt="super88"/>
                    <img src={winter} alt="building in winter"/>
                </div>

            </div>
        </Photos>
    )
}