import React, { useEffect, useState, useRef } from 'react';
import { Power3, gsap } from 'gsap';
import './App.css';
import ImageText from './components/ImageText';
import TextImage from './components/TextImage';
import sex_white from './sex_white.jpeg';
import cursed from './cursed_image.JPEG';
import jambi from './jambi.jpeg';
import scape from './scape.jpg';
import scape_no_human from './scape-no-human.jpg';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

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

        slider.classList.toggle('fade');
        footer.classList.toggle('fade');
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
                        <li><a id="link" href="#hero-section">HERO</a></li>
                        <li><a id="link" href="#about-section">ABOUT</a></li>
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
                    title="Thomas Merritt"
                    subtitle="Full Stack Developer"
                    description={[
                        "Hi, I'm Thomas. I'm a software engineer with a passion for creating and developing web applications.",
                        "I have experience with JavaScript, React, Redux, Ruby on Rails, and SQL.",
                        "I'm always looking for new opportunities to learn and grow as a developer.",
                        "I'm currently seeking a full-time position as a software engineer."
                    ]}
                />
                <TextImage
                    id="about-section"
                    image={sex_white}
                    aboutContent={[
                        {
                            title: "About Me",
                            paragraphs: [
                                "I graduated from the University of California, Santa Barbara with a Bachelor of Science in Biopsychology.",
                            ]
                        },
                        {
                            title: "My Skills",
                            paragraphs: [
                                "JavaScript, React, Redux, Ruby on Rails, SQL, HTML, CSS, Git, Node.js, Express.js, PostgreSQL, MongoDB"
                            ]
                        },
                        {
                            title: "My Interests",
                            paragraphs: [
                                "I enjoy hiking, playing video games, and watching movies in my free time.",
                                "I'm also interested in machine learning and artificial intelligence."
                            ]
                        }
                    ]}
                />
                <ImageText
                    id="skills-section"
                    image={cursed}
                    title="Thomas Merritt"
                    subtitle="Full Stack Developer"
                    description={[
                        "Hi, I'm Thomas. I'm a software engineer with a passion for creating and developing web applications.",
                        "I have experience with JavaScript, React, Redux, Ruby on Rails, and SQL.",
                        "I'm always looking for new opportunities to learn and grow as a developer.",
                        "I'm currently seeking a full-time position as a software engineer."
                    ]}
                />
                <TextImage
                    id="experience-section"
                    image={jambi}
                    borderRadius="0%"
                    width='100%'
                    height='100%'
                    aboutContent={[
                        {
                            title: "About Me",
                            paragraphs: [
                                "I graduated from the University of California, Santa Barbara with a Bachelor of Science in Biopsychology.",
                            ]
                        },
                        {
                            title: "My Skills",
                            paragraphs: [
                                "JavaScript, React, Redux, Ruby on Rails, SQL, HTML, CSS, Git, Node.js, Express.js, PostgreSQL, MongoDB"
                            ]
                        },
                        {
                            title: "My Interests",
                            paragraphs: [
                                "I enjoy hiking, playing video games, and watching movies in my free time.",
                                "I'm also interested in machine learning and artificial intelligence."
                            ]
                        }
                    ]}
                />

                <ImageText
                    id="misc-section"
                    image={cursed}
                    title="Thomas Merritt"
                    subtitle="Full Stack Developer"
                    description={[
                        "Hi, I'm Thomas. I'm a software engineer with a passion for creating and developing web applications.",
                        "I have experience with JavaScript, React, Redux, Ruby on Rails, and SQL.",
                        "I'm always looking for new opportunities to learn and grow as a developer.",
                        "I'm currently seeking a full-time position as a software engineer."
                    ]}
                />  
            </div>

            <ParallaxProvider>
                <Parallax y={[-10, 10]}>
                    <footer id='footer-links-navigation-point' className='footer-links-wrapper' style={{
                        background: `linear-gradient(rgba(9, 23, 42), rgba(0, 0, 0, 0.2)),url(${scape_no_human}) no-repeat center center`,
                        backgroundSize: 'cover',
                        color: '#fff',
                        textAlign: 'center'
                        }}>
                        <Parallax y={[-20, 20]} speed={20}>
                            <ul className="footer-links">
                                <li><a href="mailto:thomasolivermerritt@gmail.com?subject=Feedback&body=Message">EMAIL</a></li>
                                <li><a href="https://www.linkedin.com/in/thomas-merritt-6630ab232?trk=people-guest_people_search-card">LINKEDIN</a></li>
                                <li><a href="resume.pdf">RESUME</a></li>
                                <li><a href="https://github.com/ThomasMerritt">GITHUB</a></li>
                            </ul>
                        </Parallax>
                    </footer>
                </Parallax>
            </ParallaxProvider>
        </div>
    );
};

export default App;
