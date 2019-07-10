import { Card } from 'antd';
import styled from 'styled-components';

export const Container = styled(Card)` 
  padding: 40px;
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    color: #113264;
  }
  .subtitle {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #343A40;
  }
  .direction {
    width: 150px;
    height: 35px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #878787;
  }
  .ant-row {
    display: flex;
    align-items: center;
  }
  .result {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .resultWrap {
    display: flex;
    background: #E9ECEF;
    height: 18px;
    margin-left: 16px;
    margin-right: 16px;
    border-radius: 4px;    
  }
  .leftResult {
    width: 50%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .rightResult {
    width: 50%;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .selected {
    background: #A920CB;
  }
`