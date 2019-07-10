import React from 'react';
import { Radio } from 'antd';
import { Question } from './style'

export default class extends React.Component {

  state={
    value:0
  }

  componentDidMount() {
  }

  onChangeValue(e) {
    this.setState({value: e.target.value})
    if (this.props.onSelect) {
      this.props.onSelect(e.target.value)
    }
  }

  render() {
    return (
      <Question>
        <div className="title">{this.props.question}</div>
        <div className="valueWrap">
          <span className="disagree">Disagree</span>
          <Radio.Group onChange={this.onChangeValue.bind(this)} value={this.state.value}>
            <Radio value={1}></Radio>
            <Radio value={2}></Radio>
            <Radio value={3}></Radio>
            <Radio value={4}></Radio>
            <Radio value={5}></Radio>
            <Radio value={6}></Radio>
            <Radio value={7}></Radio>
          </Radio.Group>
          <span className="agree">Agree</span>
        </div>
        {this.props.error && 
          <div className="error">*Please select answer</div>
        } 
      </Question>
    )
  }
}