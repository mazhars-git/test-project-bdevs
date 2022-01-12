import React from 'react';
import Icon_1 from '../../images/f_1.png';
import Icon_2 from '../../images/f_2.png';
import Icon_3 from '../../images/f-3.png';
import Icon_4 from '../../images/f_4.png';
import Icon_5 from '../../images/f_5.png';
import Icon_6 from '../../images/f_6.png';
import FeatureInfo from './FeatureInfo';
import '../Css/Features.css';

const Features = () => {
    const featureInfos = [
        {
            icon: Icon_1,
            title: 'Free, simple setup', 
            details: 'Consectetur adipisicing elit, sed do eiusmod tempor it incididunt ut labore.'
        },
        {
            icon: Icon_2,
            title: 'Easy to edit', 
            details: 'Consectetur adipisicing elit, sed do eiusmod tempor it incididunt ut labore.'
        },
        {
            icon: Icon_3,
            title: 'Free customize', 
            details: 'Consectetur adipisicing elit, sed do eiusmod tempor it incididunt ut labore.'
        },
        {
            icon: Icon_4,
            title: 'Unlimited features', 
            details: 'Consectetur adipisicing elit, sed do eiusmod tempor it incididunt ut labore.'
        },
        {
            icon: Icon_5,
            title: '24/7 support', 
            details: 'Consectetur adipisicing elit, sed do eiusmod tempor it incididunt ut labore.'
        },
        {
            icon: Icon_6,
            title: 'Free images', 
            details: 'Consectetur adipisicing elit, sed do eiusmod tempor it incididunt ut labore.'
        }
    ]
    return (
        <section>
            <div className="container py-5">
                <div className='feature-header pt-4'>
                    <p className="semi-heading">Features</p>
                    <h1 className="heading text-center pb-5">Let's make the world <br/>
                        better, together
                    </h1>
                </div>

                <div className='row pb-4'>
                    {
                        featureInfos.map(f_data => <FeatureInfo info={f_data}></FeatureInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;