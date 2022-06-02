import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"


const MenuItem = ({ link }) => {

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2 bg-blue-500';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
    
    return (
        <NavLink to={`/${link.name}`}
            key={link.name}
            onClick={() => {}}
            className={({isActive}) => 
                isActive ? activeLink : normalLink
            }>
            {link.icon}
            <span className="capitalize">{link.name}</span>
        </NavLink>
    )
}

MenuItem.propTypes = {
    link: PropTypes.object.isRequired,
}

export default MenuItem