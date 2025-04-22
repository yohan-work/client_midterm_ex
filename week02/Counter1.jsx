const Counter1 = () => {
	let ______ = 0;
	return (
	  <div className="componentWrap">
		<h1>Counter1 Component</h1>
		<div>
		  <button
			______={() => {
			  number--;
			  alert(number);
			}}
		  >
			-
		  </button>
		  <span style={{ margin: "0 10px" }}>{______}</span>
		  <button
			onClick={() => {
			  ______++;
			  alert(number);
			}}
		  >
			+
		  </button>
		</div>
	  </div>
	);
  };
  
  export ______ Counter1;
  /*
  	number
	onClick
	number
	number
	default
  */