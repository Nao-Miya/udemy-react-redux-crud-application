import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//import {postEvent} from '../actions'


class EventsNew extends Component{
  render(){
    //const props = this.props
    return (
      <React.Fragment>
          <div>foo</div>
      </React.Fragment>
    )
  }
}


//const mapDispatchToProps =({postEvents})

export default connect(null, null)(EventsNew)


