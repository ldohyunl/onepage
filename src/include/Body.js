const Body = () =>  {
    return(
        <>
        <article className="slider">
            <img src="images/p-images/slide01.jpg" alt="slideimage"></img>
        </article>
        <section className="content">
            <section className="display-section">
                <div className="container">
                    <h2 className="sec-tit">
                        WE ARE
                    </h2>
                    <p className="desc">
                        Pariatur deserunt nulla quis quis tempor velit quis magna. Non id dolor quis id aliquip incididunt Lorem deserunt excepteur dolor pariatur in ullamco pariatur. Dolore labore excepteur ipsum reprehenderit incididunt ipsum eu in mollit proident. Irure reprehenderit dolore sint officia laboris adipisicing labore. Mollit consectetur culpa consectetur eiusmod est ullamco consequat. Esse in ad elit excepteur id sint quis eiusmod sit sunt non laboris.
                    </p>
                </div>
            </section>

            <section className="promotion-section">
                <div className="container">
                    <ul className="promo-list">
                        <li>
                            <a href="#">
                                <img src="images/s-images/promo01.png" alt=""></img>
                                <h3>HOME</h3>
                                <p>Adipisicing et Lorem velit do enim.</p>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="images/s-images/promo02.png" alt=""></img>
                                <h3>WE ARE</h3>
                                <p>Adipisicing et Lorem velit do enim.</p>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="images/s-images/promo03.png" alt=""></img>
                                <h3>WORK</h3>
                                <p>Adipisicing et Lorem velit do enim.</p>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="images/s-images/promo04.png" alt=""></img>
                                <h3>BLOG</h3>
                                <p>Adipisicing et Lorem velit do enim.</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <hr className="divider"/>

            <section className="work-section cfixed">
                <h2 className="sec-tit">WORK</h2>
                <ul className="work-list">
                    <li>
                        <a href="#">
                            <div className="info">
                                <h3>Running</h3>
                                <span>WEB/PRINT</span>
                            </div>
                            <img src="images/p-images/work01.jpg" alt=""></img>
                        </a>
                    </li>
                    
                    <li>
                        <a href="#">
                            <div className="info">
                                <h3>Rugby</h3>
                                <span>WEB/PRINT</span>
                            </div>
                            <img src="images/p-images/work02.jpg" alt=""></img>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <div className="info">
                                <h3>Weight</h3>
                                <span>WEB/PRINT</span>
                            </div>
                            <img src="images/p-images/work03.jpg" alt=""></img>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <div className="info">
                                <h3>Marathon</h3>
                                <span>WEB/PRINT</span>
                            </div>
                            <img src="images/p-images/work04.jpg" alt=""></img>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="info">
                                <h3>Boxing</h3>
                                <span>WEB/PRINT</span>
                            </div>
                            <img src="images/p-images/work05.jpg" alt=""></img>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <div className="info">
                                <h3>Ice Hockey</h3>
                                <span>WEB/PRINT</span>
                            </div>
                            <img src="images/p-images/work06.jpg" alt=""></img>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <div className="info">
                                <h3>Skate Board</h3>
                                <span>WEB/PRINT</span>
                            </div>
                            <img src="images/p-images/work07.jpg" alt=""></img>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <div className="info">
                                <h3>Basketball</h3>
                                <span>WEB/PRINT</span>
                            </div>
                            <img src="images/p-images/work08.jpg" alt=""></img>
                        </a>
                    </li>
                </ul>
            </section>

            <hr className="m-divider"/>
            
            <section className="blog-section">
                <div className="container">
                    <h2 className="sec-tit">BLOG</h2>
                    <ul className="blog-list">
                        <li>
                            <a href="#">
                                <img src="images/p-images/blog01.jpg" alt=" "/>
                            </a>
                            <time dateTime="2023-05-10">
                                May 10, 2023
                            </time>
                            <a href="#">
                                <h3>
                                Sunt voluptate excepteur velit est officia consectetur aute fugiat irure commodo.
                                </h3>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="images/p-images/blog02.jpg" alt=" "/>
                            </a>
                            <time dateTime="2023-05-10">
                                May 10, 2023
                            </time>
                            <a href="#">
                                <h3>
                                Sunt voluptate excepteur velit est officia consectetur aute fugiat irure commodo.
                                </h3>
                            </a>
                        </li>
                        
                        <li>
                            <a href="#">
                                <img src="images/p-images/blog03.jpg" alt=" "/>
                            </a>
                            <time dateTime="2023-05-10">
                                May 10, 2023
                            </time>
                            <a href="#">
                                <h3>
                                Sunt voluptate excepteur velit est officia consectetur aute fugiat irure commodo.
                                </h3>
                            </a>
                        </li>

                    </ul>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <h2 className="sec-tit">CONTACT</h2>

                    <div className="form-box">
                        <from action="ex.jx" method="post"> 
                            <fieldset className="cfixed">

                            <legend className="blind">
                                CONTACT US
                            </legend>

                            <div className="form">
                                <label for="name" className="blind">
                                    name
                                </label>
                                <input type="text" id="name" placeholder="Name"/>

                                <label for="phone" className="blind">
                                    phone
                                </label>
                                <input type="tel" id="phone" placeholder="Phone"/>
                                <label for="email" className="blind">
                                    name
                                </label>
                                <input type="email" id="email" placeholder="Email Address"/>

                            </div>

                            <div className="textarea">
                                <label for="message" className="blind">
                                    message
                                </label>
                                <textarea name="message" id="message" placeholder="Message"/>
                            </div>
                            
                            <div className="send-btn">
                                <button>SEND MESSAGE</button>
                            </div>



                            </fieldset>
                        </from>
                    </div>
                </div>

            </section>
        </section>
        </>
    )
}
export default Body;