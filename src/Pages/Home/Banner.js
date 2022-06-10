import React from 'react';
import profileImg from '../../images/profile-img.png'
const Banner = () => {
    return (
        <div className="grid min-h-screen bg-base-100">
            <div className="flex items-center justify-center flex-col lg:flex-row-reverse">
                <img src={profileImg} className="max-w-sm" alt='' />
                <div className='px-5'>
                    <h1 className="text-5xl font-bold">Hi, This is Sheikh MD Sazidul Islam</h1>
                    <p className="py-6 text-xl">A web developer</p>
                    <a href="https://drive.google.com/file/d/1FGB8yt5VLUZdY_tu_szFQsKqZnMqCDxI/view?usp=sharing" download target="_blank" rel="noreferrer">
                        <button className="btn btn-primary">Download Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;