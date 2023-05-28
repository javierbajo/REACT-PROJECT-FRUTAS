import React from 'react'

const Logout = ({setUser}) => {


    const handleLogout = () =>{
        setUser(null);
    }

    handleLogout()
  return (
    <h1>Hasta la vista baby</h1>
  )
}

export default Logout