import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const ItemForm = ({ addItem, updateItem, editingItem }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [DOB, setDOB] = useState(new Date());
    
    useEffect(() => {
        if (editingItem) {
            setName(editingItem.name);
            setDescription(editingItem.description);
            setDOB(new Date(editingItem.DOB));
        } else {
            setName('');
            setDescription('');
            setDOB('');
        }
    }, [editingItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const item={ name, description, DOB};
        if (editingItem) {
            updateItem({ ...item, id: editingItem.id });
        } else {
            addItem(item);
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
            
            <div className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4" >
            
                <label className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 opacity-35" aria-required><i class="fa fa-birthday-cake" aria-hidden="true"></i>DOB</label>
                <DatePicker
                    showIcon
                    toggleCalendarOnIconClick
                    selected={DOB}
                    onChange={(date) => setDOB(date)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="DD/MM/YYYY"
                />
            </div>
            
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
