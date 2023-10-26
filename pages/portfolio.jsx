import { useState } from "react";
import Head from "next/head";
import NavBar from "@/components/navigation/NavBar";
import Skeleton from "@/components/Skeleton";
import { Projects } from "@/components/Projects";
import { FaSearch } from 'react-icons/fa';

const Portfolio = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSearch = () => {
        const filteredData = Projects.filter((keyword) => {
            return Object.values(keyword)
              .join("")
              .toLowerCase()
              .includes(searchInput.toLowerCase());
        });
        
        setFilteredResults(filteredData);
    }

    return(
        <>
            <Head>
                <title>Diego Guevara - Portfolio</title>
            </Head>
            <NavBar />
            <div className="">
                <div className="flex items-center border-b-2 py-2 mb-5">
                    <label htmlFor="search" className="m-auto">
                        <input 
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Search keywords"
                            onChange={handleChange}
                            value={searchInput}
                            className="bg-transparent mr-3 px-2 h-10 w-auto"
                        />
                    </label>
                    <button onClick={handleSearch} className="right-0 top-0 mt-3 mr-4">
                        <FaSearch className="h-4 w-4 fill-current" />
                    </button>
                </div>
                <div className="flex items-center justify-center lg:h-screen">
                    <div className="container mx-auto p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                            {
                                Projects.map((project,key) => {
                                    return(
                                        <div key={key} className="bg-white rounded-lg border p-4">
                                            <img src={project.img} alt={project.name} className="w-full h-48 rounded-md object-cover" />
                                            <div className="px-1 py-4">
                                                <div className="font-bold text-xl mb-2">
                                                    {project.name}
                                                </div>
                                                <p className="text-gray-700 text-base">
                                                    {project.description}
                                                </p>
                                            </div>
                                            <div className="mt-4 flex flex-wrap items-center gap-5 max-w-fit">
                                                {project.technologies.map((tech,techKey) => {
                                                        return(
                                                            <div key={techKey} className="flex items-center gap-1">
                                                                {tech.icon}
                                                                <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
                                                                    {tech.name}
                                                                </p>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                            <div className="px-1 py-4">
                                                <a href={project.href} className="text-blue-700 hover:underline">Read More</a>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;