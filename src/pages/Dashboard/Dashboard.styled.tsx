import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Card, Icon, Layout } from 'antd';

const { Content } = Layout;

export const StyledContent = styled(Content)`
  padding: 10px 24px;
  margin: 0;
  overflow: scroll;
`;

// cards
export const DashboardDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const StyledCard = styled(Card)`
  width: 23%;
  height: 120px;
  border-radius: 20px;
`;

export const CardSpan = styled.span`
  position: relative;
  top: -12px;
  color: white;
  cursor: pointer;
`;

// todayuser

export const OuterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 240px;
`;

export const UserDiv = styled.div`
  margin-top: 20px;
  height: 80%;
  width: 68%;
  border-radius: 20px;
  overflow: scroll;
`;

export const ChartDiv = styled.div`
  height: 90%;
  width: 30%;
`;
