import { Route, Routes } from "react-router"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Catalog from "./components/catalog/Catalog"
import Details from "./components/details/Details"
import GameCreate from "./components/game-create/GameCreate"
import Register from "./components/register/Register"
import { useState } from "react"
import Login from "./components/login/Login"
import Logout from "./components/logout/Logout"
import Edit from "./components/edit/Edit"
import UserContext from "./contexts/UserContext"
import useFetch from "./hooks/useFetch"


function App() {
   // After second exerise way with formData without real state management
  // const [registeredUsers, setRegisteredUsers] = useState([]);
  const [user, setUser] = useState(null);
  const {request} = useFetch();

  const registerHandler = async (email, password)=>{
     // After second exerise way with formData without real state management
    // if(registeredUsers.some(user => user.email === email)){
    //   throw new Error('User with this email already exists');
    // }

    // setRegisteredUsers(state => [...state, {email, password}]);

    //automatically log in the user after registration
    const newUser = {email, password};

    const result = await request('/users/register', 'POST', newUser);
    setUser(result);
  }

  const loginHandler = async (email, password)=>{
     // After second exerise way with formData without real state management
    // const user = registeredUsers.find(user => user.email === email && user.password === password);

    // if(!user){
    //   throw new Error('Invalid email or password');
    // }

    const result = await request('/users/login', 'POST', {email, password});
    console.log(result);

   setUser({
      result
    });
  };

  const logoutHandler = ()=>{
    setUser(null);
  };

  const userContextValue = {
    user,
    isAuthenticated: !!user?.accessToken,
    registerHandler,
    loginHandler,
    logoutHandler
  };
  
  return (
    <UserContext.Provider value = {userContextValue}>
      <Header user={user} />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/games" element = {<Catalog />} />
        <Route path="/games/:gameId/details" element = {<Details user={user}/>} />
        <Route path="/games/create" element = {<GameCreate />} />
        <Route path="/games/:gameId/edit" element = {<Edit />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/logout" element = {<Logout onLogout={logoutHandler}/>} />
      </Routes>
      
      <Footer /> 

    </UserContext.Provider>
  )
}

export default App
