import React, { useState, useEffect } from 'react'
import firebase from '../CONFIG/firebase'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const test = firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
    return () => {
      test()
    }
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