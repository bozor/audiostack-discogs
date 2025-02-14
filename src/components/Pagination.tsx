import { ChangeEvent, Dispatch, SetStateAction } from "react";

type PaginationProps = {
  page: number;
  pages: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({page, pages, setPage}: PaginationProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPage(parseInt(event.target.value, 10));
  }

  if(pages === 1) return null;

  return (
    <div>
      <select defaultValue={page} onChange={handleOnChange}>
        {Array.from({length: pages}, (_, i) => i + 1).map((item, index) => <option key={index}>{item}</option>)}
      </select>
    </div>
  )
}

export default Pagination;