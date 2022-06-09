import React from 'react';
import project1 from '../../../images/projects/project1.png';
import project2 from '../../../images/projects/project2.png'
import project3 from '../../../images/projects/project3.png'
import Project from './Project';
const Projects = () => {
    const projects = [
        { id: "1", name: "Rainbow Computers", img: project1 },
        { id: "2", name: "Sazid's Laptop Store", img: project2 },
        { id: "1", name: "Sazid's English Coaching", img: project3 }
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold text-center pb-10'>My Projects</h2>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {
                        projects.map(project => <Project
                            key={project.id}
                            project={project}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;