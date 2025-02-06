import React from 'react';

const ItemList = ({ items, deleteItem, editItem }) => {
  return (
    <ul className="max-w-md mx-auto bg-green-100 shadow-lg rounded-lg p-5">
      {items.map((item) => (
        <li key={item.id} className="flex justify-between items-center p-4 border-b border-gray-300 text-base text-gray-800 transition-all duration-300 hover:bg-gray-50">
          <span className="text-gray-700">
            <strong>{item.name}</strong> - {item.description} - {item.DOB.toLocaleDateString()}
          </span>
          <div>
            <button
              onClick={() => editItem(item)}
              className="px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 mr-2 transition-all duration-300"
            >
              Edit
            </button>
            <button
              onClick={() => deleteItem(item.id)}
              className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 transition-all duration-300"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
