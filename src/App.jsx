// Arian Aziri Id : 132814
import { useCallback, useEffect, useMemo, useState } from "react";
import CommentCard from "./components/CommentCard.jsx";
import RegisterComment from "./components/RegisterComment.jsx";

function App() {
  const [comments, setComments] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const addCommentCallback = useCallback(createComment);
  let averageRating = useMemo(() => {
    let sum = 0;
    if(comments == null) return;
    if(comments.length === 0) return;
    comments.forEach((ele) => {
      sum += ele.rating;
    })
    return sum / comments.length;
  }, [comments]);

  function createComment(newComment) {
      setComments([newComment, ...comments]);
  }
  function fetchData() {
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json()).then((data) => {
          setComments(data.map((comment) => {return {...comment, rating: 5, approved: false}}));
          setLoading(false);
        }).then((error) => {
          console.log(error); 
          setLoading(false);
        });
    }, [])
  }
  fetchData();
  if(isLoading) {
    return <div>Loading...</div>
  } else if(!isLoading && comments == null) {
    return <>
      <div>Error</div>
      <button onClick={() => {
        setLoading(true);
        fetchData();
      }}>Refetch</button>
    </>
  } else {
    return <div>
      <div>
        <h1>Average Rating</h1>
        <h2>{averageRating}</h2>
      </div>
      <div>
        <h1>Created A New Comment</h1>
        <RegisterComment onSubmit={addCommentCallback}></RegisterComment>
      </div>
      {
        ...comments.map((comment) => {
          return <CommentCard comment={comment}/>
        })
      }
      </div>
  }
}

export default App;