import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Search = () => {
      var[sdata,setdata]=useState("")
      var [data,setsdata]=useState([{"ctgry":"","desc":"","shnme":""}])
      const srch=()=>{
            var ndata={"productName":sdata}
          
            axios.post("http://apitextile.eyeterp.com/product/viewproduct",ndata).then((response)=>{
                  console.log(response.data)
                  setsdata(response.data)
            })
      }
  return (
    <div>
          <Nav/><div class="container">
    <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row g-3">
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      
                            <label for="" class="form-label">Product Name</label>
                            <input type="text" class="form-control" onChange={(e)=>{setdata(e.target.value)}}/>
                       
                      </div>
                      <div class="col col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                        <input type="button" value="search" class="btn btn-success" onClick={srch}/>
                      </div>
                      {
                data.map((value,key)=>{

                  return  <div class="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">

                  <div class="card" >
                            

                            <center>  <img src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg" class="card-img-top" alt="..."style={{width:250,height:250}}/>
                            </center>
                            <div class="card-body" style={{backgroundColor:'black',color:'white'}}>
                              <h5 class="card-title">{value.title}</h5>
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
                                  <strong >{value.about}</strong>
                                </div>
                              </div>
                            </div>
                            </div>
                          
                  </div>
                })


                }
                </div>
          </div>
    </div>
</div></div>
  )
}

export default Search