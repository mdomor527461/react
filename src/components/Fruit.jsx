export default function Fruit(props){
    return <>{props.name == "Apple" && <li>{props.name} {props.color} {props.taste}</li> }</>
} 