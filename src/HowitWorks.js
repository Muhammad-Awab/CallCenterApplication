import React, { useState } from 'react'
import workapi from './API/worksApi'
const HowitWorks = () => {
  const [workData, setWorkData] = useState(workapi)
  return (
    <>
      <section>
        <div className="container work-container">
          <h1 className='main-heading text-center'>How Does It Work</h1>
          <dic className="row">
            {workData.map((curElem) => {
                const { id, logo, title, info } = curElem;
                return (
                  <div className="col-12 col-lg-4 text-center work-container-subdiv " key={id}>
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 className='sub-heading'>{title}</h2>
                    <p className='main-hero-para w-100'>
                      {info}
                    </p>
                  </div>
                )
              })
            }

          </dic>
        </div>
      </section>

    </>
  )
}

export default HowitWorks
