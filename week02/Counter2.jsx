import { ______ } from "react"; 

const Counter2 = () => {
  const [number, ______] = useState(100); 
  return (
    <div className="componentWrap">
      <h1>Counter2 Component</h1>
      <div>
        <button onClick={() => _______(______ - 1)}>-</button> 
        <span style={{ margin: "0 10px" }}>{number}</span>
        <button onClick={() => setNumber(number + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter2;



/*
	useState
	setNumber
	setNumber, number
*/