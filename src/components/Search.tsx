'use client'
import { useState } from 'react';

import { search } from '@/app/actions';

const Search = () => {
  const [artist, setArtist] = useState('');
  const handleClick = async () => {
    const result = await search(artist);

    console.log(result)
  }
  return (
    <div>
      <input type="text" value={artist} onChange={(event) => setArtist(event.currentTarget.value)} />
      <button onClick={handleClick}>search</button>
    </div>
  )
}

export default Search;