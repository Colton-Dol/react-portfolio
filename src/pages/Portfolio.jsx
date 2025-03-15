// TODO: Implement the Project components in two columns side-by-side. Use props to make each Project different.
import Project from '../components/Project';
import candidates from '../images/candidate.png';
import sunset from '../images/sunset-cloud.jpg';
import adventurersBoard from '../images/empty-guild-board.jpg';
import treasureBar from '../images/titleScreen.png';

function Portfolio() {
    const project1 = {
        title: 'GitHub Candidate Search',
        image: candidates,
        app: 'https://github-candidate-search-1.onrender.com/',
        repo: 'https://github.com/Colton-Dol/github-candidate-search'
    }

    const project2 = {
        title: `What's the Weather?`,
        image: sunset,
        app: 'https://hieu12-12.github.io/Project-1/',
        repo: 'https://github.com/hieu12-12/Project-1'
    }

    const project3 = {
        title: `Adventurer's Board`,
        image: adventurersBoard,
        app: 'https://adventurers-board.onrender.com/',
        repo: 'https://github.com/tiecaelwaerts/adventurers-board'
    }

    const project4 = {
        title: 'Treasure Bar Brawl',
        image: treasureBar,
        app: 'https://treasure-bar-brawl.onrender.com/',
        repo: 'https://github.com/Dkobes/Treasure-Bar-Brawl'
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
            </div>
        </div>
    )
}       
export default Portfolio;