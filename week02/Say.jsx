import { ______ } from "react";

const Say = () => {
  const [______, setMessage] = useState("기본값");
  const [color, ______] = useState("black");

  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => ______("안녕히 가세요!");

  return (
    <div className="componentWrap">
      <h1>Say Component</h1>
      <button onClick={______}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ ______ }}>{message}</h1>
      <div>
        <button style={{ color: "red" }} ______={() => setColor("red")}>
          빨간색
        </button>
        <button style={{ color: "green" }} onClick={() => ______("green")}>
          초록색
        </button>
        <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
          파란색
        </button>
      </div>
    </div>
  );
};

export default Say;



/*
	useState
	message
	setColor
	setMessage
	onClickEnter
	color**
	onClick
	setColor
*/