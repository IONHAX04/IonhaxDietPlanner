import React from 'react'
import Navbars from '../00 - Navbar/Navbar'
import Footer from '../12 - Footer/Footer'

import { Button } from 'react-bootstrap'

import './HomePage.css'

import NavPlan from '../../assets/images/Navbar/plan.png';
import DietPlan from '../../assets/images/Navbar/dietPlan.png';
import Plan from '../../assets/images/Navbar/planDiet.png';
import Target from '../../assets/images/Navbar/target.png';
import Progress from '../../assets/images/Navbar/progress.png';
import Personalize from '../../assets/images/Navbar/personalize.png';
import Integration from '../../assets/images/Navbar/integration.png';
import Shopping from '../../assets/images/Navbar/shopping.png';
import Calculator from '../../assets/images/Navbar/calculator.png';
import Article from '../../assets/images/Navbar/article.png';
import Help from '../../assets/images/Navbar/food-delivery.png';
import Home from '../../assets/images/house.png';
import Goals from '../03 - Goals/Goals';
import Nutrition from '../02 - NutritionalInfo/Nutrition';

export default function HomePage() {
    return (
        <div>
            <Navbars />
            <div className="contentss">


                <div className="homePageContents col-lg-8">
                    <header>
                        <h1>Welcome to Diet Planner..</h1>
                        <p>Your Ultimate Health and Nutrition Hub</p>
                    </header>


                    <section className="mb-3  text-center">
                        <h2>Explore Our Key feature</h2>

                        <div className="feature row mb-3  ">
                            <div className="col-lg-3 d-none d-lg-block">
                                <img
                                    alt=""
                                    src={Target}
                                    width="200"
                                    height="160"
                                    className="d-inline-block align-top"
                                />{' '}
                            </div>
                            <div className="col-lg-9 text-center">
                                <h3>Goal Setting</h3>
                                <p>
                                    Define your health and fitness aspirations. Set achievable goals tailored to your preferences, whether it's weight loss, muscle gain, or maintenance.
                                </p>
                                <Button variant="outline-success col-lg-6 mx-auto" href='/goals' className='buttons'>View </Button>{' '} 
                            </div>
                        </div>

                        <div className="feature row  mb-3  ">
                            <div className="col-lg-9 text-center">
                                <h3>Personalized Diet Plans</h3>
                                <p>
                                    Say goodbye to generic diets. Our platform crafts personalized diet plans based on your profile and goals, ensuring they meet your specific needs.
                                </p>
                                <Button variant="outline-success col-lg-6 mx-auto" href='/personalize' className='buttons'>View </Button>{' '} 
                            </div>
                            <div className="col-lg-3 d-none d-lg-block">
                                <img
                                    alt=""
                                    src={Personalize}
                                    width="200"
                                    height="160"
                                    className="d-inline-block align-top"
                                />{' '}
                            </div>
                        </div>

                        <div className="feature row  mb-3  ">
                            <div className=" col-lg-3 d-none d-lg-block">
                                <img
                                    alt=""
                                    src={DietPlan}
                                    width="200"
                                    height="160"
                                    className="d-inline-block align-top"
                                />{' '}
                            </div>
                            <div className="col-lg-9 text-center">
                                <h3>Nutritional Information</h3>
                                <p>
                                    Access detailed nutritional information for every meal and recipe. Understand calories, macronutrients, vitamins, minerals, and more to make informed dietary choices.
                                </p>
                                <Button variant="outline-success col-lg-6 mx-auto" href='/nutritionInfo' className='buttons'>View </Button>{' '} 
                            </div>
                        </div>

                        <div className="feature row">
                            <div className="col-lg-9 text-center">
                                <h3>Progress Tracking</h3>
                                <p>
                                    Stay motivated and monitor your journey towards your health and fitness goals. Track your weight, body measurements, and visualize your progress with interactive charts and graphs.
                                </p>
                                <Button variant="outline-success col-lg-6 mx-auto" href='/progress' className='buttons'>View </Button>{' '} 
                            </div>
                            <div className="col-lg-3 d-none d-lg-block">
                                <img
                                    alt=""
                                    src={Progress}
                                    width="200"
                                    height="160"
                                    className="d-inline-block align-top"
                                />
                            </div>
                        </div>


                        <div className="feature row">
                            <div className="col-lg-3 d-none d-lg-block">
                                <img
                                    alt=""
                                    src={Personalize}
                                    width="200"
                                    height="160"
                                    className="d-inline-block align-top"
                                />
                            </div>
                            <div className="col-lg-9 text-center">
                                <h3>Personalized Diet</h3>
                                <p>
                                    Say goodbye to one-size-fits-all diets. Our platform tailors your diet plans to your unique profile and goals. Enjoy meals that cater to your specific needs and preferences.
                                </p>
                                <Button variant="outline-success col-lg-6 mx-auto" href='/personalize' className='buttons'>View </Button>{' '} 
                            </div>
                        </div>

                        <div className="feature row">
                            <div className="col-lg-9 text-center">
                                <h3>Calorie and Fat Calculator</h3>
                                <p>
                                    Take control of your nutrition with our handy calculators. Determine your daily calorie needs and optimize your fat intake based on your goals and preferences.
                                </p>
                                <Button variant="outline-success col-lg-6 mx-auto" href='/calculator' className='buttons'>View </Button>{' '} 
                            </div>
                            <div className="col-lg-3 d-none d-lg-block">
                                <img
                                    alt=""
                                    src={Calculator}
                                    width="200"
                                    height="160"
                                    className="d-inline-block align-top"
                                />
                            </div>
                        </div>

                        <div className="feature row  mb-3  ">
                            <div className="col-lg-3 d-none d-lg-block">
                                <img
                                    alt=""
                                    src={Shopping}
                                    width="200"
                                    height="160"
                                    className="d-inline-block align-top"
                                />
                            </div>
                            <div className="col-lg-9 text-center">
                                <h3>Shopping List</h3>
                                <p>
                                    Simplify your meal preparation with customized shopping lists generated from your meal plans. Modify, add items, and check off your purchases.
                                </p>
                                <Button variant="outline-success col-lg-6 mx-auto" href='/axios' className='buttons'>View </Button>{' '} 
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <Footer />
        </div>
    )
}


