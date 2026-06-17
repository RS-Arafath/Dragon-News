import CategoryBox from '@/components/homepage/news/CategoryBox';

async function getCategories() {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/news/categories',
  );
  const data = await res.json();
  return data.data.news_category;
}

export default async function Home() {
  const categories = await getCategories();
  //console.log('categories data', categories);
  return (
    <div className="grid grid-cols-4 gap-5 ">
      <CategoryBox categories={categories} activeId={'01'}></CategoryBox>
      <div className="bg-pink-200 col-span-2 ">main</div>
      <div className="bg-blue-200 ">social</div>
    </div>
  );
}
