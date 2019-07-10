import React from "react";
import 'antd/dist/antd.css';
import { Layout, Button, notification} from 'antd';
import { API } from "../../api/api";
import Question from "../../components/question"
import EmailInput from "../../components/emailInput"
import { HomeDiv } from "./style";
import { Utils } from "../../utils";
const { Content} = Layout;

export default class extends React.Component{

  state = {
    questions: ["You find it takes effort to introduce yourself to other people.",
      "You consider yourself more practical than creative.",
      "Winning a debate matters less to you than making sure no one gets upset.",
      "You get energized going to social events that involve many interactions.",
      "You often spend time exploring unrealistic and impractical yet intriguing ideas.",
      "Deadlines seem to you to be of relative rather than absolute importance.",
      "Logic is usually more important than heart when it comes to making important decisions.",
      "Your home and work environments are quite tidy.",
      "You do not mind being at the center of attention.",
      "Keeping your options open is more important than having a to-do list.",
    ],
    answers: {},
    validations: {},
    invalidEmail: false,
    loading: false
  }

  onSelectQuestion(index, value) {
    const {answers} = this.state;
    answers[`answer${index + 1}`] = value;
    this.setState({answers})
  }

  onValidation() {
    const {answers, validations} = this.state;
    var invalid = false
    for (var i = 1;i<=10;i++) {
      if (!answers[`answer${i}`]) {
        validations[`answer${i}`] = true
        invalid = true
      } else {
        validations[`answer${i}`] = false
      }
    }
    this.setState({validations})
    return invalid
  }

  onSave() {
    if (this.onValidation()) {
      notification['error']({
        message:'Invaild Input',
        description:'Please input valid answers and email address'
      });
      return;
    }
    const email = this.emailInput.getEmail()
    if (!Utils.validationEmail(email)) {
      this.setState({invalidEmail:true});
      return;
    }
    this.setState({invalidEmail:false, loading: true});

    // send api
    var result = Utils.calculateResult(this.state.answers);
    API.POST('testcases/', {...this.state.answers, email, result})
    .then(({data}) => {
      this.setState({loading: false})
      this.props.history.push(`result/${data.id}`)
    })
    .catch(err => {
      console.log(err.response)
      notification['error']({
        message:'Fail to push',
        description:'Cannot save the data. Please try again later'
      });
    })
  }

  render() {
    return (
      <Layout>
        <Content>
          <HomeDiv>
            <div className="title">Discover Your Perspective</div>
            <div className="subtitle">Complete the 7 min test and get a detailed report of your lenses on the world.</div>
            <div className="questions">
              {
                this.state.questions.map((question, index) => (
                  <Question
                    key={`${index}`}
                    question={question}
                    error={this.state.validations[`answer${index + 1}`]}
                    onSelect={(value) => this.onSelectQuestion(index, value)}
                  />
                ))
              }
              <EmailInput ref={ref => this.emailInput = ref} error={this.state.invalidEmail}/>              
            </div>
            <div className="buttonWrap">
              <Button type="primary" onClick={this.onSave.bind(this)} loading={this.state.loading}>Save &amp; Continue</Button>
            </div>
          </HomeDiv>
        </Content>
      </Layout>
    )
  }
}