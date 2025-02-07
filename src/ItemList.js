import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, setEditingItem } from './redux/itemsSlice';
import { format } from 'date-fns';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleEdit = (item) => {
    dispatch(setEditingItem(item));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <ul className="max-w-md mx-auto bg-green-100 shadow-lg rounded-lg p-5">
      {items.map((item) => (
        <li key={item.id} className="flex justify-between items-center p-4 border-b border-gray-300 text-base text-gray-800 transition-all duration-300 hover:bg-gray-50">
          <span className="text-gray-700">
            <strong>{item.name}</strong> - {item.description} - {format(new Date(item.DOB), 'dd/MM/yyyy')}
          </span>
          <div>
            <button
              onClick={() => handleEdit(item)}
              className="px-3 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 mr-2 transition-all duration-300"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item.id)}
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
