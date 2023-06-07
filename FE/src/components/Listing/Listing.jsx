/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

function Listing({ listing }) {
  if (!listing) {
    return null
  }

  const { id, name, level, method, description, price,id_teacher,created_at,updated_at,image } = listing
  const columnClasses = classnames('column', 'col-4', 'col-xs-12')
  const cardClasses = classnames('card')

  return (
    <div className={columnClasses} style={{ margin: '1rem 0' }}>
      <div className={cardClasses}>
        <div className="card-image">
          <img className="img-responsive" src={`/server/${image}`}/>
        </div>
        <div className="card-header">
          <div className="card-title h5">{name}</div>
          <div className="card-title h6">{price} VND</div>
          <div className="card-subtitle ">レベル：{level}</div>
          <div className="card-subtitle ">{method}</div>
        </div>
        <div className="card-body">{description}</div>
        <div className="card-footer">
          <Link className="btn btn-primary px-2" to={`/details/${id}`}>
            <div className="text-top">コースの詳細</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Listing