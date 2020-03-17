import React from 'react';
import Menu from './Menu';

const MenuList = ({ menus, updateMenu, deleteMenu }) => (
  <div>
  {menus.map(menu => (
    <Menu
      deleteMenu={deleteMenu}
      updateMenu={updateMenu}
      key={menu.id}
      name={menu.name}
      complete={menu.complete}
      id={menu.id}
    />
  ))}
</div>





  // <div>
  //   { menus.map( menu => 
  //       <Menu
  //       deleteMenu={deleteMenu}
  //       updateMenu={updateMenu}
  //       key={menu.id}
  //       name={menu.name}
  //       complete={menu.complete}
  //       id={menu.id}

  //       // key={menu.id}
  //       // {...menu}
  //       // updateMenu={updateMenu}
  //       // deleteMenu={deleteMenu}
  //       />
  //     )
  //   }
  // </div>
);

export default MenuList;