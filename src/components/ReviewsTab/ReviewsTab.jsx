import React, { useState, useRef } from "react";
import Stars2 from "../Stars2";
import Review from "../Review";
import Modal from "../Modal";
import ReviewArena from "../ReviewArena";
import Spinner from "../Spinner";
import Pagination from "../Pagination";
import "./ReviewsTab.css";

export default function ReviewsTab({
  rating,
  ratingCount,
  reviewCount,
  reviews,
  canReview,
  reviewHandler,
  reviewsPage,
  getReviews,
  loading
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const reviewsRef = useRef(null);

  const submitReview = review => {
    setModalOpen(false);
    reviewHandler(review);
  };

  return (
    <div className="ReviewsTab--container">
      <Modal
        isOpen={modalOpen}
        closeHandler={() => setModalOpen(false)}
        overflow="auto"
      >
        <ReviewArena submitReview={submitReview} />
      </Modal>
      <h3
        className="fnt-subtitle1 fgc-black ArenaPage--categoryHeader"
        ref={reviewsRef}
      >
        Reviews
      </h3>
      <div className="ReviewsTab--top">
        <div>
          <Stars2 rating={rating} className="bgc-lightOrange" star />
          <p className="fnt-subtitle4 fgc-black">
            {`${ratingCount} ratings and ${reviewCount} reviews`}
          </p>
        </div>
        {canReview && (
          <>
            <p className="fnt-subtitle2 fgc-black">
              Would you like to share your review about this arena?
            </p>
            <button
              type="button"
              className="btn btn2 fnt-button2 bgc-white brdc-lightOrange fgc-lightOrange"
              onClick={() => setModalOpen(true)}
            >
              RATE US
            </button>
          </>
        )}
      </div>
      {loading ? (
        <div className="ReviewsTab--spinner">
          <Spinner />
        </div>
      ) : (
        reviewCount !== 0 && (
          <>
            <p className="fnt-subtitle2 fgc-black ReviewsTab--allReviews">
              All reviews
            </p>
            {reviews.map(({ reviewer, rating, body, reply }, index) => (
              <Review
                key={index}
                reviewer={reviewer}
                rating={rating}
                body={body}
                reply={reply}
              />
            ))}
          </>
        )
      )}

      {reviewCount !== 0 && (
        <Pagination
          currentPage={reviewsPage}
          totalItems={reviewCount}
          itemsPerPage={5}
          numOfShownPages={5}
          pageHandler={page => {
            reviewsRef.current.scrollIntoView({ behavior: "smooth" });
            getReviews(page);
          }}
        />
      )}
    </div>
  );
}
