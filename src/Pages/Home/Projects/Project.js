import React from 'react';

const Project = ({ project }) => {
    const { img, name } = project
    return (
        <div class="card lg:w-96 bg-base-100 mx-0 lg:mx-10 my-5 lg:my-0 w-screen shadow-lg">
            <figure><img className='' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <div className='flex justify-center'>
                <h2 class="card-title">{name}</h2>
                </div>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;