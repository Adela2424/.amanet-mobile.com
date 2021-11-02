import React from 'react';
import Cards from '../components/Cards';
import Oferte from '../components/Oferte';
import Pagination from '../components/Pagination';




const Produse= () => {
    return (
        <>
        <div className="produse">
            <Cards/>
        </div>
        <div className="container_pagination">
            <Pagination/>
        </div>
        
        <div className="container_oferte">
             <Oferte/>
        </div>
        
        </>
    );
};

export default Produse;
