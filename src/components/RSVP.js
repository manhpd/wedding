import React from 'react'

function RSVP () {
  return (
    <div
      id='rsvp'
      className='section-padding bg-img bg-fixed'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='bg-white p-40'>
            {' '}
            <span className='oliven-title-meta text-center'>Sự hiện diện của Quý vị là niềm vinh hạnh cho gia đình chúng tôi!</span>
            <br />
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScRxdkO9HSrBkIjADmud1mDskJkVZ5tWR47BsPqn3UFEw23tQ/viewform?embedded=true" height="843" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVP
