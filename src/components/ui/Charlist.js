import React from 'react'
import Search from './Search'
import CharacterGrid from '../characters/CharacterGrid'
const charlist = ({ setQuery,isLoading,items }) => {
  return (
    <div>
        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default charlist