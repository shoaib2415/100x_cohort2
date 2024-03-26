/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { countAtom, evenselector } from "../store/atoms/count";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <Result />
    </div>
  );
}
function Result() {
  const isEven = useRecoilValue(evenselector);
  return <div>{isEven ? "It is even" : null}</div>;
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}
function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease{" "}
      </button>
    </div>
  );
}
export default App;
