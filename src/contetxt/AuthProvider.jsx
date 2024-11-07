import React, {useState, useEffect, createContext} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStoarge'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear() 
    const [userData, setUserData] = useState(null)
    useEffect(() => {
      setLocalStorage()
      const {employees} = getLocalStorage()
      setUserData(employees)
    }, [])
    

  return (
    <div>
      {/* this value import become important in terms of two way binding */}
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
