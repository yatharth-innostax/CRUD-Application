import React, { useState, useEffect } from 'react';

const ItemForm = ({ addItem, updateItem, editingItem }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [DOB, setDOB] = useState('');

    useEffect(() => {
        if (editingItem) {
            setName(editingItem.name);
            setDescription(editingItem.description);
            setDOB(editingItem.DOB);
        } else {
            setName('');
            setDescription('');
            setDOB('');
        }
    }, [editingItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingItem) {
            updateItem({ id: editingItem.id, name, description, DOB });
        } else {
            addItem({ name, description, DOB });
        }
        setName('');
        setDescription('');
        setDOB('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <input
                type="text"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />
            <input
                type="text"
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />
            <input
                type="text"
                placeholder='DOB (DD/MM/YYYY)'
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />
            <button
                type='submit'
                className={`w-full py-2 font-semibold text-white rounded-md transition-all duration-300 ${
                    editingItem ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
                }`}
            >
                {editingItem ? 'Update' : 'Add'} Item
            </button>
        </form>
    );
};

export default ItemForm;
