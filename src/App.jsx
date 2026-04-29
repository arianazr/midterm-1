import { useEffect, useState } from "react";
import "./components/CommentCard.jsx"
function App() {
  const [comments, setComments] = useState(null);
  const [isLoading, setLoading] = useState(true);
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
  console.log(comments);
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
      Hello
      {
        ...comments.map((comment) => {
          return <CommentCard comment={comment}/>
        })
      }
      </div>
  }
}

export default App;