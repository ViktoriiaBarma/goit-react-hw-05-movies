import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieReviews } from 'servises/api'
import {ReviewsList,ReviewItem, ReviewsAuthor, ReviewContent} from './Reviews.styled'


const Reviews = () => {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await getMovieReviews(`${movieId}`)
      setReviews(response);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };
    fetchData();
  }, [movieId])
  

  return (
    <>
      <ReviewsList>
          { reviews.length === 0 ? <div style={{ padding: '26px', textAlign: 'center' }}>
         <p>У нас немає рецензій на цей фільм</p>
        </div> : reviews.map(({id, author, content}) => {
            return(
            <ReviewItem key={id}>
                <ReviewsAuthor>{author}</ReviewsAuthor>
                <ReviewContent>{content}</ReviewContent>
            </ReviewItem>)
          })}
      </ReviewsList>
    </>   
  )
}

export default Reviews