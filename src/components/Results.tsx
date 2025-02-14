import { Result } from "@/types/result";

import ResultItem from "./ResultItem";

type ResultsProps = {
  results: Result[] | null;
}

const Results = ({ results } : ResultsProps) => {
  if(results?.length === 0) return <div>no results found</div>

  return (
    <div>
      {
        results && results.map((result: Result) => (
          <ResultItem 
            key={result.uri as string} 
            title={result.title as string} 
            thumb={result.thumb as string} 
            uri={result.uri as string}
          />
        ))
      }
    </div>
  )
}

export default Results;