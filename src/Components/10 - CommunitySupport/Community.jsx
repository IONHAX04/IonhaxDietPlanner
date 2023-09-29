import React from 'react'
import Lottie from 'lottie-react'

import Navbar from '../00 - Navbar/Navbar.jsx'
import Footer from '../12 - Footer/Footer.jsx'

import './Community.css';

import community from '../../assets/images/Community/community.png'
import join from '../../assets/images/Community/join.png'
import qns from '../../assets/images/Community/why.png'
import support from '../../assets/images/Community/support.png'
import connected from '../../assets/images/Community/connected.png'



export default function Community() {
    return (
        <div>
            <Navbar />

            <div className="community-section">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Community and Support</h2>
                        <p>
                            The Community and Support feature is an essential part of our platform,
                            designed to help users connect, engage, and receive assistance on their
                            diet and fitness journey.
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <img
                            alt=""
                            src={community}
                            width="200"
                            height="200"
                            className="d-inline-block align-top mb-3 d-none d-lg-block"
                        />{' '}

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2">
                        <img
                            alt=""
                            src={join}
                            width="200"
                            height="200"
                            className="d-inline-block align-top mb-3 d-none d-lg-block"
                        />{' '}
                    </div>
                    <div className="col-lg-6">
                        <h2>Join Our Community</h2>
                        <p>
                            Our thriving community is a place where like-minded individuals come
                            together to support and motivate each other. Connect with people who
                            share similar goals, dietary preferences, and experiences.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <h2>Ask Questions and Share Experiences</h2>
                        <p>
                            Have a question about your diet plan or workout routine? Use our
                            community forum to ask questions and get answers from experienced users
                            and experts. Share your own experiences and insights to help others on
                            their journey.
                        </p>

                    </div>
                    <div className="col-lg-2">
                        <img
                            alt=""
                            src={qns}
                            width="200"
                            height="200"
                            className="d-inline-block align-top mb-3 d-none d-lg-block"
                        />{' '}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2">
                        <img
                            alt=""
                            src={support}
                            width="200"
                            height="200"
                            className="d-inline-block align-top mb-3 d-none d-lg-block"
                        />{' '}
                    </div>
                    <div className="col-lg-6">
                        <h2>Provide and Receive Support</h2>
                        <p>
                            We believe in the power of support. Our community is a safe space to
                            provide and receive encouragement, motivation, and inspiration. Whether
                            you're celebrating a milestone or facing a challenge, you're never
                            alone on your path to a healthier lifestyle.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <h2>Stay Connected</h2>
                        <p>
                            Stay connected with our community on the go. Our mobile app ensures
                            you're always a part of the conversation, even when you're not at your
                            computer.
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <img
                            alt=""
                            src={connected}
                            width="200"
                            height="200"
                            className="d-inline-block align-top mb-3 d-none d-lg-block"
                        />{' '}
                    </div>
                </div>


            </div>


            <Footer />
        </div>
    )
}
