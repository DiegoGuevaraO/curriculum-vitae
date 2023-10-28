import { FaReact, FaBootstrap } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss , BiLogoDjango, BiLogoPython } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

export const Projects = [
    {
        name:"Blog Page",
        img: "/blog-app-project.png",
        description:"Simple blog with two entries added dynamically including routes.",
        keywords:"react, nextjs, tailwind",
        technologies:[
            {
                name:"React",
                icon:<FaReact className="h-3 w-3" />
            },
            {
                name:"Nextjs 13",
                icon:<TbBrandNextjs className="h-3 w-3" />
            },
            {
                name:"Tailwind",
                icon:<BiLogoTailwindCss className="h-3 w-3" />
            },
        ],
        href:"https://nextjs-tutorial-ten-sigma.vercel.app/"
    },
    {
        name:"Django Web Map",
        img: "/web-map.png",
        description:"Map where you can add and name markers that are stored in a database.",
        keywords:"django, python, bootstrap, mysql",
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
            {
                name:"MySQL",
                icon:<SiMysql className="h-3 w-3" />
            },
        ],
        href:"https://github.com/DiegoGuevaraO/web-map"
    },
    {
        name:"Curriculum Vitae",
        img: "/cv.png",
        description:"Of course there's also this project. Dynamic NavBar using Next's App Router",
        keywords:"react, nextjs, tailwind",
        technologies:[
            {
                name:"React",
                icon:<FaReact className="h-3 w-3" />
            },
            {
                name:"Nextjs 13",
                icon:<TbBrandNextjs className="h-3 w-3" />
            },
            {
                name:"Tailwind",
                icon:<BiLogoTailwindCss className="h-3 w-3" />
            },
        ],
        href:"/"
    }
];