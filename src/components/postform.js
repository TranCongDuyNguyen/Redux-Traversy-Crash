import React, {Component} from 'react';
import {connect} from 'react-redux'; // change

import {addPost} from '../actions/postAction'; // change

class PostForm extends Component {
    state = {
        title: '',
        body: ''
    };

    onChange = this.onChange.bind(this);
    onSubmit = this.onSubmit.bind(this);

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const post = {
            ...this.state,
            title: this.state.title,
            body: this.state.body
        };
        
        this.props.addPost(post); //change
    }

    render(){
        const { title, body } = this.state;
        return <div>
            <h1>Add Post</h1>
            <form onSubmit = {this.onSubmit}>
                <div>
                    <label>Title: </label>
                    <input type="text" 
                            name ="title"
                            value = {title}
                            onChange = {this.onChange}></input>
                </div>
                <br/>
                <div>
                    <label>Body: </label>
                    <input type="body" 
                            name="body"
                            value = {body}
                            onChange = {this.onChange}></input>
                </div>
                <br/>
                <button type="submit">Submit</button>

            </form>
        </div>
    }
}

export default connect(null, {addPost})(PostForm); //change