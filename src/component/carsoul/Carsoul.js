import React from 'react'
import './Carsoul.css'
const Carasoul = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide w-100" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner" style={{height: "31rem"}}>
    <div className="carousel-item active">
    <img src="/image2.jpeg" className="d-block w-[100vw] carasol_image" alt="..." style={{ height: "31rem"}}/>
      <div className="carousel-caption d-md-block">
        <h5 className=' md:text-2xl '>Crafting Timeless Architecture with GRC Elegance</h5>
        <p >Explore our range of finely designed jaalis, arches, domes, and more.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/image1.jpeg" className="d-block w-[100vw] carasol_image" alt="..." style={{ height: "31rem"}}/>
      <div className="carousel-caption  d-md-block">
        <h5 className=' text-2xl'>Precision in Design, Perfection in Installation</h5>
        <p >From manufacturing to fittings — quality that speaks for itself.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/image4.jpeg" className="d-block w-[100vw] carasol_image" alt="..." style={{ height: "31rem"}}/>
      <div className="carousel-caption  d-md-block">
        <h5 className=' md:text-2xl'>Custom GRC Solutions for Every Architectural Vision</h5>
        <p >Transform your space with tailored cladding, columns, and wall panels.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/image3.jpeg" className="d-block w-[100vw] carasol_image" alt="..." style={{ height: "31rem"}}/>
      <div className="carousel-caption  d-md-block">
        <h5 className=' md:text-2xl'>Where Art Meets Structure</h5>
        <p >Discover handcrafted GRC statues, mouldings, brackets, and beyond.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className='info' style={{ width: "100vw", maxWidth:"100%"}}>
   

</div>
    <div className="text-wrap" style={{height:"maxContent", width:"100%" , 
    backgroundColor: "azure" ,padding: "44px" , textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div>
        <h2 style={{fontWeight:"bold",marginTop:"5rem"}}>BRAMHA GRC CREATION</h2>
      
        <p>GRC & Concrete Products</p>

    </div>

    </div>
    </>
  )
}

export default Carasoul