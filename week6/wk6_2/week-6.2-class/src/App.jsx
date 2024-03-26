/* eslint-disable react/display-name */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* UseEffect
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [id, setId] = useState(null);
  function HandleId(presentId) {
    setId(presentId);
  }
  return (
    <div>
      <button onClick={() => HandleId(1)}>1</button>
      <button onClick={() => HandleId(2)}>2</button>
      <button onClick={() => HandleId(3)}>3</button>
      <button onClick={() => HandleId(4)}>4</button>
      <Todo id={id} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then((response) => {
        setTodo(response.data.todo);
      });
  }, [id]);
  return (
    <div>
      {todo.title && <h1>{todo.title}</h1>}
      {todo.description && <h2>{todo.description}</h2>}
    </div>
  );
}
export default App;
*/

/* useMemo 
import { useMemo, useState } from "react";

function App() {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);

  let asnwer = useMemo(() => {
    let ans = 0;
    console.log("hi");
    for (let i = 0; i <= num; i++) {
      ans = ans + i;
    }
    return ans;
  }, [num]);
  return (
    <div>
      <input
        type="Number"
        placeholder="number"
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <br />
      <h3>
        Sum from 1 to {num} is {asnwer}
      </h3>
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    </div>
  );
}
export default App;

*/
/* memo and useCallback
import { memo, useEffect, useState, useCallback } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100,
    });
  }, []);

  const calculateCryptoReturns = useCallback(
    function () {
      return exchange1Data.returns + exchange2Data.returns;
    },
    [exchange1Data, exchange2Data]
  );
  return (
    <div>
      <CryptoCalculator calculateCryptoReturns={calculateCryptoReturns} />
    </div>
  );
}

const CryptoCalculator = memo(function ({ calculateCryptoReturns }) {
  return <div>Your crypto returns are {calculateCryptoReturns()}</div>;
});
export default App;
*/

/* useRef*/
import { useEffect, useRef } from "react";

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10";
    }, 5000);
  }, []);

  const incomeTax = 20000;

  return (
    <div>
      hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}

export default App;
