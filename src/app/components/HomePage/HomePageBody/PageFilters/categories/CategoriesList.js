import React from 'react';
import CategoryItem from "./CategoryItem";

const CategoriesList = () => {
    return (
      <div>
        <h5 className='py-2 py-lg-4 mt-3 mt-lg-5 h5'>Categories</h5>
        <CategoryItem itemName = 'Creative' itemCount = '2'/>
        <hr/>
        <CategoryItem itemName = 'Photography' itemCount = '7'/>
        <hr/>
        <CategoryItem itemName = 'Art' itemCount = '1'/>
        <hr/>
        <CategoryItem itemName = 'Branding' itemCount = '2'/>
        <hr/>
        <CategoryItem itemName = 'Graphic' itemCount = '10'/>
        <hr/>
      </div>
    );
}

export default CategoriesList;
