import Exp from "./Exp.jsx";

export default function Project() {
    return (
        <Exp>
            <h2>Projects</h2>

            <div className="item">
                <h4>MediPet</h4>
                <p>Figma, ProCreate, Github, Python</p>
                <ul>
                    <li>Conducted surveys and competitive analysis with the team to identify user needs and inform the app’s design and functionality</li>
                    <li>Designed the UI/UX for a medication reminder app, using virtual pet companions to support mental health and engagement</li>
                    <li>Created the app’s interface and original pet characters and visual assets in Figma and ProCreate</li>
                </ul>
            </div>

            <div className="item">
                <h4>Orchesture</h4>
                <p>MediaPipe, OpenCV, Python, LogicPro</p>
                <ul>
                    <li>Designed a real-time gesture recognition system using MediaPipe and OpenCV to convert hand gestures into MIDI signals for music interaction</li>
                    <li>Designed a low-latency pipeline enabling responsive gesture-to-audio output</li>
                </ul>
            </div>

            <div className="item">
                <h4>AdvisorAI</h4>
                <p>Figma, Next.js, TypeScript, OpenAI API, TerrierGPT</p>
                <ul>
                    <li>Designed the UI/UX for an AI course recommendation platform and implemented the interface using Next.js and TypeScript</li>
                    <li>Built a Retrieval-Augmented Generation (RAG) system using OpenAI API and vector search on university datasets for course recommendations</li>
                </ul>
            </div>

            <div className="item">
                <h4>FlapCat Project</h4>
                <p>IbisPaint, Unity, C#</p>
                <ul>
                    <li>Designed and illustrated all original characters, environments, and visual assets for a Flappy Bird-inspired game</li>
                    <li>Implemented the game and integrated original artwork and interactions in Unity using C#.</li>
                </ul>
            </div>
        </Exp>
    )
}