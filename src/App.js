import './App.css';
import axios from 'axios'
import Header from '../src/components/ui/Header'
// import Search from './components/ui/Search';
import Navbar from './components/ui/Navbar';
// import CharacterGrid from './components/characters/CharacterGrid';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/ui/Home';
import Charlist from './components/ui/Charlist';



const  App = () => {
 
  const [items,setItems] = useState([])
  const [isLoading,setisLoading] = useState(true)
  const [query,setQuery]= useState('')

  useEffect(() => {
    const fetchItems = async() => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      // console.log(result.data)
      setItems(result.data)
      setisLoading(false)

    }
    fetchItems()
  },[query])

  return (
    <div className="Container">
    <Router>
      <Navbar />
      <Header />
      {/* <Home/> */}
      <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/char' element={<Charlist items={items} isLoading={isLoading} setQuery={setQuery}/>} />
      </Routes>
      
      {/* <Search getQuery={(q) => setQuery(q)} /> */}
    </Router>
    </div>
  );
}

export default App;
