import React, { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';

import '../Calculator.css';

export default function Fat() {
  const [selectedGender, setSelectedGender] = useState('');
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <div>
      <div className="fat">
        <h3>Body Fat Calculator</h3>
        <h5>For anyone, knowing how much body fat they have when dieting can be really useful information in the setting of goals and tracking progress. However, calculating body fat percentage is somewhat more difficult than just simply measuring body weight.</h5>
        <h5>So, use our calculator to find out how much body fat you have. Our calculator is based on peer-reviewed studies and, although an estimation, it provides a good indication of what your body fat percentage is.</h5>

        <Button variant="outline-warning">Estimate My Body Fat Percentage</Button>

        <div className="guide mt-5">
          <h3>A Quick Guide To Understanding Body Fat</h3>
          <h5><span>What is body fat and why is it important?</span></h5>
          <h5>There is a common misconception that all body fat is bad but in fact, fat serves a number of important functions in the body. The scientific name for body fat is ‘adipose tissue’. Its primary function is to store lipids from food, which the body can then use to create energy; adipose tissue is also required to secrete a number of essential hormones.</h5>

          <h5>There are three different types of body fat:</h5>
          <h5><span>Essential body fat</span></h5>
          <h5>Needed to protect the body from diseases and physically protect organs from bruising damage.</h5>

          <h5><span>Reserve body fat</span></h5>
          <h5>Additional fat that presents no risk to health but rather provides a store of fuel for the body to use when needed.
          </h5>

          <h5><span>Excess body fat</span></h5>
          <h5>Body fat in excess of essential and reserve body fat, which can lead to serious health problems such as heart disease and diabetes.</h5>

          <h4><span>Why is having excess body fat a bad thing?</span></h4>
          <h5>Excess body fat introduces the risk of generating serious health issues. Some of the most common health problems are seen in people who are overweight or obese, including high blood pressure, high cholesterol, and type 2diabetes.</h5>
          <h5>Excess fat carried around the abdomen (abdominal fat) is directly linked with higher total cholesterol and LDL (‘bad’) cholesterol, which has the potential to clog arteries, leading to a heart attack or stroke. Excess abdominal fat is also dangerous because it is closely located to the portal vein, which carries blood from the intestinal area to the liver. Substances released by body fat, including free fatty acids, enter the portal vein and travel to the liver, where they can impede its function. Abdominal fat can, however, be easily reduced through healthy diet and regular exercise.</h5>


          <h4><span>How can I measure body fat?</span></h4>
          <h5>Specific techniques must be used to measure body fat. The U.S. Navy have established a useful and straightforward method, which takes into account the differences in body fat accumulation between men and women:</h5>
          <ul>
            <li>Measure the circumference of the waist at a horizontal level around the navel for men, and at the level with the least width for women.</li>
            <li>Measure the circumference of the neck, start below the larynx with the tape sloping lightly downward to the front.</li>
            <li>For women only: measure the circumference of the hips, at the largest horizontal measure.</li>
            <li>Insert the measurements into the My Diet Meal Plan calculator for the result.</li>
          </ul>
          <h5>This method is a guide, and more accurate body fat calculations can be made using callipers and DEXA scans.</h5>


          <h4><span>What is body fat percentage?</span></h4>
          <h5>Example:</h5>
          <h5>A 155-pound female who has a body fat percentage of 30% would have 46.5 pounds of fat tissue, with the remaining 108.5 pounds of body weight being drawn from muscle, bone, nervous, skin, and other tissues.</h5>
          <h5>Body fat percentage usually relates to fitness level and can be a better indicator of health than BMI.</h5>

          <h4><span>Why is it helpful to track body fat percentage?</span></h4>
          <h5>Measuring and tracking body fat percentage is useful for a number of reasons.</h5>
          <ul>
            <li>Knowing your body fat percentage is important when formulating accurate total daily energy expenditure (TDEE).</li>
            <li>If you are flexible dieting, you likely aim is to decrease fat mass and increase muscle mass; therefore tracking body fat percentage is an ideal way to keep track on progress.</li>
            <li>Knowing your body fat percentage will help you establish a realistic and healthy goal weight.</li>
          </ul>


          <div className="calorieCalculator mt-5 mb-3">
            <h2>Body Fat Calculator</h2>
            <h4>You</h4>
            <div className="you mb-5">
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

            <h4>Body Fat</h4>
            <div className="you mb-5">
              <h4>Estimate your body fat percentage.</h4>

              <h4><span>Height:</span></h4>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Height</InputGroup.Text>
                <Form.Control
                  placeholder="Height"
                  type='number'
                />
              </InputGroup>

              <h4><span>Waist:</span></h4>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Waist</InputGroup.Text>
                <Form.Control
                  placeholder="Waist"
                  type='number'
                />
              </InputGroup>

              <h4><span>Hip:</span></h4>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Hip</InputGroup.Text>
                <Form.Control
                  placeholder="Hip"
                  type='number'
                />
              </InputGroup>

              <h4><span>Neck:</span></h4>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Neck</InputGroup.Text>
                <Form.Control
                  placeholder="Neck"
                  type='number'
                />
              </InputGroup>
            </div>

            <h4>Calculate Fat Percentage</h4>
            <div className="you">
              <h4><span>Body Fat</span></h4>
              <div className="calculateFat"> </div>
              <Button variant="outline-primary">Calculate Fat</Button>{' '}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
