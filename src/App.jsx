import './App.css'
import Main from './components/main/main';
import BgResidense from './components/bgResidense/BgResidense';
import Building1 from './components/bgResidense/builds/building1';
import Building2 from './components/bgResidense/builds/building2';
import Building3 from './components/bgResidense/builds/building3';
import TownHouse from './components/townhouse/TownHouse';
import Katlavan from './components/katlavan/Katlavan';
import Blocks from './components/blocks/Blocks';
import Login from './components/login/Login';
import Admin from './components/admin/Admin';
import {useRoutes } from 'react-router-dom'


function App() {

  const checkLogin = () => {
    const checkStorage = localStorage.getItem("id:") 
    return checkStorage
  }

  let element = useRoutes([
    {
      path:"/",
      element:<Main></Main>
    },
    {
      path:"/BG",
      element:<BgResidense/>
    },
    {
      path:"/BG/1",
      element:<Building1/>
    },
    {
      path:"/BG/2",
      element:<Building2/>
    },
    {
      path:"/BG/3",
      element:<Building3/>
    },
    {
      path:"/townHouses",
      element:<TownHouse/>
    },
    {
      path:"/katlavan",
      element:<Katlavan/>
    },
    {
      path:"/blocks",
      element:<Blocks/>
    },
    {
      path:"/Admin",
      element:checkLogin() === "77zn717" ? <Admin/> : <Login/>
    }
  ])

  return (
    <div>
      <section>{element}</section>
    </div>
  )
}

export default App
