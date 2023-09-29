import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

import '../MealPlanner/MealPlanner.css';
import Nutrition from '../MealPlanner/MealNutrition/Nutrition.jsx';
import {nutrition} from '../MealPlanner/MealNutrition/nutrition.js';

export default function MealPlanner() {
  const currentDay = 22;
  const daysToDisplay = [];
  for (let i = currentDay - 3; i <= currentDay + 3; i++) {
    if (i >= 1 && i <= 30) {
      daysToDisplay.push(i);
    }
  }

  return (
    <>
      <div className="mealPlanners">


        <div className="paginations">
          <Pagination className='pages'>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />
            {daysToDisplay.map((day) => (
              <Pagination.Item key={day} active={day === currentDay}>
                {day}
              </Pagination.Item>
            ))}
            <Pagination.Item>{30}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
          <h4>Saturday</h4>
          <h5>Today Meal Plan</h5>
        </div>


        <div className="nutritionValue">
          <h5>Total Nutrition Value</h5>
          <div className="row">
            {nutrition.map((key) => {
              return <Nutrition details={key} key={key.id} />
            })}
          </div>
        </div>
        <div className="nutritionValue">
          <h5>Total Nutrition Value</h5>
          <div className="row">
            {nutrition.map((key) => {
              return <Nutrition details={key} key={key.id} />
            })}
          </div>
        </div>
        <div className="nutritionValue">
          <h5>Total Nutrition Value</h5>
          <div className="row">
            {nutrition.map((key) => {
              return <Nutrition details={key} key={key.id} />
            })}
          </div>
        </div>
        <div className="nutritionValue">
          <h5>Total Nutrition Value</h5>
          <div className="row">
            {nutrition.map((key) => {
              return <Nutrition details={key} key={key.id} />
            })}
          </div>
        </div>
        
        




      </div>
    </>
  );
}
