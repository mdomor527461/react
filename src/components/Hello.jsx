import Fruit from "./Fruit";
function Hello({fruits}) {
  return (
    <div>
        <h1>Hello World</h1>
        <ul>
           {fruits.map((fruit => {
                return <Fruit key={fruit.name} name ={fruit.name} color={fruit.color} taste ={fruit.taste}/>
           }))}
        </ul>
    </div>
  );
}
export default Hello;
