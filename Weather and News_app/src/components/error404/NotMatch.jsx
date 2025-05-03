import errorImg from '/src/assets/image/error.jpg'
function NotMatch(){
  return(
    <>
    
{/*<div className="alert fs-5 w-50 mx-auto fx-5 alert-danger my-5 container text-center">
  Error 404 Page Not Found
</div>*/}
 <div className="container my-5 w-75 mx-auto text-center">
  <img src={errorImg} alt="" style={{
      width:"500px",
      height:"400px"

    }}
    />
 </div>

    
    </>
  )
}

export default NotMatch;