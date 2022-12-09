import React from 'react'
import Bride from '../assets/images/bride.jpg'
import Groom from '../assets/images/groom.jpg'
function Bridegroom () {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img'>
                {' '}
                <img src={Bride} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <span>Cô dâu</span>
                  <h6>
                    Nguyễn Hoàng Yến <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>Nhà gái</span>
                  <h6>
                   Nguyễn Lương Mạnh <i className='ti-heart'></i>
                  </h6>{' '}
                  <h6>
                   Trần Thị Cẩm <i className='ti-heart'></i>
                  </h6>{' '}
                 
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img'>
                {' '}
                <img src={Groom} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <span>Chú Rể</span>
                  <h6>
                    Phạm Đức Mạnh <i className='ti-heart'></i>
                  </h6>{' '}
                  
                  <span>Nhà trai</span>
                  <h6>
                   Phạm Văn Khang <i className='ti-heart'></i>
                  </h6>{' '}
                  <h6>
                   Trịnh Thị Bé <i className='ti-heart'></i>
                  </h6>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bridegroom
