import { Card } from 'antd';
import styled from 'styled-components';

export const Container = styled(Card)`
  max-width: 740px;
  padding-left: 50px;
  padding-right: 50px;
  .disagree {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #FA4344;
  }
  .agree {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #00A079;
  }
  .ant-radio {
    padding-left: 10px;
    padding-right: 10px;
  }
  .valueWrap {
    margin-top: 10px;
  }
  .title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
  }
  .error {
    color: red;
    text-align: left;
  }
`