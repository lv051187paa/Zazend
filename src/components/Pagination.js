import React from "react";

import "./pagination.scss";

const Pagination = props => {
  return (
    <div className="paginator">
    {props.currentPage !== 1 ? 
    (<i className="fas fa-arrow-circle-left" onClick={() => props.prevPage(props.currentPage)}/>)
      : null
    }
      <span>{props.currentPage}</span>/
      <span>{props.totalPages}</span>
      {props.currentPage !== props.totalPages ? 
      (<i className="fas fa-arrow-circle-right" onClick={() => props.nextPage(props.currentPage)}></i>)
      : null }
    </div>
  );
};

export default Pagination;
