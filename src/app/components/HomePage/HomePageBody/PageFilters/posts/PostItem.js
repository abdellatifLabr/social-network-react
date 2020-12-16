import React from 'react';

const PostItem = ({ itemName, itemDate, itemImage }) => (
  <div className="d-flex align-items-center mb-3 ">
    <div style={{ width: '70px', height: '70px' }} className="mr-4">
      <img src={itemImage} alt={itemName} width="100%" height="100%" />
    </div>
    <div>
      <h6 className="h6">{itemName}</h6>
      <h6 className="small text-muted">{itemDate}</h6>
    </div>
  </div>
);

export default PostItem;
