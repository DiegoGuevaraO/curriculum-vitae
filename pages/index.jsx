import Head from 'next/head';
import NavBar from '@/components/navigation/NavBar';
import Footer from '@/components/Footer';

const Curriculum = () => {
  return(
    <>
      <Head>
        <title>Diego Guevara Orduña</title>
      </Head>
      <div className="relative text-gray-800 bg-gray-50">
        <NavBar />
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
        <Footer />
      </div>
    </>
  );
}

export default Curriculum;