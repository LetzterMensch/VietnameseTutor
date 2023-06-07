/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

function TeacherListing({ listing }) {
  if (!listing) {
    return null;
  }

  const {
    id,
    email,
    fullname,
    gender,
    password,
    designation,
    skills,
    experience,
    photo,
    description,
    created_at,
    updated_at,
  } = listing;
  const columnClasses = classnames("column", "col-4", "col-xs-12");
  const cardClasses = classnames("card");

  return (
    <div className={columnClasses} style={{ margin: "1rem 0" }}>
      <div className={cardClasses}>
        <div className="card-image">
          <img className="img-thumbnail" style={{width :"217px", height:"137px", marginLeft:"auto",marginRight:"auto"}} src={`/server/${photo}`} />
        </div>
        <div className="card-header">
          <div className="card-title h5">{fullname}</div>
          <div className="card-title h6">メール：{email}</div>
          <div className="card-subtitle ">{gender}</div>
          <div className="card-subtitle ">{experience}年数の経験</div>
        </div>
        <div className="card-body">{description}</div>
        <div className="card-footer">
          <Link className="btn btn-primary px-2" to={`/teachers/${id}`}>
            <div className="text-top">先生のコースを見る</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeacherListing;
