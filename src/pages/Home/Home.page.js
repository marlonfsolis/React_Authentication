import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>React app with authentication</h3>
                <p>This app will allow you to manage posts or read only if the user is not authenticated.</p>
                <p>We will be using:</p>
                <ul>
                    <li>react and react-dom</li>
                    <li>react-bootstrap</li>
                    <li>react-router</li>
                </ul>
            </div>
        )
    }
}
