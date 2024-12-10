// TODO: Implement the Project components in two columns side-by-side. Use props to make each Project different.
import Project from '../components/Project';

function Portfolio() {
    const title = 'Pizza Pizza';
    const image = './src/assets/images/blue-background.jpg';
    const app = 'https://littlecaesers.com';
    const repo = 'https://github.com/Colton-Dol/employee-tracker';

    return (
        <div className='row ms-5 mt-5'>
         <Project title={title} image={image} app={app} repo={repo} />
         <Project />
         <Project />
         <Project />
         <Project />
         <Project />
        </div>
    )
}       
export default Portfolio;