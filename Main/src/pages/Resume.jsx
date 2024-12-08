// TODO: Add a link to a downloadable resume and list front-end and back-end proficiecies
function Resume() {
    return (
        <div>
            <h2>Resume</h2>
            <br />
            <p>Download my <a href="./src/assets/" download>resume</a></p>
            <br />
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
            </ul>
        </div>
    )
}
export default Resume;