import React, { useEffect, useState, useRef } from 'react';
import { Power3, gsap } from 'gsap';
import './App.css';
import ImageText from './components/ImageText';
import TextImage from './components/TextImage';
import face from './face.jpeg';
import cursed from './cursed_image.JPEG';
import jambi from './jambi.jpeg';
import scape from './scape.jpg';
import school from './ucr.JPEG'
import path from './path.jpg'
import resume from './Resume.pdf';
import Footer from './components/Footer';

const positivity = [
    "こんにちは",
    "stay frosty",
    "i'm here",
    "hola",
    "good day!",
    '<3',
    '(╯°□°)╯',
    'ノ( º _ ºノ)'
];

const App = () => {
    const [caption, setCaption] = useState('');
    const [captionIndex, setCaptionIndex] = useState(0);
    const canvasRef = useRef(null);
    const navlinksRef = useRef(null);

    useEffect(() => {
        const slider = document.getElementById('slider');
        const captionElement = document.getElementById('caption');
        const footer = document.getElementsByClassName('footer-links-wrapper')[0];


        captionElement.classList.toggle('fade');

        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        };

        const changeCaption = () => {
            shuffleArray(positivity);
            const captionElement = document.getElementById('caption');
            captionElement.style.opacity = '0';
            setTimeout(() => {
                let newCaption = positivity[captionIndex];
                setCaption(newCaption);
                setCaptionIndex((prevIndex) => (prevIndex + 1) % positivity.length);
                captionElement.style.opacity = '1';
            }, 1000);
        };

        const interval = setInterval(changeCaption, 4000);

        window.addEventListener('scroll', scrollEffect);

        scrollEffect();

        const tl = gsap.timeline();

        tl.fromTo(canvasRef.current, 2, { height: "0%" }, { height: "80%", ease: Power3.easeInOut })
            .fromTo(navlinksRef.current, .75, { height: "0%" }, { height: "8%", ease: Power3.easeInOut });

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', scrollEffect);
        };
    }, []);

    const scrollEffect = () => {
        const CONTAINER = document.querySelector('.character-information');
        if (window.scrollY >= 150) {
            CONTAINER.style.opacity = '1';
            CONTAINER.style.transform = 'translateX(0px)';
            CONTAINER.style.transition = '1s ease-in-out';
        } else {
            CONTAINER.style.opacity = '0';
            CONTAINER.style.transform = 'translate(-20px)';
        }
    };

    return (
        <div>
            <header>
                <nav>
                    <ul className="nav-links" ref={navlinksRef}>
                        <li><a id="link" href="#hero-section">ABOUT</a></li>
                        <li><a id="link" href="#skills-section">SKILLS</a></li>
                        <li><a id="link" href="#experience-section">EXPERIENCE</a></li>
                        <li><a id="link" href="#misc-section">MISC</a></li>
                        <li><a id="link" href="#footer-links-navigation-point">LINKS</a></li>
                    </ul>
                </nav>
                <section>
                    <div className="canvas" ref={canvasRef}>
                        <img src={scape} width="1500" alt="Scape" />
                    </div>
                </section>
                <h1 id="caption" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>{caption}</h1>
            </header>

            <div id="slider"></div>

            <div className='character-information'>
                <ImageText
                    id="hero-section"
                    image={cursed}
                    sections={[
                        {
                            title: "Thomas Merritt",
                            subtitle: "Front-End Developer",
                            description: [
                                "I'm Thomas. I'm a software engineer with a passion for creating and developing web applications.",
                            ]
                        }
                    
                    ]}
                />
                <TextImage
                    id="about-section"
                    image={face}
                    aboutContent={[
                        {
                            title: "About Me",
                            paragraphs: [
                                "I'm currently a student at the University of California, Riverside, studying computer science.",
                                "I mainly have interest in front-end development, but I've also worked with back-end technologies.",
                                "I'm always looking for new opportunities to learn and grow as a developer."
                            ]
                        },
                    ]}
                    buttons={[
                        { className: 'button-container', text: 'RESUME' },
                    ]}
                    link={resume}
                />
                <ImageText
                    id="skills-section"
                    image={school}
                    sections={[
                        {
                            title: "University of California, Riverside (B.S. Computer Science)",
                            subtitle: "Relevant Courses:",
                            description: [
                                'Algorithms & Data Structures, Discrete Math, Computer Architecture, Computer Organization, OOP, Artificial Intelligence, Operating Systems, Automata Theory, Web Development, NLP, Computer Security, Big Data',

                            ]
                        },
                        {
                            subtitle: "Skills:",
                            description: [
                                'Javascript, Java, Python, Github, HTML, CSS, React, Flutter'
                            ]
                        },
                        
                        

                    
                    ]}
                />
                <TextImage
                    id="experience-section"
                    image={path}
                    borderRadius="0%"
                    width='100%'
                    height='100%'
                    aboutContent={[
                        {
                            title: "Telcom IP",
                            paragraphs: [
                                "Upcoming intern to work on the development of a new full stack application."
                            ]
                        },
                        {
                            title: "TRAPNSTUDIO",
                            paragraphs: [
                                " Contributed to user permission customization within Vibecue, a software designed for public venues, enabling DJ-controlled queue and voting functionalities for song selection.",
                                "Worked with Firebase's Realtime Database and Spotify’s API system to develop quality-of-life user implementations.",
                            ]
                        },
                    ]}
                    buttons={[]}
                
                />

                <ImageText
                    id="misc-section"
                    image={jambi}
                    sections={[
                        {
                            title: "My Interests",
                            subtitle: "Sketching",
                            description: [
                                "I enjoy sketching in my free time."
                            ]
                        },
                        {
                            subtitle: "Drums",
                            description: [
                                "I've been playing drums for over 10 years."
                            ]
                        },
                        {
                            subtitle: "Skiing",
                            description: [
                                "I have been skiing for over 15 years."
                            ]
                        }
                    ]}
                />  
            </div>
            <Footer />     
        </div>
    );
};

export default App;
