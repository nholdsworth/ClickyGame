import React from 'react'
import { Row, Col, Navbar } from 'react-bootstrap';

const navbar = (props) => {
    return (
        <Navbar sticky='top' className='navbar'>

            <Row>

                <Col>
                    <h3>
                        Clicky Game
                    </h3>
                </Col>

                <Col>
                    <p>
                        {props.message}
                    </p>
                </Col>

                <Col id='scores-display'>
                    <p>
                        Score: {props.score}           Top Score:
                    </p>
                </Col>

            </Row>

        </Navbar>

    )
}

export default navbar;