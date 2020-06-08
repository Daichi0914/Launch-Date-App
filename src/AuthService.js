import React, { useState, useEffect } from 'react'
import firebase from './config/firebase'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
};

export {
  AuthContext,
  AuthProvider,
};