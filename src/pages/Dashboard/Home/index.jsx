import React from 'react';
import {
  Switch,
  // Table
} from 'antd';
import { DashboardLayout } from '../../../layouts';
import Container from './styles';
import { AccountSummaryCard, SwapCard } from '../../../components/Dashboard';
// import { columns } from '../../../utils/tables';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleShowBalance,
  accountSelector,
} from '../../../redux/reducers/account';
// import { transferSelector } from '../../../redux/reducers/transfers';

const Index = () => {
  const dispatch = useDispatch();
  const { showBalance } = useSelector(accountSelector);
  // const { transfers } = useSelector(transferSelector);
  return (
    <DashboardLayout
      content={
        <Container>
          <h1>Dashboard</h1>
          <p>Quickly perform task from the dashboard or view reprots</p>
          <div className='wrapper'>
            <div className='column'>
              <div className='header'>
                <h3>ACCOUNT SUMMARY</h3>
                <div className='balance__group'>
                  <b>SHOW BALANCE</b>
                  <Switch
                    style={{ background: '#e24307' }}
                    onChange={() => dispatch(toggleShowBalance())}
                  />
                  {showBalance ? <b>ON</b> : <b>OFF</b>}
                </div>
              </div>
              <AccountSummaryCard />
            </div>
            <div className='column'>
              <SwapCard />
            </div>
          </div>
        </Container>
      }
    />
  );
};
export default Index;
