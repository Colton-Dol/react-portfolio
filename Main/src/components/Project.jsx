// TODO: Use props to pass in an image, title, deployed app link, and repository link. When the image is hovered, it shrinks, goes white, and displays the title and github icon and both are higlighted when hovered and link to the deployed app and repository respectively.
import './Project.css';
import GitHub from './GitHub';

function Project(props) {
    return (
        <div className='image' style={{backgroundImage: `url(./src/assets/images/${props.image})`}}>
            <div className='container'>
                <a href={props.app} target='_blank' className='text text-decoration-none'>{props.title}</a>
                <GitHub link={props.repo} />
            </div>
        </div>
    )
}

export default Project;