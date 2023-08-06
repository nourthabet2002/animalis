import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3OGkmb4MvxHqGJcR9p3TBh8vZ-KmXZi04w&usqp=CAU" alt="" srcset="" />
        <div className='form'>
        <label>email</label>
         <input type="text" name="email" id="" />
         <label>password</label>
         <input type="number" name="password" id="" />
         <button>submit</button>
         <button>forget my password</button>
         </div>
    </div>
  )
}

export default Login
