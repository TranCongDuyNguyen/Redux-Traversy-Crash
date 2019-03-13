import React, { Component  } from 'react';
import {connect} from 'react-redux';

import {fetchPosts} from '../actions/postAction';

class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render(){
        const { posts } = this.props;
        return <div>    
            <h1>Posts</h1>
            {posts.map( post => (
                <div key = {post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    }
}

    const mapStateToProps = state => ({
        posts: state.posts.items, // map this.props.posts with state.posts.items ("posts" come from field key in combineReducers)
        newPost : state.posts.item
    })

    export default connect(mapStateToProps, { fetchPosts })(Posts);
