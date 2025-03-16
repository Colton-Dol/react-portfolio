// TODO: Add a link to a downloadable resume and list front-end and back-end proficiecies
import resume from '/src/assets/resume.docx';

function Resume() {
    return (
        <div className="text-light ms-5 mt-5">
            <h2 className="ms-5">Resume</h2>
            <br />
            <p className="ms-5">Download my <a href={resume} className="link-underline-opacity-0 link-secondary" download>resume</a></p>
            <br />
            <h3 className="ms-5">Front-end Proficiencies</h3>
            <ul className="p-4 ms-5">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>React</li>
            </ul>
            <h3 className="ms-5">Back-end Proficiencies</h3>
            <ul className="p-4 ms-5">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
            </ul>
        </div>
    )
}
export default Resume;