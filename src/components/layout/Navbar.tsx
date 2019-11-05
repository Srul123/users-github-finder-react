import React  from 'react';

export interface NavbarProps {
    title: string,
    icon: string
}

export const Navbar = (props: NavbarProps) => {


    return (
      <nav className='navbar bg-primary'>
         <h1>
            <i className={props.icon}></i>
            {props.title}
         </h1>
      </nav>
    )
}


Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};
