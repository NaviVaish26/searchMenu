import { useState } from 'react';
import menu from './data';
import Menus from './components/Menus';
import Title from './components/Title';
import Categories from './components/Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menus, setMenus] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);

  const filter = (category) => {
    if (category === 'all') {
      setMenus(menu);
      return;
    }
    setMenus(menu.filter((menu) => menu.category === category));
  };

  return (
    <main>
      <section className='menu'>
        <Title text='Menu' />
        <Categories categories={categories} filter={filter} />
        <Menus menus={menus} />
      </section>
    </main>
  );
};
export default App;
