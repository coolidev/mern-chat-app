import axios from 'axios'
import { useContext, useState } from 'react'
import { UserContext } from './UserContext'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('register')
  const { setUsername: setLoggedInUserName, setId } = useContext(UserContext)
  async function handleSubmit(e) {
    e.preventDefault()
    const url = isLoginOrRegister === 'register' ? 'register' : 'login'
    const { data } = await axios.post(url, { username, password })
    setLoggedInUserName(username)
    setId(data.id)
  }
  return (
    <div className="bg-blue-100 h-screen flex items-center">
      <form className="w-64 mx-auto mb-20" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className="block w-full rounded-sm p-2 border border-gray-400"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="block w-full rounded-sm p-2 my-2 border border-gray-400"
        />
        <button className="bg-blue-500 text-white block w-full rounded-md p-2 hover:bg-blue-600 transition-all">
          {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
        </button>
        <div className="text-center mt-2">
          {isLoginOrRegister === 'register' && (
            <div>
              Already a member?
              <button onClick={() => setIsLoginOrRegister('login')}>
                Login here
              </button>
            </div>
          )}
          {isLoginOrRegister === 'login' && (
            <div>
              Dont have an account?
              <button onClick={() => setIsLoginOrRegister('register')}>
                Register
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
