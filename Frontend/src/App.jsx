import React from 'react'
import './App.css'
import Home from './assets/home/home.png'
import Notification from './assets/notification/notification.jpg'
import Shop from './assets/shop/heart.png'
import Conversation from './assets/conversation/message.png'
import Subscription from './assets/subscription/favorite.png' 
import Profile from './assets/profile/profile.png'
import Setting from './assets/setting/setting.png'
import Wallet from './assets/wallet/message.png'
import Search from './assets/search/search.png'
import Filter from './assets/filter/filter.png'
import Logout from './assets/logout/logout.png'
import Imgr1 from './assets/imgr1/pexels-ekaterina-12203460.png'
import Imgr2 from './assets/imgr2/pexels-genaro-servín-763210.png'
import Imgr3 from './assets/imgr3/pexels-pixabay-164455.png'
import Imgr4 from './assets/imgr4/pexels-steve-johnson-1269968.png'
import Imgr5 from './assets/imgr5/pexels-fiona-art-5022849.png'
import Imgr6 from './assets/Imgr6/pexels-ali-pazani-2613260.png'
import Imgr7 from './assets/Imgr7/pexels-humphrey-muleba-2045248.png'
import Imgr8 from './assets/Imgr8/pexels-imad-clicks-9810659.png'
import Imgr9 from './assets/Imgr9/pexels-tobias-bjørkli-2236382.png'
import Heart from './assets/heart (1)/heart.png'
import Comment from './assets/comment/comment.png'
import Share from './assets/share/share.png'
function App() {
  return (
    <>
    <div className='container-grid'>
      
     <div className="header">
      <div className='header-left'>
        <p>LOGO</p>
      </div>
      <div className="header-mid">
          <div className='search'>
            <img src={Search} alt="click" />
            <input type="text" placeholder="search here" />
          </div>
          <div className='filter-box'>
            <img src={Filter} alt="click" />
            <p>Filter</p>
          </div>
      </div>
      <div className='header-right'>
        <p>Become a Seller</p>
      </div>
     </div>

      //header
      <div className="main-body">
        <div className="main-body-left">
          <div className='main-body-left-design'>
            <img src={Home} alt="click" />
            <a href="#">Home</a>
          </div>
          <div className='main-body-left-design'>
          <img src={Notification} alt="click" />
            <a href="#">Notifications</a>
          </div>
          <div className='main-body-left-design' >
          <img src={Shop} alt="click" />
            <a href="#">Shop</a>
          </div>
          <div className='main-body-left-design'>
          <img src={Conversation} alt="click" />
            <a href="#">Conversation</a>
          </div>
          <div className='main-body-left-design'>
          <img src={Wallet} alt="click" />
            <a href="#">Wallet</a>
          </div>
          <div className='main-body-left-design'>
          <img src={Subscription} alt="click" />
            <a href="#">Subscription</a>
          </div>
          <div className='main-body-left-design'>
          <img src={Profile} alt="click" />
            <a href="#">MyProfile</a>
          </div>
          <div className='main-body-left-design'>
          <img src={Setting} alt="click" />
            <a href="#">Settings</a>
          </div>
          <div className='main-body-left-design-log'>
          <img src={Logout} alt="click" />
            <a href="#">Logout</a>
          </div>
        </div>
        <div className="main-body-mid">
            <div className='main-body-mid-card'>
        <div className='main-body-mid-head'>
          <div className='main-body-mid-head-left'>
            <div className='main-body-mid-left-partleft'><img src={Imgr6} alt="click" /></div>
            <div className='main-body-mid-left-partright'>
              <p>Lara Leones</p>
              <p>thewallart</p>
            </div>
          </div>
          <div className='main-body-mid-head-right'>
          </div>
        </div>
        <div className='main-body-mid-para'>
          <p>It is a long established fact that the reader will be distracted by the readable content of a page when looking at it layout.</p>
        </div>
        <div className='main-body-mid-image'>
          <img src={Imgr7} alt="click" />
        </div>
        <hr/>
        <div className='bottom-bar'>
          <div className='bottom-bar-icon'>
            <img src={Heart} alt="click" />
            <p>9.8k</p>
          </div>
          <div className='bottom-bar-icon'>
            <img src={Comment} alt="click" />
            <p>8.6k</p>
          </div>
          <div className='bottom-bar-icon'>
            <img src={Share} alt="click" />
            <p>7.2k</p>
          </div>
        </div>
        </div>


        <div className='main-body-mid-card'>
        <div className='main-body-mid-head'>
          <div className='main-body-mid-head-left'>
            <div className='main-body-mid-left-partleft'><img src={Imgr8} alt="click" /></div>
            <div className='main-body-mid-left-partright'>
              <p>Lara Leones</p>
              <p>thewallart</p>
            </div>
          </div>
          <div className='main-body-mid-head-right'>
          </div>
        </div>
        <div className='main-body-mid-para'>
          <p>It is a long established fact that the reader will be distracted by the readable content of a page when looking at it layout.</p>
        </div>
        <div className='main-body-mid-image'>
          <img src={Imgr9} alt="click" />
        </div>
        <hr/>
        <div className='bottom-bar'>
          <div className='bottom-bar-icon'>
            <img src={Heart} alt="click" />
            <p>9.8k</p>
          </div>
          <div className='bottom-bar-icon'>
            <img src={Comment} alt="click" />
            <p>8.6k</p>
          </div>
          <div className='bottom-bar-icon'>
            <img src={Share} alt="click" />
            <p>7.2k</p>
          </div>
        </div>
        </div>
        </div>
        <div className="main-body-right">
           <div className='img-main-body-right-content'>
            <p>Artists</p>
            <p>Photographers</p>
           </div>
           <div className='img-main-body-right-img'><img src={Imgr1} alt="click" /></div>
           <div className='img-main-body-right-img'><img src={Imgr2} alt="click" /></div>
           <div className='img-main-body-right-img'><img src={Imgr3} alt="click" /></div>
           <div className='img-main-body-right-img'><img src={Imgr4} alt="click" /></div>
           <div className='img-main-body-right-img'><img src={Imgr5} alt="click" /></div>
           <div className='img-main-body-right-content-second'>
            <p>Privacy</p>
            <p>Terms of Service</p>
            <p>Cookie Notice</p>
           </div>        
        </div>
      </div>
    </div>
    </>
  )
}

export default App
