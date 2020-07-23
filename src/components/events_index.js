import React, {Component} from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'

import {readEvents} from '../actions'


class EventsIndex extends Component{
  //コンポーネントが呼ばれた時に発生するイベント
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents(){
    console.log(this.props.events)
    return _.map(this.props.events, event => (
      <tr key={event.id}>
         <td>{event.id}</td>
         <td>{event.title}</td>
         <td>{event.body}</td>
      </tr>
    ))
  }
  render(){
    //const props = this.props
    return (
       <table>
          <thead>
            <tr>
               <th>ID</th>
               <th>Title</th>
               <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
       </table>
    )
  }
}

//State情報をPropsとして扱うことができる
const mapStateToProps = state => ({events:state.events})

//Action関数をPropsとして扱うことができる
const mapDispatchToProps =({readEvents})

//connectでstateとactions(actionsではgetのリクエストを投げている)との関連付けを行う
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)


