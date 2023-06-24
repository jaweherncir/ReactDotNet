import React from 'react'
import { Link } from 'react-router-dom';

export default function Condidature() {
  return (
    <div>
    {/* Preloader Start */}
<div className="header-area header-transparrent">
   <div className="headder-top header-sticky">
     <div className="container">
       <div className="row align-items-center">
         <div className="col-lg-3 col-md-2">
           {/* Logo */}
           <div className="logo">
           <Link to="/" className="navbar-brand" style={{color:'black'}}><img src="/assets/img/logo/logo-no-background.png"  style={{width:200}} alt /></Link>
           </div>  
           
         </div>
         <div className="col-lg-9 col-md-9">
           <div className="menu-wrapper">
             {/* Main-menu */}
             <div className="main-menu">
            
             </div>          
             {/* Header-btn */}
             <div className="header-btn d-none f-right d-lg-block" style={{marginLeft:'70%'}}>
       
             <a   href='PageAccueil' className="nav-link dropdown-toggle" type="button" style={{color:'blue'}} 
                   >
                      Liste Offre
                     </a>
             </div>
             <div className="header-btn d-none f-right d-lg-block">
             
     
             </div>
           </div>
         </div>
         {/* Mobile Menu */}
         <div className="col-12">
           <div className="mobile_menu d-block d-lg-none" />
         </div>
       </div>
     </div>
   </div>
 </div>

 <main>
 {/* slider Area Start*/}
 <div className="slider-area ">
   {/* Mobile Menu */}
   <div className="slider-active">
   <div className="single-slider slider-height d-flex align-items-center" >
   
       <div className="container">
       <div class="container">

  <ul className="cards">
    <li className="cards_item">
      <div className="card1">
        <div className="card_image"><img src="https://www.cidj.com/sites/default/files/styles/full_article/public/2017-11/resume-2445060_1920_Pixabay.jpg?itok=yDIvpLHc" alt="mixed vegetable salad in a mason jar. " /></div>
        <div className="card_content">
            <div className='row'>
            <h2 className="card_title">Nom : Mohamed    </h2>
           <h2 className="card_title" style={{marginLeft:'5%'}}>Prénom :  amine    </h2>
           <h2 className="card_title"  style={{marginLeft:'10%'}}>Email : mohamedamine@gmail.com</h2>
            </div>
        
          <div className="card_text">
            <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer's market.</p>
            <div className='row'>
            <button style={{color:'blue',marginLeft:'75%'}}>Accepter</button>
            <button style={{color:'blue',marginLeft:'5%'}}>Refuser</button>
            </div>

          </div>
        </div>
      </div>
    </li>
 
  </ul>




       </div>
       
       </div>

     </div>
   </div>
 </div>



</main>


</div>
  )
}
