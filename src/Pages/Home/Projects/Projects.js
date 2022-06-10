import React from 'react';
import project1 from '../../../images/projects/project1.png';
import project2 from '../../../images/projects/project2.png'
import project3 from '../../../images/projects/project3.png'
import project4 from '../../../images/projects/project4.png'
import project5 from '../../../images/projects/project5.png'
import Project from './Project';
import "swiper/css";
import "swiper/css/pagination";
import "./Projects.css"
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const Projects = () => {
    const projects = [
        { id: "1", name: "Rainbow Computers", img: project1 },
        { id: "2", name: "Sazid's Laptop Store", img: project2 },
        { id: "3", name: "Sazid's English Coaching", img: project3 },
        { id: "4", name: "PC Component Shop", img: project4 },
        { id: "5", name: "Laptop Shop", img: project5 }
    ]
    return (
        <div id='projects' className='bg-black'>
            <h2 className='text-5xl pt-5 font-bold text-white text-center pb-10'>My Projects</h2>
            <div className='flex justify-center'>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        1024: {
                          slidesPerView: 3,
                        },
                        640: {
                          slidesPerView: 1,
                        },
                      }}                    
                >
                    {
                        projects.map(project =>
                            <SwiperSlide>
                                <Project
                                    key={project.id}
                                    project={project}
                                />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;