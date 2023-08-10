import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Sectin1 from './Sectin1';
import Cards from './Cards';
import Footer from './Footer';
import Login from './Login';
import { useState } from 'react';
import Addmodal from './Addmodal';


const App = () => {
 
  const anim =[
    {
      imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOSFRcswXAz9xErOtYnvQqCNCj2oVhUvYQQ&usqp=CAU",
      descripition:"protéine de haute qualité",
      prix:"15£"
  },
  {
      imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodwWPCWivgI8xkB4GnUCgn-ubSu-dxLszmQ&usqp=CAU",
      descripition:"aliments chats adultes 3kg",
      prix:"9£"
  },
  {
      imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRjGhjLIlIGqLZcVonurwxeW4BiW4T6xguQ&usqp=CAU",
      descripition:"Nouritture pour chat adultes au poul",
      prix:"10£"
  }, {
      imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5JtYJUL7D9PKKTGMChtQecGog34hKIou6Hg&usqp=CAU",
      descripition:"protéine de haute qualité",
      prix:"15£"
  },
]
  const [newproduct, setnewproduct] = useState({
  imgsrc:"",
  descripition:"",
  prix:""


  })
  const add=()=>{setnewproduct([...anim,newproduct])}
  const [openmodal, setopenmodal] = useState(false)
  return (
    <div className="App">
      {openmodal?<Addmodal add={add} newproduct={newproduct} setnewproduct={setnewproduct}  />:null}
    <Navbar setopenmodal={setopenmodal} openmodal={openmodal}  />
    <Sectin1 />
    <Cards anim={anim}/>
    <Footer/>
    <Login />
      
    </div>
  );
}

export default App;
