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
        path:'https://www.linkedin.com/in/chndrwali/',
        name: <RiLinkedinFill />
    },
    {
        path:'https://github.com/chndrwali',
        name: <RiGithubFill />
    },
    {
        path:'https://www.instagram.com/chndrwali/',
        name: <RiInstagramFill />
    },
    {
        path:'https://web.facebook.com/chandra.w.sanjaya.5',
        name: <RiFacebookFill />
    },
    {
        path:'https://twitter.com/chndrwali',
        name: <RiTwitterXFill />
    },
]

const Socials = ({containerStyles ,iconsStyles}) => {
    return ( 
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return <Link key={index} href={icon.path} target="_blank"
                aria-label="Sosmed Candra Wali Sanjaya">
                <div className={`${iconsStyles}`}>{icon.name}</div>
                </Link>
            })}
        </div>
     );
}
 
export default Socials;