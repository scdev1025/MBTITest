import styled from 'styled-components';

export const HomeDiv =  styled.div`  
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    color: #113264;
  }
  .subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    color: #495057;
  }
  .questions {
    margin-top:48px;
    text-align: center;  
    justify-content: center;
    display: grid;  
  }
  .buttonWrap {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 150px;
      background: #3D59FA;
    }
  }
`