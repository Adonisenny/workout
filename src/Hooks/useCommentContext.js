import { CommentsContext } from "../Context/commentContext";
import { useContext } from "react";




export const useCommentContext = () => {
    const mycontext = useContext(CommentsContext)

if(!mycontext){
    throw Error('use commentContext must be used ith right state')
}


    return mycontext
}