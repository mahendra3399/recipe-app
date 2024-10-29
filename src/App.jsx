import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Sidebar from "./components/sidebar.jsx"
import FavoritesPage from "./pages/FavoritesPage.jsx"

function App() {

  return (
    <>
       <div className="flex">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/favorites" element={<FavoritesPage></FavoritesPage>}></Route>
          </Routes>
       </div>
    </>
  )
}

export default App
