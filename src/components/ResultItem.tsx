import Image from "next/image";

type ResultItemProps = {
  title: string;
  thumb: string;
  uri: string;
}

const ResultItem = ({title, thumb, uri} : ResultItemProps) => {
  return (
    <div>
      <a href={`https://www.discogs.com${uri}`} target="_blank">
        {thumb && <Image src={thumb} alt={title} width={150} height={150} />}
        <strong>{title}</strong>
      </a>
    </div>
  )
}

export default ResultItem;