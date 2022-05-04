import React from 'react'
import { Button } from 'reactstrap'

function Slider() {
  return (
    <>
    <section className='slider'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Xidmət sifariş ver</h5>
                <Button>Sifariş ver</Button>
                </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <img className='slider-img' src='https://166.az/uploads/slider/dd2209c872c832370f99dba61a06e1e6.jpg?v=1575802184' />
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Slider