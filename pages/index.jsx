import Head from 'next/head';

const Curriculum = () => {
  return(
    <>
      <Head>
        <title>Diego Guevara Orduña</title>
      </Head>
      <div className="relative text-gray-800 bg-gray-50">
        <header>
            <nav className="w-full">
                <div className="flex justify-between w-full px-16 py-8">
                    <div>
                        <ul
                            className="flex flex-col text-left md:flex-row space-y-5 md:space-y-0 md:space-x-6 text-xl md:text-2xl">
                            <li className="text-left">
                                <a href="#experience">
                                    Experience
                                </a>

                            </li>
                            <li className="text-left">
                                <a href="#contact">
                                    Contact
                                </a>

                            </li>
                            <li className="text-left">
                                <a href="/portfolio">
                                    Portfolio
                                </a>

                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col md:flex-row items-end md:items-center md:space-x-4 space-y-4 md:space-y-0">
                            <li>
                                <a href="https://www.github.com/DiegoGuevaraO" target="_blank" aria-label="Github"
                                    className="hover:text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 rounded-full bi bi-linkedin" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/diego-emanuel-guevara-orduña-4ab42b234/" target="_blank" aria-label="linkedin"
                                    className="hover:text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 rounded-full bi bi-linkedin" fill="currentColor" viewBox="0 0 16 16">
                                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <section className="flex flex-col items-center justify-center h-screen  -my-20 md:-mt-48 px-8">
            <div className="flex flex-col items-center justify-center text-center h-screen-half">
                <img className="md:hidden object-cover w-15 h-60 rounded-lg mb-5" 
                  src="/yo.jpeg"
                  alt="Diego Guevara Orduña"
                />
                <h1 className="text-5xl sm:text-6xl lg:text-9xl">Diego Guevara</h1>
                <h2 className="font-light text-4xl sm:text-5xl lg:text-8xl">Software Developer</h2>
            </div>
        </section>
        <section className="flex items-center justify-between px-8 mb-20 tracking-wider">
            <div className="flex flex-col w-full md:w-1/2 space-y-12 text-center md:text-left">
                <div className="flex flex-col px-10 md:px-20">
                    <h3 className="text-xl font-bold">Skills</h3>
                    <br />
                    <span className="text-lg">Management</span>
                    <span className="text-lg">Collaboration</span>
                    <span className="text-lg">Communication</span>
                </div>
                <div className="px-10 md:px-20">
                    <h3 className="text-xl font-bold">Summary</h3>
                    <br />
                    <p className="w-full md:w-2/3">Information Technology Engineer with experience in web development and deep knowledge in Python, HTML and JavaScript.</p>
                </div>
                <div className="px-10 md:px-20">
                    <br />
                    <h3 id='contact' className="text-xl font-bold">Contact</h3>
                    <a className="text-xl hover:text-blue-600" href="mailto:dguevaraorduna@gmail.com">dguevaraorduna@gmail.com</a>
                    <p>834 180 2619</p>
                </div>
            </div>
            <img className="hidden md:block object-cover w-2/5 h-screen rounded-lg"
                src="/yo.jpeg"
                alt="Diego Guevara Orduña"
            />
        </section>
        <hr className="border-gray-400 mx-44" />
        <section className="px-20 mt-10">
            <h4 id='experience' className="mb-8 text-3xl font-bold text-center md:text-left">Experience</h4>
            <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                    <h5 className="text-xl md:text-2xl font-bold">Web Developer</h5>
                    <h6 className="text-lg font-bold">High Technologies Analytics</h6>
                    <p>Dec 2022 - present</p>
                </div>
                <div className="flex flex-col col-span-4">
                    <p>Currently working on the development and maintenance of the iTool 2.0
                        platform, which has 21,000 stores where evaluations are carried out daily.
                        Making use of Python, JavaScript, Bootstrap, and cartography frameworks.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                    <h5 className="text-xl md:text-2xl  font-bold">Database Analyst,</h5>
                    <h6 className="text-lg font-bold">Cinvestav Unidad Tamaulipas</h6>
                    <p>May 2022 - Sep 2022</p>
                </div>
                <div className="flex flex-col col-span-4">
                    <p>Data extraction for creating a graph database, report generation, and
                        implementing machine learning algorithms to extract relevant information.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                    <h5 className="text-xl md:text-2xl  font-bold">Software Developer</h5>
                    <h6 className="text-lg font-bold">Subsecretaría de Innovación y Tecnologías de la Información</h6>
                    <p>Sep 2019 - Dec 2019</p>
                </div>
                <div className="flex flex-col col-span-4">
                    <p>Implementation and documentation of the Single Administration and Finance
                        System performing Web service and database migration as well as
                        maintenance of computer equipment.</p>
                </div>
            </div>
        </section>
        <hr className="border-gray-400 mx-44" />
        <section className="px-20 mt-10">
            <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Education</h4>
            <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                    <h5 className="text-xl md:text-2xl  font-bold">Information Technology Engineering</h5>
                    <h6 className="text-lg font-bold">Universidad Politécnica de Victoria</h6>
                    <p>2018 - 2022</p>
                </div>
                <div className="flex flex-col col-span-4 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                        adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                        laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                        voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                        harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
                </div>
            </div>
        </section>
        <div className="h-80">
        </div>
        <footer className="absolute w-full h-36 bottom-0 p-8 px-16 bg-gray-800 text-gray-50">
            <p className="text-2xl">Thank you for checking out my curriculum vitae.</p>
            <br />
            <a className="text-lg" href="mailto:dguevaraorduna@gmail.com">dguevaraorduna@gmail.com</a>
        </footer>
      </div>
    </>
  );
}

export default Curriculum;