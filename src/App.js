import React from 'react';
import ItemList from './ItemList';
import ItemForm from './ItemForm';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setEditingItem, clearEditingItem } from './redux/itemsSlice';

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items); // Access items from Redux store
  const editingItem = useSelector(state => state.items.editingItem); // Access editing item from Redux store

  // Redux actions for adding, updating, deleting items
  const addItem = (item) => {
    dispatch(addItem(item));
  };

  const updateItem = (updatedItem) => {
    dispatch(updateItem(updatedItem));
    dispatch(clearEditingItem()); // Clear editing item after update
  };

  const deleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  const editItem = (item) => {
    dispatch(setEditingItem(item));
  };

  return (
    <div className="min-h-screen bg-green-300 p-6 mx-auto">
      <h1 className="text-5xl font-semibold text-center text-black-600 my-6">CRUD Application</h1>
      <div className=" max-w-md mx-auto bg-green-100 shadow-lg rounded-lg p-5 ">
        <ItemForm addItem={addItem} updateItem={updateItem} editingItem={editingItem} />
        <ItemList items={items} deleteItem={deleteItem} editItem={editItem} />
      </div>
    </div>
  );
};

export default App;

/* NOTE:
useDispatch: Allows you to dispatch actions to the Redux store.
useSelector: Allows you to access specific pieces of state from the Redux store.
These hooks simplify the process of interacting with Redux in functional components,
 providing a more React-friendly approach than the older connect HOC.*/