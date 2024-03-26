/* eslint-disable react/prop-types */
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  );
}
function CustomButton(props) {
  function onClickHanlder() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHanlder}>Count {props.count}</button>;
}

export default App;
