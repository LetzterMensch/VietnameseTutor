/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import classnames from "classnames";
import * as React from "react";

function FuncList({ name, description, img }) {
  const cardClasses = classnames("card");

  return (
    <div className={cardClasses}>
        <td>
          <td>
            <div className="card-image">
              <img className="img-thumbnail w-25" src={`${img}`} />
            </div>
          </td>
          <td>
              <div type="button" className="btn btn-secondary">
                {name}
              </div>
          </td>
          </td>
    </div>
  );
}

export default FuncList;
