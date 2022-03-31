import React from 'react'
import { useParams } from 'react-router-dom';
function Login() {
    let { type } = useParams();
  return (
    <div>
        This is {type}
    </div>
  )
}

export default Login
