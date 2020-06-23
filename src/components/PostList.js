import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            posts: [],
            errorMsj : ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data);
                this.setState({posts: response.data});
            })
            .catch(error => {
                this.setState({errorMsj : "error al cargar los datos"})
                console.log(error);
            });
    }

    render() { 
        const {posts,errorMsj} = this.state;
        
        return ( 
            <div>
                Postlist
                { posts.length ? posts.map(post => <div key={post.id}> {post.title} </div>) : null }
                { errorMsj ? <div>{errorMsj}</div> : null }
            </div> 
        );
    }
}
 
export default PostList;