import { useEffect, useState } from 'react';
import './App.css';

import Button from './components/Button'
import CharecterGrid from './containers/CharecterGrid';

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
      <CharecterGrid />
    </div>
  );
}

export default StoreApp;
