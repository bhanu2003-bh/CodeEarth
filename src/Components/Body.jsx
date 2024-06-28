import "./Body.css";
import Left from "./Left";
import Right from "./Right";
export default function Body() {
  return (
    <div className="Body">
      <div className="left">
        <Left>1</Left>
      </div>
      <div className="middle"></div>
      <div className="right">
        <Right>3</Right>
      </div>
    </div>
  );
}
