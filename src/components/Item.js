import React, { useState, useEffect, useContext } from 'react';
import config from '../config';
import Context from '../context';

const Item = ({ match }) => {
  const { items } = useContext(Context);
  const [item, setItem] = useState(undefined);

  useEffect(() => {
    if (!match) return;
    const itemName = unescape(match.params.itemName).replace(/_/g, ' ');
    const itemDetails = items.find((itemInList) => (
      itemInList.itemName.toLowerCase() === itemName.toLowerCase()
    ));
    setItem(itemDetails);
  }, [match, items]);

  if (!items || items.length === 0 || !match) return <></>;

  return (
    <div>
      {item && (
        <>
          <h1>{item.itemName}</h1>
          <p>{item.itemDescription}</p>
          <div className="items">
            {item.itemPhotos.map((photo) => (
              <div className="item" key={photo.photoName}>
                <img
                  className="item-img"
                  src={`${config.cloudfrontURL}/${photo.photoName}`}
                  alt={item.itemName}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
