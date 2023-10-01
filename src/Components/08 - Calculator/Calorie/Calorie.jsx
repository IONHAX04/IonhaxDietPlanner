import React, { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import '../Calculator.css';


export default function Calorie() {

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [selectedGender, setSelectedGender] = useState('Male'); 

    const [activityLevel, setActivityLevel] = useState('');
    const [goal, setGoal] = useState('');
    const [targetCalories, setTargetCalories] = useState(null);

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };
    

    const calculateCalories = () => {
        const BMRConstants = {
            male: {
                imperial: 66.5,
                metric: 5.003,
                ageFactor: 6.75,
            },
            female: {
                imperial: 655.1,
                metric: 1.85,
                ageFactor: 4.68,
            },
        };

        const heightInCm = selectedGender === 'Male' ? height * 2.54 : height * 2.54;
        const weightInKg = selectedGender === 'Male' ? weight * 0.453592 : weight * 0.453592;

        const genderConstants = BMRConstants[selectedGender.toLowerCase()];
        const BMR = genderConstants.imperial + weightInKg * genderConstants.metric + heightInCm * genderConstants.ageFactor;

        let TDEE;
        switch (activityLevel) {
            case 'Sedentary - Television or office work':
                TDEE = BMR * 1.2;
                break;
            case 'Light activity - Exercise workout or sports 1-3 days per week':
                TDEE = BMR * 1.375;
                break;
            case 'Moderate activity - Exercise workout or sports 3-5 days per week':
                TDEE = BMR * 1.55;
                break;
            case 'High activity - Exercise workout or sports 6-7 days per week':
                TDEE = BMR * 1.725;
                break;
            case 'Extreme activity - Exercise workout or sports two times per day':
                TDEE = BMR * 1.9;
                break;
            default:
                TDEE = BMR;
                break;
        }

        let calculatedCalories;
        switch (goal) {
            case 'Cautious (-10% kcal)':
                calculatedCalories = TDEE * 0.9;
                break;
            case 'Recommended (-20% kcal)':
                calculatedCalories = TDEE * 0.8;
                break;
            case 'Aggressive (-30% kcal)':
                calculatedCalories = TDEE * 0.7;
                break;
            case 'Very Aggressive (-40% kcal)':
                calculatedCalories = TDEE * 0.6;
                break;
            case 'Maintain':
                calculatedCalories = TDEE;
                break;
            case 'Cautious (+10% kcal)':
                calculatedCalories = TDEE * 1.1;
                break;
            case 'Recommended (+20% kcal)':
                calculatedCalories = TDEE * 1.2;
                break;
            case 'Aggressive (+30% kcal)':
                calculatedCalories = TDEE * 1.3;
                break;
            case 'Very Aggressive (+40% kcal)':
                calculatedCalories = TDEE * 1.4;
                break;
            default:
                calculatedCalories = TDEE;
                break;
        }

        setTargetCalories(Math.round(calculatedCalories));
    };


    return (
        <div className='calories'>
            <h3>How Many Calories Do I Need To Eat?</h3>
            <h5><span>“How many calories should I eat?” </span>– There is no one-size fit all answer to that question. People come in all shapes and sizes and have different levels of activity and therefore calorie recommendations must be customised to each person. Our calculator is based on the results of peer reviewed scientific studies and is broken up into 4 sections to help provide you with the most accurate number of calories required to achieve your weight loss, muscle growth or fitness goals. Click the button below to go straight to our Calorie Calculator or continue reading to find out more about using our calculator and the topic of calories and weight loss.</h5>
            <Button variant="outline-warning">Calculate my Calorie targer now!!</Button>

            <div className="guide mt-5">
                <h3>Guide To Calculating Your Calorie Targets</h3>
                <h4>Step 1: "You"
                </h4>
                <h5>To accurately determine your daily calorie target, enter your current weight, age, height, and sex into the calculator. Values can be entered in both imperial and metric measurement systems.</h5>

                <h4>Step 2 (optional): “Body fat”</h4>
                <h5>This is an optional step but answering it may potentially increase the accuracy of the final result (particularly if you have a very low or very high level of body fat). If you are unsure of your body fat percentage you can use our body fat percentage calculator </h5>

                <h4>Step 3: “Your activity”</h4>
                <h5>Choose which option you believe is most accurate in terms of much exercise you get each week. It’s important to be honest with yourself here as this can have quite a big effect on the end calorie recommendation. This allows the calculator to calculate your Total Daily Energy Expenditure (TDEE)- the number of calories you need to consume to maintain your current body weight.</h5>

                <h4>Step 4: “Your target”</h4>
                <h5>This is the part where you decide whether you want your calorie recommendation to be for weight loss or weight gain. We highly suggest you begin with choosing the recommended option and monitor the results over the first 2 weeks. Going too aggressive to begin with might impact your ability to adhere to your diet plan and may even have negative effects on body fat or loss of lean tissue depending on what your goal is.</h5>
            </div>

            <div className="calorieCalculator mt-4">
                <h2>Calorie Calculator</h2>
                <h4>You</h4>
                <div className="you mb-5">
                    <h6>Complete the following form to estimate the amount of calories you should be consuming daily to meet your personal goals.</h6>
                    <div className="details">
                        <h4><span>Height:</span></h4>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><i class="bi bi-person-arms-up"></i></InputGroup.Text>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Feets</option>
                                <option value="2">Centimeter</option>
                            </Form.Select>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Height</InputGroup.Text>
                            <Form.Control
                                placeholder="Height"
                                type='number'
                            />
                        </InputGroup>


                        <h4><span>Weight:</span></h4>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><i class="bi bi-person-arms-up"></i></InputGroup.Text>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Lbs</option>
                                <option value="2">Kgs</option>
                            </Form.Select>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Weight</InputGroup.Text>
                            <Form.Control
                                placeholder="Weight"
                                type='number'
                            />
                        </InputGroup>

                        <h4><span>Age:</span></h4>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Age</InputGroup.Text>
                            <Form.Control
                                placeholder="Age"
                                type='number'
                            />
                        </InputGroup>

                        <h4><span>Gender:</span></h4>
                        <Form.Group>
                            <div>
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="gender"
                                    value="Male"
                                    checked={selectedGender === 'Male'}
                                    onChange={handleGenderChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="gender"
                                    value="Female"
                                    checked={selectedGender === 'Female'}
                                    onChange={handleGenderChange}
                                />
                            </div>
                        </Form.Group>
                        <p>Selected Gender: {selectedGender}</p>


                    </div>
                </div>


                <h4>Fat</h4>
                <div className="you mb-5">
                    <h6>This box is not compulsory but it may help improve the accuracy of the results.</h6>
                    <h6>If your bodyfat is 15%, simply type '15' into the box below.<span> Body fat percentage</span></h6>

                    <h4><span>Fat:</span></h4>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Fat %</InputGroup.Text>
                        <Form.Control
                            placeholder="Fat"
                            type='number'
                        />
                    </InputGroup>

                </div>

                <h4>Your Activity</h4>
                <div className="you mb-5">
                    <h6>How active are you? It is important to select the most suitable category for you here as this answer can significantly change the end result.</h6>
                    <h4><span>Activity Level</span></h4>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><i class="bi bi-activity"></i></InputGroup.Text>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Sedentary - Television or office work</option>
                            <option value="2">Light activity - Exercise workout or sports 1-3 days per week</option>
                            <option value="3">Moderate activity - Exercise workout or sports 3-5 days per week</option>
                            <option value="4">High activity - Exercise workout or sports 6-7 days per week</option>
                            <option value="5">Extreme activity - Exercise workout or sports two times per day</option>
                        </Form.Select>
                    </InputGroup>
                </div>


                <h4>Your Goal</h4>
                <div className="you mb-4">
                    <h6>If you are hoping to lose or put on weight, we suggest you opt to use the suggested option as a starting point to assess it's effectiveness before making any adjustments.</h6>
                    <h4><span>Choose your goal</span></h4>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><i class="bi bi-activity"></i></InputGroup.Text>
                        <Form.Select aria-label="Default select example">
                            <optgroup label='Fat Loss'>
                                <option value="1">Cautious (-10% kcal)</option>
                                <option value="2">Recommended (-20% kcal)</option>
                                <option value="3">Aggressive (-30% kcal)</option>
                                <option value="4">Very Aggressive (-40% kcal)</option>
                            </optgroup>
                            <optgroup label='Maintain'>
                                <option value="5">Maintain</option>
                            </optgroup>
                            <optgroup label='Weight Gain'>
                                <option value="6">Cautious (+10% kcal)</option>
                                <option value="7">Recommended (+20% kcal)</option>
                                <option value="8">Aggressive (+30% kcal)</option>
                                <option value="9">Very Aggressive (+40% kcal)</option>
                            </optgroup>
                        </Form.Select>
                    </InputGroup>
                </div>

                <h4>Target Daily Calorie Intake</h4>
                <div className="you mb-4">
                    <h6>Please note that this is simply an estimate and may need to be adapted depending on results (and changes in activity level and bodyweight).</h6>
                    <h4><span>Target Calories:</span> {targetCalories}</h4>
                    <Button variant="outline-primary" onClick={calculateCalories}>Calculate Calorie</Button>
                </div>
            </div>
        </div >
    )
}
