import WhitePart from '../components/WhitePart';
import graduation from "../assets/graduation.png"

export default function Education(){
    return (
        <WhitePart>
            <div className="text">
                <h3>Education</h3>

                <h4>Kolej Tuanku Ja'afar</h4>
                <p>
                    Went to middle school and high school in KTJ. <br/>
                    Finished IGCSE and A-Levels.<br/>
                    Studied Music, Computer Science, Physics, and Mathematics.<br/>
                    Music Scholarship for Orchestral Composition.</p>

                <h4>Boston University</h4>
                <p>
                    Bachelor of Science degree in Computer Science.<br/>
                    Minoring in Cinema & Media Studies.<br/>
                    Two years of Boston University Admissions Ambassador.<br/>
                    Vice-President of BU Photography Club.
                </p>
            </div>
            <img src={graduation} alt="graduation picture" />

        </WhitePart>
    )
}