import Exp from "./Exp.jsx";

export default function Experiences() {
    return (
        <Exp>
            <h2>Experiences</h2>

            <div className="item">
                <h4>Undergraduate Researcher</h4>
                <p>Boston University - Prof. Nathan Mull</p>
                <ul>
                    <li>Conducting research on programming systems for expert blind and low-vision (BLV) programmers, identifying gaps in existing accessibility research</li>
                    <li>Conducted interviews and a literature review to investigate the strengths, coding strategies, and needs of expert BLV programmers</li>
                </ul>
            </div>

            <div className="item">
                <h4>Software Engineering Intern</h4>
                <p>Atomic Hands/Tachyo</p>
                <ul>
                    <li>Analyzed the information architecture of a SQL-backed STEM sign language dictionary, mapping relationships</li>
                    <li>Built a Python pipeline using the YouTube Data API to migrate and cross-link dictionary content on a more accessible platform</li>
                    <li>Designed the Atomic Hands logo and visual identity</li>
                </ul>
            </div>

            <div className="item">
                <h4>Admissions Ambassador</h4>
                <p>Boston University</p>
                <ul>
                    <li>Led campus tours and presented information to 100+ prospective students and families</li>
                </ul>
            </div>

            <div className="item">
                <h4>Marketing Assistant</h4>
                <p>Branding Chips</p>
                <ul>
                    <li>Developed branding concepts, assisted with product photography, and analyzed market data</li>
                </ul>
            </div>

            <div className="item">
                <h4>Photography Intern </h4>
                <p>Seoul Photography Studio</p>
                <ul>
                    <li>Assisted with photography and image processing for musical production posters and promotional materials using Photoshop and Capture One</li>
                    <li>Worked with different departments to create a successful photoshoot</li>
                </ul>
            </div>

        </Exp>
    );
}