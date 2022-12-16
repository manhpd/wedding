import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
import { FaMapMarkerAlt } from "react-icons/fa"; 
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <h2 className='oliven-title'>Thời gian & Địa điểm</h2>{' '}
          </div>
        </div>
        <div className='row list-item'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Lễ ăn hỏi</h5>
              <button><a href='https://goo.gl/maps/wWuUDZgW84QQgNd2A' rel="noreferrer" target="_blank">Địa điểm <FaMapMarkerAlt /> </a></button>
              <p>
                <i className='ti-location-pin'></i> Nhà khách Nghệ An, 
                Số 4 Phan Đăng Lưu - Trường Thi - TP. Vinh - Nghệ An
              </p>
              <p>
                <i className='ti-time'></i> <strong>Ngày 24, tháng 12, năm 2022</strong>
                <br/>
                <i className='ti-time'></i> <span>11:00am – 01:00pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Lễ Cưới</h5>
              <button><a href='https://goo.gl/maps/HdN5JnWH8MfR8CHF8' rel="noreferrer" target="_blank">Địa điểm <FaMapMarkerAlt /> </a></button>
              <p>
                <i className='ti-location-pin'></i> Trống Đồng Palace Cảnh Hồ, 
                173B Trường Chinh - Thanh Xuân - Hà Nội
              </p>
              <p>
                <i className='ti-time'></i> <strong>Ngày 30, tháng 12, năm 2022</strong>
                <br/>
                <i className='ti-time'></i> <span>11:00am - 01:00pm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where
