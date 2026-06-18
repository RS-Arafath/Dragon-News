import React from 'react';

const NewsFeedPage = ({ news }) => {
  const {title}=news
  //console.log(news,'news feed')
  return (
    <div className="my-5 rounded px-5">
      <div className="card bg-base-100 w-full shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
           
          </p>
        </div>
        <figure>
         
        </figure>
      </div>
    </div>
  );
};

export default NewsFeedPage;