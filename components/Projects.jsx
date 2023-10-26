import { FaReact, FaBootstrap } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss , BiLogoDjango, BiLogoPython } from "react-icons/bi";

export const Projects = [
    {
        name:"Proyecto 1",
        img: "/blog-app-project.png",
        description:"Esta es una prueba de descripción de proyecto",
        keywords:"react, nextjs, tailwind",
        technologies:[
            {
                name:"React",
                icon:<FaReact className="h-3 w-3" />
            },
            {
                name:"Nextjs",
                icon:<TbBrandNextjs className="h-3 w-3" />
            },
            {
                name:"Tailwind",
                icon:<BiLogoTailwindCss className="h-3 w-3" />
            },
        ],
        href:""
    },
    {
        name:"Proyecto 2",
        img: "/placeholder.jpg",
        description:"Esta es una prueba de descripción de proyecto 2",
        keywords:"django, python, bootstrap",
        technologies:[
            {
                name:"Django",
                icon:<BiLogoDjango className="h-3 w-3" />
            },
            {
                name:"Python",
                icon:<BiLogoPython className="h-3 w-3" />
            },
            {
                name:"Bootstrap",
                icon:<FaBootstrap className="h-3 w-3" />
            },
        ],
        href:""
    }
];