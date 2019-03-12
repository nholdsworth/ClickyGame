import React from 'react';
import { Row } from 'react-bootstrap';
// import './TitleComponent/TitleComponent.css'

const TitleComponent = (props) => {
    return (

        <div className='TitleComponent'>

            <Row>
                <h1>CLICKY GAME!</h1>
            </Row>

            <Row>
                <h3>Click on an image to earn points but don't click any image more than once!!</h3>
            </Row>

        </div>

    )
};

export default TitleComponent;