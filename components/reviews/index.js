import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReviewCard from '../../uikit/review-card'
import Button from '../../uikit/button'
import PaginationItem from "../../uikit/pagination";



const Reviews = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch('https://api.digital-investor.kz/api/get-reviews', {
      method: 'GET'
    }).then(res => res.json())
      .then(({ data }) => setReviews(data))
  }, []);

  return (
    <div className='container'>
      <div className='review__header'>
        <p className='review__page_heading'>Отзывы</p>
        <Button onClick={e => {
          e.preventDefault();
          document.querySelector('#reviewmodal').style.display = "block";
        }} color='submit' children='Добавить отзыв' />
      </div>
      {reviews && (new Array(Math.ceil(reviews.length / 3))).fill(0).map((_, i) => {
        return (
          <div key={uuidv4()} className='reviews'>
            {reviews.slice(i * 3, (i + 1) * 3).map(review => {
              return <ReviewCard key={uuidv4()} name={review.user_name}
                review={review.review}
                date={review.date}
              />
            })}
          </div>
        );
      })}
      <div>
        <PaginationItem />
      </div>
    </div>
  )
}

export default Reviews;