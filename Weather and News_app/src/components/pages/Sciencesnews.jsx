import {  useState } from "react";
import { useEffect } from "react";

function Sciencesnews() {
  const [newsScie , setScienews]=useState([])
  
  
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=383b7d3757b64649b8d9efdaafe8ec5f')
    .then(res =>res.json())
    .then(body=>setScienews(body.articles))
  } ,[])
  return(
    <>
    {
   newsScie.length>0 &&
    <table>

    
    {
      newsScie.map((articles , index) =>
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
export default Sciencesnews;