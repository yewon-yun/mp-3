import WhitePart from '../components/WhitePart';
import yewon from "../assets/yewon.jpg"

export default function Home() {
    return (
        <WhitePart>
            <img src={yewon} alt="Yewon Yun" />

            <div className="text">
                <h2>About</h2>
                <p>
                    I am a senior in Boston University studying Computer Science and minoring in Cinema & Media Studies. <br />
                    I was born and raised in South Korea until I was 13, and moved to an international boarding school in Malaysia by myself. <br />
                    In Malaysia, I spent five years in Kolej Tuanku Ja'afar and did A-Levels, studying CS, music, mathematics, and physics. <br />
                    Currently, I moved to Boston, MA, to study in BU. <br />
                </p>

                <h2>Contact</h2>
                <p>
                    Phone: 123-456-7890 <br />
                    Email: a.abc@gmail.com <br />
                </p>
            </div>
        </WhitePart>
    );
}