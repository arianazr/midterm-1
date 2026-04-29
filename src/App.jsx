import { useEffect, useState } from "react";

function App() {
  const [comments, setComments] = useState(null);
  const [isLoading, setLoading] = useState(true);
  function fetchData() {
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json).then((data) => {
          setComments(null);
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
    return <div>Hello</div>
  }
}

export default App;