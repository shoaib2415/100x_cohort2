/* eslint-disable react/prop-types */
/* Routing
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
const Landing = lazy(() => import("../components/Landing"));
const Dashboard = lazy(() => import("../components/Dashboard"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense useFallback={"loading.."}>
                <Landing></Landing>
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense useFallback={"loadding.."}>
                <Dashboard></Dashboard>
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      hii there
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        landing
      </button>
      <br></br>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        dashboard
      </button>
    </div>
  );
}

*/

import { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}
function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}
function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease </button>
    </div>
  );
}
export default App;
