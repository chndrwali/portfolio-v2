'use client'

import {
    RiLinkedinFill,
    RiGithubFill,
    RiInstagramFill,
    RiFacebookFill,
    RiTwitterXFill
} from "react-icons/ri"

import Link from "next/link";

const icons = [
    {
        path:'/',
        name: <RiLinkedinFill />
    },
    {
        path:'/',
        name: <RiGithubFill />
    },
    {
        path:'/',
        name: <RiInstagramFill />
    },
    {
        path:'/',
        name: <RiFacebookFill />
    },
    {
        path:'/',
        name: <RiTwitterXFill />
    },
]

const Socials = ({containerStyles ,iconsStyles}) => {
    return ( 
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return <Link key={index} href={icon.path}>
                <div className={`${iconsStyles}`}>{icon.name}</div>
                </Link>
            })}
        </div>
     );
}
 
export default Socials;