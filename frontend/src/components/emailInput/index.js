import React from 'react';
import { Input } from 'antd';
import { Container } from './style'

export default class extends React.Component {

  state={
    value:0
  }

  componentDidMount() {
  }

  getEmail() {
    return this.state.email
  }

  onChangeValue(e) {
    this.setState({value: e.target.value})
    if (this.props.onSelect) {
      this.props.onSelect(e.target.value)
    }
  }

  render() {
    return (
      <Container>
        <div className="title">Your Email</div>
        <div className="valueWrap">
          <Input type="email" placeholder="you@example.com" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
          {this.props.error && 
            <div className="error">*Please input valid email</div>
          }          
        </div>
      </Container>
    )
  }
}