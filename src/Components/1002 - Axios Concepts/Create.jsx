import React, { useState } from 'react'
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Create() {
    const [itemname, setName] = useState('');
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id: users[users.length-1].id+1 ,itemname}));
        navigate('/axios');
    }

    return (
        <div>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
                <div className="w-50 border bg-secondary text-white p-5">
                    <form onSubmit={handleSubmit}>
                        <h2>Add New Item</h2>
                        <div>
                            <label htmlFor='name'>Item Name : </label>
                            <input type='text' name='name' className='form-control'
                            onChange={e=> setName(e.target.value)}></input>
                        </div>
                        <br />
                        <button className='btn btn-info'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
