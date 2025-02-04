import React, { useState } from 'react';
import ItemList from './ItemList';
import ItemForm from './ItemForm';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const addItem = (item) =>{
    setItems([...items, { ...item, id:Date.now() }]);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item=> item.id === updatedItem.id ? updatedItem : item));
    setEditingItem(null);
  };

  const deleteItem = (id) =>{
    setItems(items.filter(item => item.id !==id));
  };

  const editItem = (item) => {
    setEditingItem(item);
  };

  return(
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className="text-3xl font-bold text-center text-blue-600 my-6">CRUD Application</h1>
      <div class="Formdiv">
      <ItemForm
        addItem={addItem}
        updateItem={updateItem}
        editingItem={editingItem}
      />

      <ItemList
       items={items}
       deleteItem={deleteItem}
       editItem={editItem}
      />
      </div>
    </div>
  )
};

export default App;
