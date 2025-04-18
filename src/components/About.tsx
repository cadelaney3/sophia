import React, { useState } from 'react';
import '../styles/About.css';

const About: React.FC = () => {

    return (
        <div className='about-container'>
            <div className='about'>
                <h2>About Me</h2>
                <p>
                    I am an artist from Missoula, Montana who finds inspiration from my Montana roots while adding my own creative twists. My primary
                    mediums are mural painting and wood burning, but I enjoy crafing art in other forms such as crochet and digital media. I like to
                    create realistic art that includes elements of nature and animals while using colors that pop and draw your attention. Over the years
                    I've completed several murals in Montana towns like Townsend, White Sulphur Springs, and Helena, loving the creative freedom and
                    hospitality these communities have to offer. I also strive for challenging and big projects, which include completing large murals in places
                    like California, and I look forward to taking on more of these large-scale projects.
                </p>
                <p>
                    In my spare time, I love to explore the outdoors and working on personal projects. I believe in continuous learning and strive to improve
                    my skills every day.
                </p>
            </div>
        </div>
    );
};

export default About;