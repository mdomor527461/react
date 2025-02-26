import FalseComponent from "./FalseComponent";
import TrueComponent from "./TrueComponent";

export default function ConditionalJsx() {
    const flag = true;

    return flag ? <TrueComponent /> : <FalseComponent />

}