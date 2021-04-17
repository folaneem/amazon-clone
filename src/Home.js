import React from 'react'
import "./Home.css"
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="./images/home.jpg" alt=""/>

                <div className="home__row">
                 <Product
                 id="12321341" 
                 title="The lean startup: How Constant
                  InnovationCreates Radically Successful
                 Businesses Paperback"
                 price={29.99}
                 rating={5}
                 image="./images/startup.jpg"
                 />

                 <Product
                 id="49538094"
                 title="Kenwood kMix Stand Mixer for
                  Baking, Stylish  Kitchen Mixer with
                  K-beater, Dough Hook and Whisk, 5 Litre
                  GlassBowl"
                  price={239.99}
                  image="./images/mixer.jpg"
                  rating={4}
                  />
               
                </div>

                <div className="home__row">
                <Product
                id="4903850"
                title="Samsung LC49RG90S5UXEN 49' 
                Curved LED Gaming Monitor"
                 price={199.99}
                 image="./images/monitor.jpg"
                 rating={3}/>

                <Product
                id="23445930"
                title="Amazon Echo (3rd generation) |
                 Smart speaker with Alexa, Charcoal Fabric"
                 price={98.99}
                 image="./images/speaker.jpeg"
                 rating={5}/>

                <Product
                id="325435637"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi,
                    128GB) - Silver (4th Generation)"
                 price={598.99}
                 image="./images/ipad.jpg"
                 rating={4}/>
                </div>

                <div className="home__row">
                <Product id="325435637"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                 price={598.98}
                 image="./images/samsung.jpg"
                 rating={4}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
