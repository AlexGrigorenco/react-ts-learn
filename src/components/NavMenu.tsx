


import { Link, NavLink } from "react-router-dom";

const NavMenu = () => {

  

  return ( 

    
      <div className="px-10 py-10 flex justify-between flex-wrap gap-6 items-center nav-menu bg-blue-200">
        <Link className="px-2 py-1 bg-blue-200 rounded text-2xl hover:bg-blue-400" to='/'>Home</Link>
        <div className="pr-10 flex flex-grow justify-around flex-wrap gap-3 max-w-[50%]">
          <NavLink className={({isActive}) => isActive ? 'active-menu-link hover:font-bold ml-2' : 'hover:font-bold ml-2'} to='/about'>About</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active-menu-link hover:font-bold ml-2' : 'hover:font-bold ml-2'} to="men's clothing">{'Men\'s\u00A0clothing'}</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active-menu-link hover:font-bold ml-2' : 'hover:font-bold ml-2'} to="women's clothing">{'Women\'s\u00A0clothing'}</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active-menu-link hover:font-bold ml-2' : 'hover:font-bold ml-2'} to='/jewelery'>jewelery</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active-menu-link hover:font-bold ml-2' : 'hover:font-bold ml-2'} to='/electronics'>electronics</NavLink>
          
        </div>
      </div>
    

   );
}
 
export default NavMenu;