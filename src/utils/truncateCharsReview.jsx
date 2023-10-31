import { useState } from "react";

export const TruncateReview = (text, maxChars) => {
  const [truncateChars, setTruncateChars] = useState(true)

  const handleClickShowMore = () => {
    setTruncateChars(!truncateChars)
  }


  if (text.length <= maxChars) {
    return text;
  } else {
    return (
      <p>{truncateChars ? text.slice(0, maxChars) : text} <span className={truncateChars ? 'show-more text-info' : 'show-more text-secondary'} onClick={handleClickShowMore}>{truncateChars ? '...more' : 'show less'}</span></p>
    )
  }
}