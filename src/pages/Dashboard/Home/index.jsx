import React from 'react';
import { DashboardLayout } from '../../../layouts';
import Container from './styles';
import { SwapCard } from '../../../components/Dashboard';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCryptoList } from '../../../redux/actions/dashboard';

const Index = () => {
  return (
    <DashboardLayout
      content={
        <Container>
          <h1>Dashboard</h1>
          <p>Quickly perform task from the dashboard or view reprots</p>
          <div className='wrapper'>
            <SwapCard />
          </div>
        </Container>
      }
    />
  );
};
export default Index;
