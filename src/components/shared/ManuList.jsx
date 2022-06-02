import MenuItem from "./MenuItem"
import PropTypes from 'prop-types';





const ManuList = ({ item }) => {

    return (
        <div>
            <p className="text-gray-400 m-3 mt-4 uppercase">
                {item.title}
            </p>
            {item.links.map((link) => (
                <MenuItem key={link.name} link={link}/>
            ))}
        </div>
    )
}

ManuList.propTypes = {
    item: PropTypes.object.isRequired,
}
export default ManuList