import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import config from '../config';
import Context from '../context';

const Items = () => {
  const { items } = useContext(Context);
  if (!items || items.length === 0) return <></>;

  return (
    <div>
      <h1>Items</h1>
      <div className="items">
        {items.map((item) => (
          <NavLink
            key={item.itemId}
            to={escape(`/items/${item.itemName.replace(/ /g, '_').toLowerCase()}`)}
            className="item"
          >
            <img
              src={`${config.cloudfrontURL}/${item.itemPhotos[0].photoName}`}
              alt={item.itemName}
              className="item-img"
            />
            <h3>{item.itemName}</h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Items;
