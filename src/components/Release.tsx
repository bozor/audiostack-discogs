import Image from "next/image";

import styles from './Release.module.css';

type ReleaseProps = {
  have: number;
  want: number;
  artist: string;
  genres: string[];
  title: string;
  year: string;
  image: {
    uri: string;
    width: number;
    height: number;
  } | null;
}

const Release = ({have, want, artist, genres, title, year, image} : ReleaseProps) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.info}>
        <h1>{title} - {artist}</h1>
        <ul>
          {genres && <li><strong>Genres:</strong> {genres.map((genre, index) => <span key={index}>{genre}</span>)}</li>}
          <li><strong>Year:</strong> {year}</li>
          <li><strong>Have:</strong> {have}</li>
          <li><strong>Want:</strong> {want}</li>
        </ul>
      </div>

      {image && <div className={styles.image}><Image src={image.uri} width={image.width} height={image.height} alt={title} /></div>}
    </div>
  )
}

export default Release;