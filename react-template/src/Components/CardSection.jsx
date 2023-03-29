import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
          <Card title="Leran DevOps" subtitle='do complete the course and assignments of DevOps'buttonText='Complete DevOps' link="https://images.pexels.com/photos/15457508/pexels-photo-15457508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <div className="col-4">
          <Card title="Leran Git & Github" subtitle='do complete the course and assignments of Git & Github'buttonText='Complete Git' link='https://images.pexels.com/photos/5717583/pexels-photo-5717583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          </div>
          <div className="col-4">
            <Card />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSection