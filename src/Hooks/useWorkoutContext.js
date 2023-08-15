import { useContext } from "react";
import { InvokeContext } from "../Context/Mycontext";

export const UseContextFunction =()=>{
const myrumor = useContext(InvokeContext)
if(!myrumor){
    throw Error("use context must be used inside a provider")
}

return myrumor

}