import {createContext, useContext, useReducer } from 'react'

const UserContext = createContext()
export const useData =()=>{
  return useContext(UserContext)
}

const User_Context = ({children}) => {
  const initial_state = {
    fullName: "",
    email: "",
    userName: "",
    password: "",
    userStatus: true,
    error: "",
    isDisabled: true
  }

const reducer =(state,action)=> {
  console.log(state)
  switch (action.type) {
    case "FORM": {
      return {
        ...state,
        [action.userData]: action.payload,
        userStatus: false,
        isDisabled: true,
      }
    }
    case "SIGNUP": {
      return {
        ...state,
        userStatus: false,
        isDisabled: false,
        error: ""
      }
    }
    case "SUCCESS": {
      return {
        ...state,
        userStatus: true,
        fullName: "",  
        email: "",
        userName: "",
        password: "",
        error: "",
        isDisabled: true,

      }
    }
    case "ERROR": {
      return {
        ...state,
        userStatus: false,
        error: "Please fill all fields",
        isDisabled: true,
      }
    }
    case "LOGIN": {  
      if (!state.email || !state.password) {
        return {
          ...state,
          error: "Email and Password are required!",
         isDisabled: true,
          
        };
      }
      return {
        ...state,
        userStatus: true,
        email: "",
        password: "",
        error: "",
        isDisabled: true,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        userStatus: false,
        isDisabled: true,
      }
    }
    default:
      return state
  }
  
}
  const [state,dispatch] = useReducer(reducer, initial_state)
  return (
    <UserContext.Provider value={{state,dispatch}}>
      {children}
    </UserContext.Provider>
  )
}

export default User_Context
