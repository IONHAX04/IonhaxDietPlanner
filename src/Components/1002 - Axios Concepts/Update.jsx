import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';
 

export default function Update() {

    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {name}= existingUser[0];

    const [uname, setName] = useState(name);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            itemname: uname
        }))
        navigate('/axios')
    }

    return (
        <div>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
                <div className="w-50 border bg-secondary text-white p-5">
                    <form onSubmit={handleUpdate}>
                        <h2>Update User</h2>
                        <div>
                            <label htmlFor='name'>Name : </label>
                            <input type='text' name='name' className='form-control' value={uname} onChange={e => setName(e.target.value)}></input>
                        </div>
                        <br />
                        <button className='btn btn-success'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
