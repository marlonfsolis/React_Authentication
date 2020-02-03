import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Posts extends Component {
    static propTypes = {
        posts: [],
        selectedPostId: '' 
    }

    render() {
        return (
            <div>
                <p>Post list</p>
            </div>
        )
    }
}
