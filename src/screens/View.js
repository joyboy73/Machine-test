import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const View = () => {
  var[dataset,setdata]=useState([])
  var[lddata,setlddata]=useState("true")
  axios.get("http://apitextile.eyeterp.com/product/viewproduct").then((response)=>{
    setdata(response.data)
  })
  const delet=(id)=>{
    var ddata={"_id":id}
    alert(id)
    axios.post("http://apitextile.eyeterp.com/product/deleteproduct",ddata).then((response)=>{

      console.log(response.data)
     if(response.data.status="success"){
        alert("successfully deleted")
        setdata(response.data)
  }
  else{
    alert("not deleted")
       
   }
      })
    


  }
  return (
    <div><Nav/>
          <div class="row">

         <div class="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
         <div class="row g-4">
                {
                dataset.map((value,key)=>{

                  return  <div class="col col-12 col-md-4 col-sm-4 col-lg-4 col-xl-4 col-xxl-4">

                  <div class="card" >
                            

                            <center>  <img src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg" class="card-img-top" alt="..."style={{width:250,height:250}}/>
                            </center>
                            <div class="card-body" style={{backgroundColor:'black',color:'white'}}>
                              <h5 class="card-title">{value.productName}</h5>
                              <h5 class="card-title">{value.price}</h5>
                            
                            </div>
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  description
                                </button>
                              </h2>
                              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body" >
                                  <strong >{value.description}</strong>
                                </div>
                              </div>
                            </div>
                            </div>
                            <div class="card-body">
                            <div class="btn-group" role="group" aria-label="Basic example">
                              <button type="button" class="btn btn-success" >update</button>
                              <button type="button" class="btn btn-danger"onClick={()=>{delet(value._id)}}>delete</button>
                              </div>                   
                            </div>
                  </div>
                })


                }
            </div>
                                 
                                      
             </div>
        </div>
  
  </div>
  )
}

export default View