import { useState } from "react";
import Link from "../Link/Link";
import { BsMenuButtonWideFill, } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';


const NavBar = () => {
    const[open,setOpen] =useState(false)


    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '*', name: 'NotFound' }
      ];
      


    return (

        
        <nav>
           <div  className=" md:hidden text-3xl" onClick={() => setOpen(!open)}>
            {
                open === true ?
                 <AiFillCloseCircle></AiFillCloseCircle>
                 : <BsMenuButtonWideFill></BsMenuButtonWideFill>
            }
           
           </div>
            <ul className=" md:flex  ">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default NavBar;