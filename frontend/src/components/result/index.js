import React from 'react';
import { Radio, Row, Col } from 'antd';
import { Container } from './style'

export default class extends React.Component {

  state={
    value:0,
    labels: [['Introversion (I)', 'Extraversion (E)'],
      ['Sensing (S)', 'Intuition (N)'],
      ['Thinking (T)', 'Feeling (F)'],
      ['Judging (J)', 'Perceiving (P)'],
    ],
    abbs: ['I', 'S', 'T', 'J']
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
    const {abbs} = this.state;
    return (
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={24} className="titleWrap">
            <div className="title">Your Perspective</div>
            <div className="subtitle">Your Perspective Type is {this.props.result}</div>
          </Col>
          <Col lg={12} md={12} sm={12} xs={24}>
            {this.props.result && 
              this.props.result.split('').map((c, index) => (
                <Row key={`${index}`} className="result">
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <span className="direction">{this.state.labels[index][0]}</span>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="resultWrap">
                      <div className={abbs[index] === c ? "leftResult selected" : "leftResult"}></div>
                      <div className={abbs[index] !== c ? "rightResult selected" : "rightResult"}></div>
                    </div>                    
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <span className="direction">{this.state.labels[index][1]}</span>
                  </Col>
                </Row>
              ))
            }
          </Col>
        </Row>        
      </Container>
    )
  }
}