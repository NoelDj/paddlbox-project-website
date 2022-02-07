/*import next from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'*/
import React, { useEffect, useRef, useState } from 'react'
 import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function Home() {
    return (
          <main className="landing-page">
                    <section className="banner_area mb-md-5" style={{backgroundImage: 'url(background.jpg)', backgroundPosition:'center'}} id="hero">
                        <div className="booking_table d_flex align-items-center">
                          <div className="container">
                            <div className="banner_content text-center">
                              <h3>Welcome To Paddlbox</h3>
                              <h2>We Offer The Best Paddlboard Experiences</h2>
                              <h4>Book one of our paddleboards, whenever you feel like it!</h4>
                            </div>
                          </div>
                        </div>
                        <div className="hotel_booking_area position">
                          <div className="container">
                            <div className="hotel_booking_table">
                              <div className="col-md-12">
                                <div className="boking_table">
                                  <div className="row justify-content-center mb-4">
                                    <h2>Book Your Room</h2>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-2">
                                      <div className="book_tabel_item">
                                        <div className="form-group">
                                        <label className="label">Start</label>
                                          <div className="input-group date" id="datetimepicker11">
                                            
                                            <input type="date" className="form-control" placeholder="Start" />
                                            <span className="input-group-addon">
                                              <i className="fa fa-calendar" aria-hidden="true" />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <div className="book_tabel_item">
                                        <div className="form-group">
                                        <label className="label">End</label>
                                          <div className="input-group date" id="datetimepicker1">
                                            <input type="date" className="form-control" placeholder="Start" />
                                            <span className="input-group-addon">
                                              <i className="fa fa-calendar" aria-hidden="true" />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <div className="book_tabel_item select">
                                      <label className="label">Amount</label>
                                        <div className="form-group">
                                          
                                          <select className="wide">
                                            <option data-display="Amount">
                                             Choose amount
                                            </option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div className="book_tabel_item">
                                      <label className="label">Start</label>
                                        <div className="form-group">
                                          <select className="wide">
                                            <option data-display="Location">Location</option>
                                            <option value={1}>Amager Strand</option>
                                            <option value={2}>Han Klit Strand</option>
                                            <option value={3}>Grenaa Strand</option>
                                            <option value={4}>Blaavand Strand</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <label className="label" id="btn-label">x</label>
                                      <div className="book_tabel_item">
                                        <Link href="/cart">
                                          <a className="book_now_btn button_hover">Book Now</a>
                                        </Link>
                                        
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section id="locations">
                        <div className="container">
                          <div className="section_title text-center">
                            <h3 className="title_color">Available here</h3>
                            <h2 className="title_color">Find Paddlbox at these locations</h2>
                          </div>
                          <div className="row text-white">
                            <div className="col-lg-3 col-md-6 mb-4 px-3">
                              <div className="img-box">
                                <img src="https://live.staticflickr.com/3920/14458423981_a97c2de412_b.jpg" alt="Amager Strand" className="img-fluid" />
                                <h3>Amager Strand</h3>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 px-3">
                              <div className="img-box">
                                <img src="https://cdn.pixabay.com/photo/2018/05/28/21/58/he-dune-3437288_1280.jpg" alt="" className="img-fluid" />
                                <h3>Han Klit Strand</h3>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 px-3">
                              <div className="img-box">
                                <img src="https://live.staticflickr.com/3748/14299905941_ca517049c7_b.jpg" alt="" className="img-fluid" />
                                <h3>Grenaa Strand</h3>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 px-3">
                              <div className="img-box">
                                <img src="https://files.guidedanmark.org/files/468/88142_Blvand_Strand.jpg" alt="" className="img-fluid" />
                                <h3>Blaavand Strand</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="about_history_area section_gap" id="about" style={{background: 'url(hero.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundSize: 'contain'}}>
                        <div className="container p-5">
                          <div className="row">
                            <div className="col-md-6 d_flex align-items-center">
                              <div className="about_content">
                                <h2 className="title title_color">
                                  It's time to start your adventure
                                </h2>
                                <p>
                                Paddlebox is for everyone who wants a fun and different way to move, whether as a shared activity with family and friends, or alone.
                                </p>
                                
                                <h2 className="title title_color">How to Use</h2>
                                <ol>
                                  <li>Book your paddleboards beforehand</li>
                                  <li>You get a message with and id and a locker</li>
                                  <li>Open the locker</li>
                                  <li>Start paddling</li>
                                  <li>
                                    When you are finished, put the paddleboard back in the locker
                                    and close it.
                                  </li>
                                </ol>
                              </div>
                            </div>
                            <div className="col-md-6" />
                          </div>
                        </div>
                      </section>
                      <section className="latest_blog_area section_gap">
                        <div className="container">
                          <div className="section_title text-center">
                            <h2 className="title_color">Latest Updates</h2>
                          </div>
                          <div className="row mb_30">
                            <div className="col-lg-4 col-md-6">
                              <div className="single-recent-blog-post card">
                                <div className="thumb">
                                  <img className="img-fluid" src="./post.png" alt="post" />
                                </div>
                                <div className="details p-2">
                                  <a href="#">
                                    <h4 className="sec_h4">Monthly Update</h4>
                                  </a>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Minus, molestias!
                                  </p>
                                  <h6 className="date title_color">31st January, 2022</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="single-recent-blog-post card">
                                <div className="thumb">
                                <img className="img-fluid" src="./post2.png" alt="post" />
                                </div>
                                <div className="details p-2">
                                  <a href="#">
                                    <h4 className="sec_h4">Best Places To Visit During Summer</h4>
                                  </a>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Minus, molestias!
                                  </p>
                                  <h6 className="date title_color">10th February, 2022</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="single-recent-blog-post card">
                                <div className="thumb">
                                <img className="img-fluid" src="./post3.png" alt="post" />
                                </div>
                                <div className="details p-2">
                                  <a href="#">
                                    <h4 className="sec_h4">Our New App Has Launched</h4>
                                  </a>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Minus, molestias!
                                  </p>
                                  <h6 className="date title_color">21st February, 2022</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section id="video-section">
                        <div className="overlay" />
                        <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                          <source src="paddleboard.mp4" type="video/mp4" />
                        </video>
                        <div className="container h-100">
                          <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                              <h2 className="display-3">Learn How To Paddle</h2>
                              <h3>Watch this video and learn how to paddle</h3>
                              <Link href="/video">
                                 <a className="btn color-white" id="watch">Watch Now</a>
                               </Link>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div className="album py-5 bg-light">
                        <div className="container">
                          <div className="section_title text-center">
                            <h2 className="title_color">Testimonials</h2>
                          </div>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="card mb-4 box-shadow">
                                <div className="img-content d-flex justify-content-center p-4">
                                  <img className="card-img-top" src="person.jpg" />
                                </div>
                                <div className="card-body">
                                  <p className="card-text">
                                    "I love using paddlboards. It is very easy to rent." - John Doe
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card mb-4 box-shadow">
                                <div className="img-content d-flex justify-content-center p-4">
                                  <img className="card-img-top" src="person2.jpg" />
                                </div>
                                <div className="card-body">
                                  <p className="card-text">
                                    "I like trying Paddlbox. It is something very new for me" - Jane Doe
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card mb-4 box-shadow">
                                <div className="img-content d-flex justify-content-center p-4">
                                  <img className="card-img-top" src="person3.jpeg" />
                                </div>
                                <div className="card-body">
                                  <p className="card-text">
                                    "I will recommend this to my friends" - Riqui Puig
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <section className="container-fluid px-5 my-5">
                        <div className="row justify-content-center">
                          <div className="col-xl-10">
                            <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
                              <div className="card-body p-0">
                                <div className="row g-0">
                                  <div className="col-sm-6 d-flex justify-content-center align-items-center">
                                    <img src="boards.png" alt="" />
                                  </div>
                                  <div className="col-sm-6 p-4">
                                    <div className="text-left">
                                      <h2 className="d">Contact Us</h2>
                                      <h3 className="d">Do you have any questions or queries?</h3>
                                      <p className="mb-4 d">
                                        Then feel free to contact us. Feel free to use the form or
                                        send us a mail at: support@example.com.
                                      </p>
                                    </div>
                                    <form id="contactForm">
                                      <div className="form-floating mb-3">
                                        <label htmlFor="name">Name</label>
                                        <input className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
                                        <div className="invalid-feedback" data-sb-feedback="name:required">
                                          Name is required.
                                        </div>
                                      </div>
                                      <div className="form-floating mb-3">
                                        <label htmlFor="emailAddress">Email Address</label>
                                        <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                      </div>
                                      <div className="form-floating mb-3">
                                        <label htmlFor="message">Message</label>
                                        <textarea className="form-control" id="message" type="text" placeholder="Message" style={{height: '10rem'}} data-sb-validations="required" defaultValue={""} />
                                      </div>
                                      <div className="d-grid">
                                        <button className="btn btn-primary">Submit</button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
          </main>
  )
}