import { useState } from "react";

import styles from './Search.module.css';

type SearchProps = {
  search: (artist: string) => void;
}

const Search = ({search} : SearchProps) => {
  const [artist, setArtist] = useState('');

  return (
    <div className={styles.wrap}>
      <input className={styles.input} placeholder="Search for an artist..." type="text" value={artist} onChange={(event) => setArtist(event.currentTarget.value)} />
      <button className={styles.button} onClick={() => search(artist)}>search</button>
    </div>
  )
}

export default Search;