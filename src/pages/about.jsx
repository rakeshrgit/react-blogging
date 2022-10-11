import React from 'react';
import aImg from "../images/about.jpg";
import "./scss/page.css";
const About = () => {
    return ( 
        <React.Fragment>
            <div className="container">
                <div className="page-bg">
                    <h1>ABOUT US</h1>
                    <div className="about-text text-start">
                        <img src={aImg} alt="img" className="float-end"/>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                        survived not only five centuries,<br/><br/>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking 
                        at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using<br/><br/>
                        Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem 
                        Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
                        have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.<br/><br/>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 
                        45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia<br/><br/>
                        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word 
                        in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum 
                        et Malorum" The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular 
                        during the Renaissance.
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default About;
