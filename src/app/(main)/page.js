import CategoryBox from '@/components/homepage/news/CategoryBox';
import RightSideBar from '@/components/homepage/news/RightSideBar';

/* right side category fetch */
async function getCategories() {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/news/categories',
  );
  const data = await res.json();
  return data.data.news_category;
}
async function getNewsByCategoryId(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data
}

export default async function Home() {
  const categories = await getCategories();
  //console.log('categories data', categories);
  const news = await getNewsByCategoryId("04");
  console.log('news',news);
  return (
    <div className="grid grid-cols-4 gap-5 ">
      <CategoryBox categories={categories} activeId={'01'}></CategoryBox>

      <div className="bg-pink-200 col-span-2 ">{
        news.map(n => {
          return <div key={n._id}>{n.title }</div>
      })
      
      }</div>
      <div className="">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}
