import github from '../images/github-mark-white.png';

function GitHub(props) {
    return <a href={props.link} target="_blank"><img src={github} className="icon p-5" /></a>
}

export default GitHub;