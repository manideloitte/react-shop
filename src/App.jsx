import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Button from './components/Button'
import 'tw-elements';
import CharecterGrid from './containers/CharecterGrid';
import CharDetails from './containers/CharecterDetails';
import LabelsContext from './contexts/LabelsContext';
import Nav from './components/Nav';
import ThemeContext, { ThemeContextProvider } from './contexts/ThemeContext';

const StoreApp = () => {
  const [count, setCounter] = useState(0);
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState("Add");

  useEffect(() => {
    console.log("Mount App");

  }, [])

  useEffect(() => {
    console.log("Use effect")
  }, [count]);

  return (
    <div id="app" className="App">
      {/* <span>Cart Items: {count}</span>
      {showAdd && <Button a="b" b="c" aria-label="Hey I support ADA" id="test-button" name={name} count={count} onClick={() => { 
        if (count < 10) {
          setCounter(count+1)
        }
      }}/>}
      
      <a onClick={() => { setShowAdd(!showAdd) }}>toggle Button</a> */}
      <ThemeContextProvider>
        <LabelsContext.Provider value={{
          addtoBag: "Add to Bag"
        }}>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route
                path="/"
                element={<CharecterGrid />}
              />;
              <Route
                path="/charecter/:charId"
                element={<CharDetails />}
              />;
            </Routes>
          </BrowserRouter>
        </LabelsContext.Provider>
        </ThemeContextProvider>
    </div>
  );
}

export default StoreApp;
