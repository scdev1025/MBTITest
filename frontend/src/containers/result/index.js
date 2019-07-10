import React from "react";
import 'antd/dist/antd.css';
import { Layout, notification} from 'antd';
import { API } from "../../api/api";
import { Container } from "./style";
import Result from "../../components/result"
const { Content} = Layout;

export default class extends React.Component{

  state = {
    testresult: null
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.fetchData(params.id)
  }

  fetchData(id) {
    API.GET(`testcases/${id}/`)
    .then(({data}) => {
      this.setState({testresult: data})
    })
    .catch(err => {
      console.log(err)
      notification['error']({
        message:'Fail to load',
        description:`${err.response}`
      });
    })
  }

  render() {
    return (
      <Layout>
        <Content>
          <Container>
            <Result result={this.state.testresult ? this.state.testresult.result : null}/>
          </Container>
        </Content>
      </Layout>
    )
  }
}