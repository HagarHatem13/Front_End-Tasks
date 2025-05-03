import { useState } from "react";
import { useEffect } from "react";
function Weather(){
  const [weather , setweather]=useState([])
  const[searchInputValue , setSearchInputValue]=useState('')
  const[searchedResult , setSearchedResult] = useState([])

  useEffect(()=>{
    fetch('https://mocki.io/v1/21a8bcac-f82e-4ec5-be87-1d3af80679f0')
    .then(res =>res.json())
    .then(body=>setweather(body))
  } , [])
  const handleSearch =() =>{
    if(searchInputValue.trim()===""){
      setSearchedResult(weather);
    }else{
    const result= weather.filter((weather) =>
     weather.city.includes(searchInputValue)
    );
    setSearchedResult(result);
    }
  }
  return(
  <>
  <div className="container my-4">

  <input type="search" onChange={(event) => setSearchInputValue(event.target.value)}  />
  <button onClick={handleSearch}> search</button>
    </div>
     <h1 className="text-center my4"> Weather Lists </h1>
     <div className="container">
     <table className="table table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>City</th>
          <th>Temperature</th>
          <th>Condition</th>
          <th> Humidity</th>
        </tr>
      </thead>
  
      
      {
        searchedResult.length>0 &&
        <tbody>
          {
            searchedResult.map((weather)=>(
              <tr key={weather.id}>
               <td> {weather.id}</td>
                <td>{weather.city}</td>
                <td>{weather.temperature}</td>
                <td>{weather.condition}</td>
                <td> {weather.humidity}</td>
              </tr>


            ))
          }
         
        </tbody>
      }
      </table>
      </div>
  </>
  )
  }
  
export default Weather;