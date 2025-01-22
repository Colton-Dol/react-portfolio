// TODO: Display a picture of myself and a short bio.
import Profile from '../images/profile-picture.jpg';

function AboutMe() {
    return ( 
        <div className="ms-5 mt-5">
            <h2 className="ms-5 pb-4 text-light">About Me</h2>
            <br />
            <img src={Profile} className="profpic rounded-circle ms-4" style={{width: 175}} alt="picture of a man with red hair wearing a green shirt, bucket hat, and glasses smiling at the camera" />
            <br />
            <p className="text-light ms-5 pt-5">My name is Colton Doling and I am 20 years old. I was born into a Navy family. I am currently a student with edX learning to become a Software Engineer and plan to eventually pursue video game development.</p>
            <p className="text-light ms-5 pt-5">
                While I haven't started my career yet, I do have several projects that I've made that you can find in my portfolio. I do my best to be upbeat and keep a positive attitude.
                I work hard and get the job done to the best of my ability. I enjoy playing D&D with friends, which also helps with improving team work and bonding.
            </p>
        </div>
    )
}

export default AboutMe;