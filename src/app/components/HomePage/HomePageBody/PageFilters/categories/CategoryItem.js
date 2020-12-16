import React from 'react';

const CategoryItem = ({ itemName, itemCount }) => (
  <div>
    <h6 className="small text-muted h6">
      {itemName} <span>({itemCount})</span>
    </h6>
  </div>
);

export default CategoryItem;
