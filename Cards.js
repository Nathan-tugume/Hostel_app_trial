import React, { useState } from 'react'

import './Cards.css'



function Cards() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const yourHostelData = [
      {
        id: 1,
        name: 'NANA HOSTEL',
        price: 800,
        // other properties
      },
      {
        id: 2,
        name: 'OLYMPIA HOSTEL',
        price: 900,
        // other properties
      },
      // More hostels
    ];
    
    
   
    const filteredHostels = yourHostelData.filter((hostel) => {
      return hostel.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setSearchResults(filteredHostels);
  };
  return (
    <div>
      <section className='logo'> 
      <img src='hostelogo.png' className='logo' alt='logo'/>
      <form className="d-flex" role="search"  onSubmit={handleSearch}>
       
        <input className=" me-2 search-input" type="search" placeholder="Search" aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Search</button>
        
      </form>
      </section>
      
      <h1 className='heading'>Our best hostels</h1>
      {/* Display search results or cards based on searchResults state */}
      {searchResults.length > 0 ? (
        // Display search results
        searchResults.map((hostel) => (
          // Render individual hostel cards based on search results
          <div key={hostel.id} className="card">
            {/* Render hostel information here */}
          </div>
          ))
          ) :(



            
      <div className="card-grid">
        {/* <Link to="/">  */}
      <div className="card" >
  <img src="hostelpc.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" id='1'>NANA HOSTEL</h5>
    <p className="card-text">Some quick example text to build on the card title <br/> <span className="card-title">Price $800</span></p>
    <div className='row'>
    <div className="col-6">
        <a href="#" className="btn btn-primary">BOOK NOW!</a>
      </div>
      <div className="col-6">
    <div className="rating">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        
    </div>
    </div>
    </div>
  </div>
</div>
{/* </Link>
<Link to="/">  */}
<div className="card" >
  <img src="cool.avif" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">OLYMPIA HOSTEL</h5>
    <p className="card-text">Some quick example text to build on the card title <br/> <span className="card-title">Price $900</span></p>
    <div className='row'>
    <div className="col-6">
        <a href="#" className="btn btn-primary">BOOK NOW!</a>
      </div>
      <div className="col-6">
    <div className="rating">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
    </div>
    </div>
    </div>
  </div>
</div>
{/* </Link>
<Link to="/">  */}
<div className="card" >
  <img src="new.webp" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">JJ HOSTEL</h5>
    <p className="card-text">Some quick example text to build on the card title <br/> <span className="card-title">Price $800</span></p>
    
    <div className='row'>
    <div className="col-6">
        <a href="#" className="btn btn-primary">BOOK NOW!</a>
      </div>
      <div className="col-6">
    <div className="rating">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        
    </div>
    </div>
    </div>
  </div>
</div>
{/* </Link>
<Link to="/">  */}
<div className="card" >
  <img src="r3.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">KARE HOSTEL</h5>
    <p className="card-text">Some quick example text to build on the card title <br/> <span className="card-title">Price $500</span></p>
    <div className='row'>
    <div className="col-6">
        <a href="#" className="btn btn-primary">BOOK NOW!</a>
      </div>
      <div className="col-6">
    <div className="rating">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        
    </div>
    </div>
    </div>
  </div>
</div>
{/* </Link>
<Link to="/">  */}
<div className="card" >
  <img src="r1.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">DOUGLAS VILLA</h5>
    <p className="card-text">Some quick example text to build on the card title <br/> <span className="card-title">Price $550</span></p>
    <div className='row'>
    <div className="col-6">
        <a href="#" className="btn btn-primary">BOOK NOW!</a>
      </div>
      <div className="col-6">
    <div className="rating">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        
    </div>
    </div>
    </div>
  </div>
</div>
{/* </Link>
<Link to="/">  */}
<div className="card" >
  {/* <link className='card_link'> */}
  <img src="r2.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">MUHIKA HOSTEL</h5>
    <p className="card-text">Some quick example text to build on the card title <br/> <span className="card-title">Price $700</span></p>
    <div className='row'>
    <div className="col-6">
        <a href="#" className="btn btn-primary">BOOK NOW!</a>
      </div>
      <div className="col-6">
    <div className="rating">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        
    </div>
    </div>
    </div>
  </div>
  
</div>
{/* </Link> */}
</div>
)}
</div>
    
  )
}

export default Cards

