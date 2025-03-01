import { useState,memo} from "react";

const ChildComponent = memo((props) => {
    console.log("child component renders");
    return <h1>Hi My Name Is {props.name} . And I am From Child Component. </h1>
})
    

export default function Parent(){
    const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <ChildComponent name={"Omor Faruk"}/>
    </div>
  );
}