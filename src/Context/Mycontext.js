import { useReducer,createContext} from "react";


export const InvokeContext = createContext()

export const myFreducer =(state,action) => {
    switch(action.type){
        case 'SET_RUMORS':
        return{
            rumors:action.payload
        }
        case 'CREATE_RUMORS':
            return{
                rumors:[action.payload, state.rumors]
            }
            case 'DELETE_RUMORS':
                return{
                    rumors:state.rumors.filter(w=>w._id !== action.payload._id )
                }

             
                // case "LOGOUT":
                //     return{
                //         user:null,
                //         loading:false,
                //         error:null
                //     };
               
                 

            default:
                return state
                
    }
}

export const MyfirstContext= ({children}) => {
const [state,dispatch] = useReducer(myFreducer, {
    rumors:null
})


    return(
        <InvokeContext.Provider value={{...state,dispatch}}>{children}</InvokeContext.Provider>
    )

}