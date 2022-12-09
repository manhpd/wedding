import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
function Sidebar () {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  return (
    <>
      <a href='/' onClick={openMenu} className={`js-oliven-nav-toggle oliven-nav-toggle${show ? ' active': ''}`}>
        <i></i>
      </a>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
            <span>
              Yến <small>&</small> Mạnh
            </span>
            <h6>30.12.2022</h6>
          </a>
        </div>
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#couple'>Cô dâu Chú rể</a>
            </li>
            <li>
              <a href='#whenwhere'>Thời gian & Địa điểm</a>
            </li>
            <li>
              <a href='#rsvp'>Đặt Chỗ</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            Đám cưới Hoàng Yến & Đức Mạnh
            <br />
            30 tháng 12, 2022, Hà Nội
          </p>
        </div>
      </aside>


      <aside className='nav-bar'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
            <span>
              Yến <small>&</small> Mạnh
            </span>
            <h6>30.12.2022</h6>
          </a>
        </div>
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#couple'>Cô dâu Chú rể</a>
            </li>
            <li>
              <a href='#whenwhere'>Thời gian & Địa điểm</a>
            </li>
            <li className='rsvp'>
              <a  href='#rsvp'>Đặt Chỗ</a>
            </li>
          </ul>
        </nav>
       
      </aside>
    </>
  )
}

export default Sidebar
