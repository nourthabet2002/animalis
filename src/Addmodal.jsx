import React from 'react'

const Addmodal = ({setopenmodal,add,newproduct,setnewproduct}) => {
  return (
    <div className='add'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxz0KMIkLRbTCn0vrlIDhYVlwGDKhyFuQKYA&usqp=CAU"  />
        <div className='form'>
        <label>img</label>
        <input type="text"onChange={(e)=>setnewproduct({...newproduct,imgsrc:e.target.value})}  />
      <label>descripition</label>
      <input type="text"onChange={(e)=>setnewproduct({...newproduct,Descripition:e.target.value})}  /> 
      <label>prix</label>
      <input type="text"onChange={(e)=>setnewproduct({...newproduct,prix:e.target.value})}  />
      <button onClick={()=>add(newproduct)} >ADD</button>
      </div>
    </div>
  )
}

export default Addmodal
