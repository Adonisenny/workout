import { createContext, useReducer } from "react";

export const CommentsContext = createContext()

export const commentReducer =(state,action) => {
switch(action.type){
    case 'SET_COMMENTS':
        return {
            comments:action.payload
        }
    case'CREATE_COMMENTS':
        return{
            comments:[action.payload, ...state.comments]
        }
        case'DELETE_COMMENTS':
        return{
            comments:state?.comments.filter(c => c?._id !== action.payload?._id)
        }
        default:
            return state
}
}
export const CommentsContextProvider = ({children}) => {

const [state,dispatch2] =useReducer(commentReducer,{
comments:null
})

    return (
        <CommentsContext.Provider value={{...state,dispatch2}}>

        {children}

        </CommentsContext.Provider>
    )
}