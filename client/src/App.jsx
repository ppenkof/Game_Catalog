import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Catalog from "./components/catalog/Catalog"
import Details from "./components/details/Details"
import GameCreate from "./components/game-create/GameCreate"
import Register from "./components/register/Register"
import Login from "./components/login/Login"
import Logout from "./components/logout/Logout"
import Edit from "./components/edit/Edit"
import UserContext from "./contexts/UserContext"
import { useContext } from "react"


function App() {
   // After second exerise way with formData without real state management
  // const [registeredUsers, setRegisteredUsers] = useState([]);

  // After second exerise way with formData without real state management
  // if(registeredUsers.some(user => user.email === email)){
  //   throw new Error('User with this email already exists');
  // }

  // setRegisteredUsers(state => [...state, {email, password}]);

  //automatically log in the user after registration

    // After second exerise way with formData without real state management
  // const user = registeredUsers.find(user => user.email === email && user.password === password);

  // if(!user){
  //   throw new Error('Invalid email or password');
  // }
  const {user} = useContext(UserContext);
  
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/games" element = {<Catalog />} />
        <Route path="/games/:gameId/details" element = {<Details user={user}/>} />
        <Route path="/games/create" element = {<GameCreate />} />
        <Route path="/games/:gameId/edit" element = {<Edit />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/logout" element = {<Logout />} />
      </Routes>
      
      <Footer /> 

    </>
  )
}

export default App
