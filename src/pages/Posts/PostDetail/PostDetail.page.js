import React, { Component } from 'react'
import { Row, Col, Form } from 'react-bootstrap'

export default class PostDetail extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <h2>Create new Posts</h2>
                        <Form>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" rows="3"></Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </div>
        )
    }
}
