import CategoryBox from '@/components/homepage/news/CategoryBox';
import NewsFeedPage from '@/components/homepage/news/NewsFeed';

import NoNewsCard from '@/components/homepage/news/NoNewscard';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';



const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  //console.log(id, 'params pass');
  const categories = await getCategories();
  //console.log('categories data', categories);
  const news = await getNewsByCategoryId(id);
 // console.log('news', news);
  return (
    <div className="grid grid-cols-4 gap-5 items-start mb-10">
      <div className="sticky top-20 h-screen overflow-y-auto no-scrollbar">
        <CategoryBox categories={categories} activeId={id}></CategoryBox>
      </div>

      <div className="bg-gray-50 col-span-2 ">
        {news.length > 0 ? (
          news.map((n) => {
            return <NewsFeedPage key={n._id} news={n}></NewsFeedPage>;
          })
        ) : (
          <NoNewsCard></NoNewsCard>
        )}
      </div>
      <div className="sticky top-20 h-screen overflow-y-auto no-scrollbar">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
