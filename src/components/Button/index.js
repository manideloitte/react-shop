import PropTypes from 'prop-types';
import { useEffect } from 'react';


const Button = ({ name, title, onClick, myObj, count, ...restProps }) => {

    useEffect(() => {
        console.log("Mount Button");
        return () => {
            // cleanup
            console.log("Button unmounted");
          }
      }, []);

    useEffect(() => {
        console.log("Use effect from button")

        return () => {
            // cleanup
            console.log("Button unmounted count");
          }
      }, [count]);

    return <button onClick={onClick} {...restProps}>{name} {title}</button>;
}

Button.defaultProps = {
    onClick: () => {
        console.log("Im a default prop")
    }
}

Button.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string.isRequired,
    myObj: PropTypes.shape({
        propOne: PropTypes.string,
        propTwo: PropTypes.number
    })
}

export default Button;