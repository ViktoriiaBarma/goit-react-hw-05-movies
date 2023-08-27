import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMoviesReviews } from 'services/api'
import {ReviewsList,ReviewItem, ReviewsAuthor, ReviewContent} from './Reviews.styled'
import { Loader } from "components/Loader/Loader";

const Reviews = () => {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState([]);
const [isLoading, setIsLoading] = useState(false);
//  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
      setIsLoading(true);
 //       setError(false);
      const response = await getMoviesReviews(`${movieId}`)
      setReviews(response);
      } catch (error) {
        console.log(error)
  //    setError(error);
      } finally {
        setIsLoading(false);
    }
  };
    fetchData();
  }, [movieId])
  

  return (
    <>
             {isLoading && <Loader />}

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