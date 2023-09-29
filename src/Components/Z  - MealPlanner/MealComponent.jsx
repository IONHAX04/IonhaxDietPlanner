import React from 'react'
import SideNav from './SideNav/SideNav'
import MealPlanner from './MealPlanner/MealPlanner'

import '../01 - MealPlanner/Meals.css';

export default function MealComponent() {
  return (

    <div className='row'>
      <div className="container col-lg-2">

        <SideNav />
      </div>
      <div className="contents col-lg-10">
        <MealPlanner />

      </div>
    </div>
  )
}
