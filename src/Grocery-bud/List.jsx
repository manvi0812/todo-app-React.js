import React from "react";

function List({ items, removeItem, editItem }) {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div key={id}>
            <p>{title}</p>
            <button onClick={() => editItem(id)}>
              <i className='fa fa-pencil-square-o' aria-hidden='true'></i>
            </button>
            <button onClick={() => removeItem(id)}>
              <i className='fa fa-trash' aria-hidden='true'></i>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
