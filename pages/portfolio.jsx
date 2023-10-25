import { useState } from "react";
import Head from "next/head";
import NavBar from "@/components/navigation/NavBar";
import Skeleton from "@/components/Skeleton";
import { Projects } from "@/components/Projects";

const Portfolio = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    return(
        <>
            <Head>
                <title>Diego Guevara - Portfolio</title>
            </Head>
            <NavBar />
            <div className="md:container md:mx-auto">
                <div className="mb-5">
                    <label htmlFor="search" className="m-auto">
                        <input 
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Search keywords, technologies..."
                            className="bg-transparent mr-3 px-2 h-5"
                        />
                    </label>
                </div>
                <hr className="border-gray-400 mx-44 mb-5" />
                {
                    isLoading ?
                    <Skeleton /> : 
                    Projects.map((project,key) => {
                        return(
                            <div key={key} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                                <div className="bg-white rounded-lg border p-4">
                                    <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                                    <div className="px-1 py-4">
                                    <div className="font-bold text-xl mb-2">{project.name}</div>
                                    <p className="text-gray-700 text-base">
                                        {project.description}
                                    </p>
                                    </div>
                                    <div className="px-1 py-4">
                                    <a href="#" className="text-blue-500 hover:underline">Read More</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
             </div>
        </>
    );
}

export default Portfolio;