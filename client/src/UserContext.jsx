import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

import PropTypes from 'prop-types'
import axios from 'axios'

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState(null)
  const [id, setId] = useState(null)
  useEffect(() => {
    axios.get('/profile').then((response) => {
      setId(response.data.userId)
      setUsername(response.data.username)
    })
  }, [])
  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  )
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
