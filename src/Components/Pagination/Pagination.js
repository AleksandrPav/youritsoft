import React from "react";
import scss from './Pagination.module.scss';
import { FiChevronLeft, FiChevronRight  } from "react-icons/fi";

const Pagination = ({ paginate, currentPage}) => {
    const nextPage = (e) => {
        e.preventDefault();
        paginate(currentPage + 1);
    };

    const prevPage = (e) => {
        e.preventDefault();
        paginate(currentPage - 1);
    };

    return (
        <nav className={scss.navigation}>
            <ul className={scss.pagination}>
                <li className={scss.pageItem}>
                    <a onClick={prevPage} href="!#" className={scss.pageLink}>
                        <span><FiChevronLeft className={scss.icon} /></span>
                        <p className={scss.text}>Previous</p>                        
                    </a>
                </li>
                <li className={scss.pageItem}>
                    <a onClick={nextPage} href="!#" className={scss.pageLink}>
                    <p className={scss.text}>Next</p>
                    <span><FiChevronRight className={scss.icon} /></span>
                    </a>
                </li>
            </ul>
        </nav>
    );

}

export default Pagination;
