import { imageURL } from "../../utils/fetchDataAPI";
import { dateFormatter } from "../../utils/dateFormatter";

const MovieReviews = ({reviews, TruncateReview}) => {
  const sortedReviewByRating = reviews.sort((a,b) => b.author_details.rating - a.author_details.rating)
  const slicedReviews = sortedReviewByRating.slice(0,4)

  return (
    slicedReviews.map(slicedReview => (
    <div key={slicedReview.id} className="reviews-container rounded border p-3 mb-3">
      <div className="review-data d-flex align-items-center">
        <img className="reviewer-pic rounded-circle me-2" src={slicedReview.author_details.avatar_path ? `${imageURL}${slicedReview.author_details.avatar_path}` : "/profile-pic.png"} alt={slicedReview.author} />
        <div className="reviewer-data">
          <h4 className="mb-0">A review by {slicedReview.author}</h4>
          <p className="fw-light mb-0"><span className="badge bg-dark me-2">⭐{slicedReview.author_details.rating ? slicedReview.author_details.rating.toFixed(1) : '0'}</span>Written by <span className="reviewer-username fw-normal">{slicedReview.author_details.username}</span> on {dateFormatter(slicedReview.created_at)}</p>
        </div>
      </div>
      <hr />
      <div className="review-content border-danger mt-3 fw-lighter text-break">
        {TruncateReview(slicedReview.content, 200)}
      </div>
    </div>
    ))
  )
}

export default MovieReviews;