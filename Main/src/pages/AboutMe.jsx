// TODO: Display a picture of myself and a short bio.
function AboutMe() {
    return ( 
        <div className="ms-5 mt-5">
            <h2 className="ms-5 pb-4 text-light">About Me</h2>
            <br />
            <img src='./src/assets/images/Square-Profile-Picture-2.jpg' className="profpic rounded-circle ms-4" style={{width: 175}} alt="picture of a man with red hair wearing a green shirt, bucket hat, and glasses smiling at the camera" />
            <br />
            <p className="text-light ms-5 pt-5">Here is a paragraph about my life</p>
        </div>
    )
}

export default AboutMe;