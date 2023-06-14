import React, { Fragment } from 'react'
// import Header from './Header'
import'./Home.css'
import pride from './../imgs/4.png'
// import Product from './Product'
const Home = () => {
  return (
      <Fragment>
        <header>
          <div className='hero'>
            <div class="card bg-dark text-white border-0">
              <img src="/assets/images/home/3.jpg" class="card-img" alt='' height="550px"/>
              <div class="card-img-overlay d-flex flex-column justify-content-center">
                <div className='container'>
                  <h5 class="card-title display-2 fw-bolder mb-0" > NEW DISHES ARE HERE</h5>
                  <p class="card-text lead fs-2"> CHECK OUT ALL FOODS</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className='pride'>
          <div className='contianer'>
            <div className='row'>
              <div className='col-md-6'>
                <img src={pride} title='pride' alt='pride'/>
              </div>
              <div className='col-md-6'>
                <h2>We pride ourselves on making real food from the best ingredients</h2>
                <p>The most common way restaurants drive repeat business using phone numbers is by sending time-sensitive promotions that often lead to immediate sales. </p>
                </div>
            </div>
          </div>
        </section>
        <div class="video-action">
            <div class="row text-center">
                <h1>When a man's stomach is full it makes no <br></br> difference whether he is rich or poor.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br></br>finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                {/* <a href="https://www.youtube.com/watch?v=bZx8rPd-PKQ" class="swipebox-video">
                    <div class="intro-video-pop">
                        <i class="fa fa-play"></i> Watch Our Story
                    </div>
                </a> */}
            </div>
        </div>

        


      </Fragment>
  )
}

export default Home 