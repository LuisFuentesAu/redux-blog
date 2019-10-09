import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchUser} from '../actions'

class UserHeader extends Component {
  
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() { 
    const {user} = this.props
     if(!user) return <div>Loading...</div>
     
     return (<div>
        <a className="ui teal image label" href="#">
          {user.name}
          <div className="detail">Author</div>
        </a>
    </div>
     );
  }
}

const mapStateToProps = (state, ownProps) =>{
  return {user: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps,{fetchUser})(UserHeader);