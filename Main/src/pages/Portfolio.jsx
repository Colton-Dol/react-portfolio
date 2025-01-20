// TODO: Implement the Project components in two columns side-by-side. Use props to make each Project different.
import Project from '../components/Project';
import prework from '/src/assets/images/prework.jpg';
import horiseon from '/src/assets/images/horiseon-background.jpg';
import payrole from '/src/assets/images/payrole-background.jpg';
import oldPortfolio from '/src/assets/images/portfolio-background.jpg';
import sunset from '/src/assets/images/sunset-cloud.jpg';
import storm from '/src/assets/images/dark-weather.jpg';

function Portfolio() {
    const project1 = {
        title: 'Prework Study Guide',
        image: prework,
        app: 'https://colton-dol.github.io/prework-study-guide/',
        repo: 'https://github.com/Colton-Dol/prework-study-guide'
    }

    const project2 = {
        title: 'Horiseon',
        image: horiseon,
        app: 'https://colton-dol.github.io/horiseon-accessibility-improvement/',
        repo: 'https://github.com/Colton-Dol/horiseon-accessibility-improvement/'
    }

    const project3 = {
        title: 'Payrole Tracker',
        image: payrole,
        app: 'https://colton-dol.github.io/payrole-tracker/',
        repo: 'https://github.com/Colton-Dol/payrole-tracker'
    }

    const project4 = {
        title: 'Old Portfolio',
        image: oldPortfolio,
        app: 'https://colton-dol.github.io/portfolio/',
        repo: 'https://github.com/Colton-Dol/portfolio'
    }

    const project5 = {
        title: `What's the Weather?`,
        image: sunset,
        app: 'https://hieu12-12.github.io/Project-1/',
        repo: 'https://github.com/hieu12-12/Project-1'
    }

    const project6 = {
        title: 'Weather Dashboard',
        image: storm,
        app: 'https://weather-dashboard-7nxn.onrender.com/',
        repo: 'https://github.com/Colton-Dol/weather-dashboard'
    }

    return (
        <div className='mt-5'>
            <h2 className="ms-5 pb-4 text-light">Portfolio</h2>
            <br />
            <div className='container align-items-center text-center mt-5'>
                <div className='row justify-content-center pb-5'>
                    <div className='col-5 me-5' id='1'>
                        <Project title={project1.title} image={project1.image} app={project1.app} repo={project1.repo} />
                    </div>
                    <div className='col-5 ms-5' id='2'>
                        <Project title={project2.title} image={project2.image} app={project2.app} repo={project2.repo} />
                    </div>
                </div>
                <div className='row justify-content-center pb-5'>
                    <div className='col-5 me-5' id='3'>
                        <Project title={project3.title} image={project3.image} app={project3.app} repo={project3.repo} />
                    </div>
                    <div className='col-5 ms-5' id='4'>
                        <Project title={project4.title} image={project4.image} app={project4.app} repo={project4.repo} />
                    </div>
                </div>
                <div className='row justify-content-center pb-5'>
                    <div className='col-5 me-5' id='5'>
                        <Project title={project5.title} image={project5.image} app={project5.app} repo={project5.repo} />
                    </div>
                    <div className='col-5 ms-5' id='6'>
                        <Project title={project6.title} image={project6.image} app={project6.app} repo={project6.repo} />
                    </div>
                </div>
            </div>
        </div>
    )
}       
export default Portfolio;