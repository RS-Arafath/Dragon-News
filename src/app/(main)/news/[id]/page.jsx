import React from 'react';

const newsPage =async ({ params }) => {
  const {id} = await params;
  console.log(id,'params res');
  return (
    <div>
      news
    </div>
  );
};

export default newsPage;