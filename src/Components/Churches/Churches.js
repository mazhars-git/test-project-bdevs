import React from 'react';
import Church_pic from '../../images/temple.png';
import Church_logo from '../../images/temple_logo.png';

const Churches = () => {
    return (
        <section>
            <div className='container'>
                <div className='row py-5'>
                    <div className='col-md-6'>
                        <img className='img-fluid' src={Church_pic} alt="" />
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src={Church_logo} alt="" />
                        <h1>About Our
                            <br/>
                            AmericanChurches
                        </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div>
                            <a href="#">Get Involved</a>
                            <a href="#">Get Directions</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Churches;