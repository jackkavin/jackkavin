import React from 'react'

const CharacterItem = ( {item} ) => {
  
  return (
    <div className='card'>
        <div className='card-inner'>
            <div className='card-front'>
               <img src={item.img} alt='image' />
            </div>
            <div className='card-back'>
                <h1>{item.name}</h1>
                <ul>
                    <li><strong>Actor name:</strong> {item.name}</li>
                    <li><strong>Nick name:</strong> {item.nickname}</li>
                    <li><strong>Birth:</strong> {item.birthday}</li>
                    <li><strong>status:</strong> {item.status}</li>
                </ul>

            </div>

        </div>

    </div>
  )
}

export default CharacterItem