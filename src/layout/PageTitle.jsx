import React from 'react';

const PageTitle = ({ data }) => {
  return <div className='page-title'>{data || 'Carrinho'}</div>;
};

export default PageTitle;