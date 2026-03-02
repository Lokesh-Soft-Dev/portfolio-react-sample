import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Port.scss';
import myImage from "../assets/Photos/Sample.jpg";
import myImage1 from "../assets/Photos/Sample.jpg"; 

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Port = () => {
    useEffect(() => {
        // Only run this effect in the browser
        if (typeof window !== 'undefined') {
            // Initialize skill bars animation
            const skillBars = gsap.utils.toArray('.skill-fill');
            
            skillBars.forEach((bar, index) => {
                const percent = bar.querySelector('.skill-percent').textContent;
                
                gsap.fromTo(bar,
                    { width: 0 },
                    {
                        width: `${percent}`,
                        duration: 3,
                        delay: 6,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: bar.parentElement,
                            start: "top 80%",
                            toggleActions: "play none none none",
                            markers: false
                        }
                    }
                );
            });

            // Refresh ScrollTrigger after setup
            ScrollTrigger.refresh();
        }
    }, []);

    return (
        <section className='Sass'>
            <header className="header">
                <a href="#home" className="logo"><span>LOKESH</span> PORTFOLIO</a>

                <nav className="navbar">
                    <div className='nav-list'>
                    <a href="#home" className='active'>Portfolio</a>
                        <a href="#Skills">Skills</a>
                        <a href="#about">About Me</a>
                        <a href="#education">Education</a>
                        <a href="#projects">Projects</a>
                    </div>
                </nav>
                <a href="#contact-form" className="contact">Contact</a>
            </header>

            <section id="home">
                <div className='home-content'>
                    <h3>Hi</h3>
                    <h1>I'm <span>LOKESH K</span><br></br>a <i>Fullstack Developer & <br></br>Digital Freelancer</i></h1>
                    <p>"I specialize in building responsive and interactive websites using HTML, CSS, SCSS, JavaScript, and React. I use frameworks like Tailwind CSS and Bootstrap for better styling. I also work with Git and GitHub for version control. I focus on writing clean code and keeping up with new web technologies to build fast and smooth web applications."</p>
                    <div className='btn-box'>
                        <a className='btn-1' href="https://gfgroup.in/">View Website & GET IN TOUCH</a>
                    </div>
                </div>
                <div className='img-box'>
                    <img src={myImage} alt="My Photo" />
                </div>
            </section>

            <section id='Skills'>
                <fieldset>
                    <legend align="center"><h1>MY SKILLS</h1></legend>
                    <div className='left'>
                        <div className='skill'>
                            <div className='skill-title'>HTML <span> <img src="./src/assets/Html Logo.png" alt="" /> </span></div>
                            <div className='skill-bar'>
                                <div className='html skill-fill'>
                                    <span className='skill-percent'>90%</span>
                                </div>
                            </div>
                        </div>

                        <div className='skill'>
                            <div className='skill-title'>CSS<span> <img src="./src/assets/Css Logo.png" alt="" /> </span></div>
                            <div className='skill-bar'>
                                <div className='CSS skill-fill'>
                                    <span className='skill-percent'>90%</span>
                                </div>
                            </div>
                        </div>

                        <div className='skill'>
                            <div className='skill-title'>Sass<span> <img src="./src/assets/Sass logo.png" alt="" /> </span></div>
                            <div className='skill-bar'>
                                <div className='Sass skill-fill'>
                                    <span className='skill-percent'>80%</span>
                                </div>
                            </div>
                        </div>

                        <div className='skill'>
                            <div className='skill-title'>Javascript<span> <img src="./src/assets/Javascript.png" alt="" /> </span></div>
                            <div className='skill-bar'>
                                <div className='Javascript skill-fill'>
                                    <span className='skill-percent'>80%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='right'>
                        <div className='skill'>
                            <div className='skill-title'>React<span> <img src="./src/assets/React.png" alt="" /> </span></div>
                            <div className='skill-bar'>
                                <div className='React skill-fill'>
                                    <span className='skill-percent'>85%</span>
                                </div>
                            </div>
                        </div>

                        <div className='skill'>
                            <div className='skill-title'>Github<span> <img src="./src/assets/GitHub-Emblem.png" alt="" /></span></div>
                            <div className='skill-bar'>
                                <div className='Github skill-fill'>
                                    <span className='skill-percent'>90%</span>
                                </div>
                            </div>
                        </div>

                        <div className='skill'>
                            <div className='skill-title'>Bootstrap<span> <img src="./src/assets/Bootstrap_logo.png" alt="" /> </span></div>
                            <div className='skill-bar'>
                                <div className='Bootstrap skill-fill'>
                                    <span className='skill-percent'>70%</span>
                                </div>
                            </div>
                        </div>

                        <div className='skill'>
                            <div className='skill-title'>Tailwind<span> <img src="./src/assets/Tailwind css.png" alt="" /> </span></div>
                            <div className='skill-bar'>
                                <div className='Tailwind skill-fill'>
                                    <span className='skill-percent'>60%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </section>

            <section id="about">
                <div className="about-img">
                    <img src={myImage1} alt="Loki" />
                </div>
                <div className="about-content">
                    <h2 className='heading'>About <span>Me</span></h2>
                    <h3><i>Frontend <span>Developer</span></i></h3>
                    <p>"Hello! I'm a passionate and detail-oriented individual who loves creating digital experiences. I enjoy solving problems, learning new technologies, and continuously improving my skills. With a strong dedication to my craft, I strive to build intuitive and visually appealing web applications. My journey in the tech world has been exciting, and I'm always eager to take on new challenges that push me to grow as a developer."</p>
                    <a href="https://s3.eu-north-1.amazonaws.com/my.portfolio.utilities/Resume_for+Task.pdf" className='btn-exp'>Download Resume</a>
                </div>
            </section>

            <section id="education">
                <h2>Education & Certifications</h2>
                <div className="edu-list">

                    <div className="edu-item">
                        <h3>📚 Postgraduate</h3>
                        <p>S.V.University - MCA</p>
                        <span>Year: 2017 - 2021</span>
                    </div>

                    <div className="edu-item">
                        <h3>🏫 Undergraduate</h3>
                        <p>Mohan Babu University - M.E.C's</p>
                        <span>Year: 2014 - 2017</span>
                    </div>

                    <div className="edu-item">
                        <h3>👨‍💻 Board of Intermediate Education</h3>
                        <p>Sree Chaitanya College - MPC</p>
                        <span>Year: 2012 - 2014</span>
                    </div>

                    <div className="edu-item">
                        <h3>🛠️ Certification</h3>
                        <p>Junior Software Developer (PMKVY)</p>
                        <span>Year: 2019</span>
                    </div>

                    <div className="edu-item">
                        <h3>💼 Training</h3>
                        <p>Besant Technologies - Full-Stack Development</p>
                        <span>Year: 20XX</span>
                    </div>
                </div>
            </section>

            <section id="projects">
                <h2>My Projects</h2>
                <div className="project-list">
                    {/* <div className="project-card">
                        <h3>Movie Website</h3>
                        <p>A movie browsing app with attractive movie cards. You can watch trailers, view cast details, and explore related movies of a particular cast, along with a secure login page.</p>
                        <p><strong>Tech Used:</strong> HTML, CSS, JavaScript (ReactJS)</p>
                        {/* <a href="https://screentrail-moviewebsite.netlify.app/login" target="_blank">View Project</a> */}
                    {/* </div>  */}
                    <div className="project-card">
                        <h3>Apple Clone</h3>
                        <p>Apple iphone15 at the time of their launch, I created a landing webpage showcasing their features.</p>
                        <p><strong>Tech Used:</strong> HTML, CSS</p>
                        <a href="https://lokesh-soft-dev.github.io/frontend-mini-projects/Modern_Apple_iphone15_Landing_Page/" target="_blank">View Project</a>
                    </div>
                    
                    <div className="project-card">
                        <h3>GSAP Animation</h3>
                        <p>A smooth-scrolling website with stunning animations using GSAP ScrollTrigger</p>
                        <p><strong>Tech Used:</strong> HTML, CSS, GSAP</p>
                        <a href="https://lokesh-soft-dev.github.io/gsap-product-showcase/" target="_blank">View Project</a>
                    </div>
                    <div className="project-card">
                        <h3>Weather API Application</h3>
                        <p>A weather forecasting app that fetches real-time weather data using OpenWeather API.</p>
                        <p><strong>Tech Used:</strong> HTML, CSS, JavaScript</p>
                        <a href="https://iswarreddy.github.io/Weather-Wish/" target="_blank">View Project</a>
                    </div>
            
                    <div className="project-card">
                        <h3>TODO App</h3>
                        <p>A simple to-do list app that helps manage daily tasks efficiently.</p>
                        <p><strong>Tech Used:</strong> HTML, CSS, JavaScript</p>
                        <a href="https://your-todoapp.netlify.app" target="_blank">View Project</a>
                    </div>
                </div>
            </section>

            <section id="contact-form">
                <form action="#">
                    <fieldset>
                        <legend align="center"><h1>Contact <span>Me</span></h1></legend>
                        <p className='para11' align="center"><b>If you have any Questions or need Assistance,Feel free to Reach out to Us.</b></p>

                        <div className='input-box'>
                            <input type="text" placeholder='Full Name' />
                            <input type="email" placeholder='Email' />
                            <input type="number" placeholder='Phone Number' />
                            <input type="text" placeholder='Subject' />
                            <textarea name="" id="" cols="15" rows="5" placeholder='Your Message'></textarea>
                        </div>
                        <input type="submit" value="REACH OUT" className='btn-1' />
                    </fieldset>
                </form>
            </section>

            <footer className="footer">
                <div className="social">
                    <a href="https://github.com/Lokesh-Soft-Dev"><i className='bx bxl-github' ></i></a>
                    {/* <a href="http://"><i className='bx bxl-facebook' ></i></a> */}
                    {/* <a href="http://"><i className='bx bxl-instagram' ></i></a> */}
                    <a href="https://www.linkedin.com/in/lokesh-k-990496378/"><i className='bx bxl-linkedin' ></i></a>
                    {/* <a href="http://"><i className='bx bxl-twitter' ></i></a> */}
                </div>

                <ul className='list'>
                    <h2>Contact Info</h2>

                    <li><strong>Phone : &nbsp;</strong> 📞<a href="">8919951141</a></li>

                    <li><strong>E-Mail : &nbsp;</strong> ✉️ <a href="">kempegowdalokesh1431@gmail.com</a></li>

                    <li><strong>Address : &nbsp;</strong> 🏡 <a href="">#143,BTM Layout,KS,Bengaluru.</a></li>
                </ul>

                <p className='copyright'>©️ 2025 LOKESH | All Rights Reserved</p>
            </footer>
        </section>
    )
}

export default Port;