import React, { Component } from 'react';
import {connect} from 'react-redux'

class UserHeader extends Component {
 
  render() { 
    const {user} = this.props
     if(!user) return <div>Loading...</div>
     
     return (<div>
        <div className="ui teal image label">
          {user.name}
          <div className="detail">Author</div>
        </div>
    </div>
     );
  }
}

const mapStateToProps = (state, ownProps) =>{
  return {user: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps)(UserHeader);