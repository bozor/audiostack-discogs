import Image from "next/image";
import Link from "next/link";

type ResultItemProps = {
  title: string;
  thumb: string;
  id: number;
}

const ResultItem = ({title, thumb, id} : ResultItemProps) => {
  return (
    <div>
      <Link href={`/release?id=${id}`}>
        {thumb && <Image src={thumb} alt={title} width={150} height={150} />}
        <strong>{title}</strong>
      </Link>
    </div>
  )
}

export default ResultItem;