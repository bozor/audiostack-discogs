import { useState } from "react";

type SearchProps = {
  search: (artist: string) => void;
}

const Search = ({search} : SearchProps) => {
  const [artist, setArtist] = useState('');

  return (
    <div>
      <input type="text" value={artist} onChange={(event) => setArtist(event.currentTarget.value)} />
      <button onClick={() => search(artist)}>search</button>
    </div>
  )
}

export default Search;