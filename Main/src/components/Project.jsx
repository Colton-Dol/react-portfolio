// TODO: Use props to pass in an image, title, deployed app link, and repository link. When the image is hovered, it shrinks, goes white, and displays the title and github icon and both are higlighted when hovered and link to the deployed app and repository respectively.
import './Project.css';
import GitHub from './GitHub';

function Project({ title, image, app, repo }) {
    return (
        <div className='image' style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className='container'>
                <a href={app} target='_blank' className='text text-decoration-none'>{title}</a>
                <GitHub link={repo} />
            </div>
        </div>
    )
}

export default Project;