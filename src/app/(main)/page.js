async function GetCategories() {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/news/categories'
  );
  const data = res.json();
  return data
  
}

export default async function Home() {
  const categories = GetCategories()
  console.log(categories);
  return (
    <div className="grid grid-cols-4 gap-5 h-100">
      <div className="bg-red-200 ">category</div>
      <div className="bg-pink-200 col-span-2 ">main</div>
      <div className="bg-blue-200 ">social</div>
    </div>
  );
}
