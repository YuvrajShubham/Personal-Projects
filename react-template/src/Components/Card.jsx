import React from 'react'

const Card = ({title="Learn FSJS", subtitle="do complete the course and assignments", buttonText="Complete Task" , link="https://images.pexels.com/photos/5346060/pexels-photo-5346060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
              <img
                src={link}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {subtitle}
                </p>
                <a href="#" className="btn btn-success">{buttonText}</a>
              </div>
            </div>
  )
}

export default Card