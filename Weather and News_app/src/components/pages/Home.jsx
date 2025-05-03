import {  useState } from "react";
import { useEffect } from "react";

function Home() {
  const [news , setnews]=useState([])


useEffect(() => {
  fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-02-06&sortBy=publishedAt&apiKey=383b7d3757b64649b8d9efdaafe8ec5f')
  .then(res =>res.json())
  .then(body=>setnews(body.articles))
} ,[])
return(
  <>
{
  news.length>0 &&
  <table>
 
    {
      news.map((articles , index) =>(
     <div  key={index}className="card w-75 mb-3">
  <div className="card-body">
    <h5 className="card-title"> Title :{articles.title}</h5>
    <p className="card-text">Description :{articles.description}</p>
   
  </div>
</div>
      )
      )
    }
</table>
 
}



  </>
  );
}
export default Home;