import React, {useContext} from "react";
import ProjectsContext from '../context/projectsContext';
import _ from 'lodash';// underscore
const Pagination = props =>{
    const currentPagination = useContext(ProjectsContext)
    const {pageSize, currentPage} = currentPagination;
    const {itemsCount, onPageChange} = props;
   // console.log(currentPage);

   
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    return <nav >
    <ul className="pagination justify-content-end post-pagination mb-5">

       {pages.map(page => 

            <li key={page} className={page === currentPage ? 'page-item active':'page-item'}>
                <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
            </li>
        )} 
      
   
    </ul>
  </nav>;
}

export default Pagination;