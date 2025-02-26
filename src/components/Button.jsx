import { useState } from "react";
function Button(props) {
  const [value,setValue] = useState(0);
  const [changeBy,setChangeBy] = useState(1);
  return <div>
    <h1>Your Value is : {value} </h1>
    <h1>Now your value is changing by :{changeBy} </h1>
    <button style={{backgroundColor : props.color}} onClick={() => setValue(value+changeBy)}>Increment</button>
    <button style={{backgroundColor : props.color,margin:"20px"}} onClick={() => setValue(value-changeBy)}>Decrement</button>
    <div>
    <button style={{backgroundColor : props.color}} onClick={() => setChangeBy(changeBy+1)}>Increase Changing Value</button>
    <button style={{backgroundColor : props.color,margin:"20px"}} onClick={() => setChangeBy(changeBy - 1)}>Decrease Changing Value</button>
    </div>
  </div>;
}
export default Button;
