// TODO: Implement the Project components in two columns side-by-side. Use props to make each Project different.
import Project from '../components/Project';

function Portfolio() {
    const title = 'Pizza Pizza';
    const image = 'blue-background.jpg';
    const app = 'https://littlecaesers.com';
    const repo = 'https://github.com/Colton-Dol/employee-tracker';
    const title2 = '';
    const image2 = 'Square-Profile-Picture-2.jpg'

    return (
        <div className='mt-5'>
            <h2 className="ms-5 pb-4 text-light">Portfolio</h2>
            <br />
            <div className='container align-items-center text-center mt-5'>
                <div className='row justify-content-center pb-5'>
                    <div className='col-5 me-5' id='1'>
                        <Project title={title} image={image} app={app} repo={repo} />
                    </div>
                    <div className='col-5 ms-5' id='2'>
                        <Project title={title} image={image2} app={app} repo={repo} />
                    </div>
                </div>
                <div className='row justify-content-center pb-5'>
                    <div className='col-5 me-5' id='3'>
                        <Project title={title} image={image} app={app} repo={repo} />
                    </div>
                    <div className='col-5 ms-5' id='4'>
                        <Project title={title} image={image} app={app} repo={repo} />
                    </div>
                </div>
                <div className='row justify-content-center pb-5'>
                    <div className='col-5 me-5' id='5'>
                        <Project title={title} image={image} app={app} repo={repo} />
                    </div>
                    <div className='col-5 ms-5' id='6'>
                        <Project title={title} image={image} app={app} repo={repo} />
                    </div>
                </div>
            </div>
        </div>
    )
}       
export default Portfolio;