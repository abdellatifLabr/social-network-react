import React, {Component} from 'react';

const CategoryItem = ({itemName, itemCount}) => {
    return (
      <div>
        <h6 className='small text-muted h6'>{itemName} <span>({itemCount})</span></h6>
      </div>
    );
}

export default CategoryItem;
