import Menu from './Menu';

const Menus = ({ menus }) => {
  return (
    <div className='section-center'>
      {menus.map((menu) => {
        return <Menu key={menu.id} {...menu} />;
      })}
    </div>
  );
};

export default Menus;
