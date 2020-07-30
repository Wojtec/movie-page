import React, { Component } from 'react';
import { getPosts } from '../actions';

class Posts extends Component {

    static async getInitialProps() {
        const posts = await getPosts();

        return { posts }
    }

    render(){
        const { posts } = this.props;
        return(
            <div>
                <h1>
                    Im posts
                </h1>
                <ul>
                    { posts.map(post => 
                            <li key={post.id}>
                                <span>{post.id}: </span> <span>{post.title}</span>
                            </li>
                    )}
                </ul>
            </div>
    
        )
    }
}

export default Posts;