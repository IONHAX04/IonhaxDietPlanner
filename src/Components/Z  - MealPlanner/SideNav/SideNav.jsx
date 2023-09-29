import React from 'react';
import '../SideNav/SideNav.css';
import logo from '../../../assets/images/diet.png';
import user from '../../../assets/images/SideNav/man.png';

import meal from '../../../assets/images/SideNav/leaf.png';
import list from '../../../assets/images/SideNav/checklist.png';
import plan from '../../../assets/images/SideNav/growth.png';

import Button from 'react-bootstrap/Button';

export default function SideNav() {
    return (
        <>
            <div className="sideContents">
                <h4>
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mb-3"
                    />{' '}
                    My Diet Plans
                </h4>
                <img
                    alt=""
                    src={user}
                    width="150"
                    height="150"
                    className="d-inline-block align-top mb-3"
                />{' '}

                <Button variant="outline-warning">Create Plan</Button>{' '}

                <li>
                    <img
                        alt=""
                        src={meal}
                        width="25"
                        height="25"
                        className="d-inline-block align-top me-3"
                    />{' '}
                    Meal Planner
                </li>
                <li>
                    <img
                        alt=""
                        src={list}
                        width="25"
                        height="25"
                        className="d-inline-block align-top me-3"
                    />{' '}
                    Grocery List
                </li>
                <li>
                    <img
                        alt=""
                        src={plan}
                        width="25"
                        height="25"
                        className="d-inline-block align-top me-3"
                    />{' '}
                    My Progress
                </li>
                <Button variant="danger" className='col-lg-11' >Logout</Button>{' '}
            </div>
        </>
    )
}
