async function getCategories() {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/news/categories',
  );
  const data = await res.json();
  return data.data.news_category;
}

export default async function Home() {
  const categories = await getCategories();
  console.log('categories data', categories);
  return (
    <div className="grid grid-cols-4 gap-5 ">
      <div className="bg-gray-100 rounded p-5">
        <h2 className="text-lg sm:text-2xl text-black font-bold text-center bg-slate-200 p-3 rounded">
          All Categories
        </h2>
        <ul className="flex flex-col my-5 gap-3">
          {categories.map((category) => {
            return (
              <li
                key={category.category_id}
                className="
        group
        border border-gray-200
        p-2 sm:p-3
        rounded-2xl
        text-base sm:text-lg md:text-xl
        font-semibold
        text-center
        cursor-pointer
        transition-all duration-200

        hover:-translate-y-1
      
        hover:border-red-600
        hover:shadow-lg
        hover:shadow-red-500/20
        hover:text-red-600
        active:scale-90
active:translate-y-0
      "
              >
                {category.category_name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-pink-200 col-span-2 ">main</div>
      <div className="bg-blue-200 ">social</div>
    </div>
  );
}
