import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import ThemeContext from '../../contexts/ThemeContext';


const Button = ({ name, title, onClick, myObj, count, ...restProps }) => {

    const themeContext = useContext(ThemeContext);

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

    return <div className="flex space-x-2 justify-center">
    <button type="button" onClick={(e) => {
        // themeContext.setCurrentTheme('light');
        // themeContext.setCartData({
        //     lastUpdated: new Date().getTime()
        // });
        onClick(e);
    }} className={clsx(`inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`, {
        'bg-black hover:bg-gray-700 focus:bg-gray-700 active:bg-blue-800' : themeContext.currentTheme === 'dark',
        'bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-800' : themeContext.currentTheme !== 'dark'
    })}>{title}</button>
  </div>;
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