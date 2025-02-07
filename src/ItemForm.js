import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { addItem as addItemAction, updateItem as updateItemAction } from './redux/itemsSlice';

const ItemForm = ({ editingItem }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [DOB, setDOB] = useState(new Date());
    const dispatch = useDispatch();

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
        
        const item = { name, description, DOB };
        if (editingItem) {
            dispatch(updateItemAction({ ...item, id: editingItem.id }));
        } else {
            dispatch(addItemAction(item));
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
                <label className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 opacity-35"><i class="fa fa-birthday-cake" aria-hidden="true"></i>DOB</label>
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
                className={`w-full py-2 font-semibold text-white rounded-md transition-all duration-300 ${editingItem ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'}`}
            >
                {editingItem ? 'Update' : 'Add'} Item
            </button>
        </form>
    );
};

export default ItemForm;


/*NOTE:
useState is used for managing local form input values (i.e., name, description, DOB), ensuring the form is controlled.
useEffect is used to sync the form inputs with the editingItem when it changes (for editing an item).
addItem and updateItem are Redux actions that dispatch state changes to the global Redux store (not local component state), keeping your global list of items in sync.
*/