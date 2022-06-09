import React from 'react';
import profileImg from '../../images/profile-img.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={profileImg} class="max-w-sm" alt='' />
                <div className='px-5'>
                    <h1 class="text-5xl font-bold">Hi, This is Sheikh MD Sazidul Islam</h1>
                    <p class="py-6 text-xl">A web developer</p>
                    <a href="https://drive.google.com/file/d/1FGB8yt5VLUZdY_tu_szFQsKqZnMqCDxI/view?usp=sharing" download target="_blank" rel="noreferrer">
                        <button className="btn btn-primary">Download Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;