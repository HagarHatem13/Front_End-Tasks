import {  useState } from "react";
import { useEffect } from "react";

function Sportnews() {
  const [spnews , setspnews]=useState([])
  
  
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=383b7d3757b64649b8d9efdaafe8ec5f')
    .then(res =>res.json())
    .then(body=>setspnews(body.articles))
  } ,[])

  return(
    <>
    {
      spnews.length>0 &&
      <table>
    
  {
      spnews.map((articles , index) =>
        <div  key={index}className="card w-75 mb-3">
      <div className="card-body">
        <h5 className="card-title"> Title :{articles.title}</h5>
        <p className="card-text">Description :{articles.description}</p>
       
      </div>
    </div>
      
      )
    }
    </table>
}
    </>
  );

}
export default Sportnews;