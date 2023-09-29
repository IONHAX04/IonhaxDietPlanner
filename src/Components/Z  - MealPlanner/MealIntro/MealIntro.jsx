import React from 'react'
import { Button, Col } from 'react-bootstrap'

import Navbar from '../../00 - Navbar/Navbar.jsx';

import '../MealIntro/MealIntro.css';
import Footer from '../../12 - Footer/Footer';

export default function MealIntro() {
  return (
    <div>
      <Navbar />
      <div className="mealIntroContents content1">
        <Col lg={8}>
          <h3>The Calorie and Macro Meal Planner</h3>
          <h6>Enter your personalized nutrition targets and let our meal planner find the recipes to match. The grocery list will be generated automatically and you can download your meal plan to PDF. If you are unsure what your nutritional targets should be just allow the calorie and macro calculator to calculate it for you. It’s proven, highly effective and makes personalized meal planning much easier. </h6>
          <Button variant="outline-secondary" className='col-lg-8 btn mx-auto'>Get Started for Free!!</Button>{' '}

          <div className="content1">
            <h3>Meal Plan Generator</h3>
            <ul>
              <li>💪️ Ordinary calorie counter/tracker apps can be helpful in understanding the amount of calories found in your food but the process of constantly having to come up with recipe ideas and adjusting ingredient qualities to match your calories and macros can be exhausting. Our meal plan generator finds all the recipes to match your daily nutritional needs automatically- much easier! </li>
              <li>💪️ You can still include your own recipes in the meal planner though. Add your own recipes and we will calculate the nutritional values automatically, just like a regular calorie tracker. You can then enter your own recipe into your meal plan and press the “lock” function to keep it in place. Once you do this you can then ask the meal planner to find meals to complete the rest of your day and still hit your macros and calorie targets. </li>
              <li>💪️ If the planner returns a recipe that isn’t quite to your taste you can press the swap button to find a list of suitable alternatives. </li>
              <li>💪️ This is a meal planner for one so you won’t have to keep dividing up the ingredient amounts when a recipe is made for 6 servings. If you do occasionally cook for more than one person you can adjust the serving size of a recipe in the grocery list section to quickly do the maths for you. </li>
            </ul>
          </div>

          <div className="content1">
            <h3>Calorie and Macro Calculator</h3>
            <ul>
              <li>💪️ Are you unsure what your calorie and macro targets should be? When you create a plan make sure to select the “Build a plan for me” option and we will calculate personalized targets based on your personal statistics and your goal whether it is weight loss, healthy living/maintenance, or for building muscle/bodybuilding. </li>
              <li>💪️ Our calculator is the only one to calculate a set of minimum and maximum ranges as opposed to just one specific number for calories and macronutrients. This allows you to have more flexibility in your diet and encourages you to have a healthy relationship with food. And of course, this approach is also proven to work! </li>
            </ul>
          </div>

          <div className="content1">
            <h3>Grocery List</h3>
            <ul>
              <li>💪️ Once you have set up your diet meal plan you will need to make sure you have all of the ingredients you need to follow it. </li>
              <li>💪️ Once you have listed which ingredients you already have in the pantry you are ready to download the shopping list to PDF, which you can either view on your phone or print off for when you go to the supermarket. </li>
            </ul>
          </div>

          <div className="content1">
            <h3>Track Your Progress</h3>
            <ul>
              <li>💪️ Tracking your progress is a great way of keeping yourself motivated. If you are trying to lose a little belly fat then make sure to enter your waist measurement each week and watch yourself get closer and closer to hitting your target goal. </li>
              <li>💪️ The My Progress section tracks bodyweight, body fat percentage, and waist size by default but you can also set up and enter your own custom measurements that you would like to keep track of. </li>
            </ul>
          </div>
        </Col>
      </div>
      <Footer />
    </div>
  )
}
