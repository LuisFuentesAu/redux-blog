import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class PostList extends Component {

  componentDidMount() {
    //Action creator -> return an action = {type: "", payload: data}
    this.props.fetchPosts();
  }

  render() { 
    return ( 
      <div>PostList</div>
     );
  }
}
 
export default connect(null, {fetchPosts})(PostList);