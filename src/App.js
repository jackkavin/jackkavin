import './App.css';
import axios from 'axios'
import Header from '../src/components/ui/Header'
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';
import { useEffect, useState } from 'react';



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
       <Header />
       <Search getQuery={(q) => setQuery(q)} />
       <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
