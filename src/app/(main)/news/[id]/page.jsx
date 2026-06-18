import { getNewsDetailsById } from '@/lib/data';
import React from 'react';

const newsPage =async ({ params }) => {
  const {id} = await params;
  //console.log(id,'params res');
  const news = await getNewsDetailsById(id);
  console.log(news,'details');
  return (
    <div>
      news
    </div>
  );
};

export default newsPage;