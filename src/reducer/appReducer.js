export const appRecuder=(state,action)=>{
    switch(action.type){
        case "NAME_UPDATE":
            return{
            ...state,
            name:action.payload
        }

        case "LOCATION_UPDATE":
            return{
            ...state,
            loc:action.payload
        }

        default:{
            return state
        }
    }
}