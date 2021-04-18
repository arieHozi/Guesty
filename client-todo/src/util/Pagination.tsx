import React, { useState, useEffect } from "react";

interface PaginationProps {
  postPerPage: number;
  totalPosts: number;
  paginate: (item: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  postPerPage,
  totalPosts,
  paginate,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const pageNumber = localStorage.getItem("page_number");
    if (pageNumber !== null) {
      paginate(parseInt(pageNumber));
      setCurrentPage(parseInt(pageNumber));
    } else {
      paginate(1);
      setCurrentPage(1);
    }
  }, [paginate]); //

  const pageNumbers: number[] = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postPerPage); index++) {
    pageNumbers.push(index);
  }

  const onClickHandler = (num: number) => {
    paginate(num);
    localStorage.setItem("page_number", JSON.stringify(num));
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li key={num} className="page-item">
            <a
              onClick={() => onClickHandler(num)}
              href="!#"
              className={currentPage === num ? "page-link active" : "page-link"}
            >
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
