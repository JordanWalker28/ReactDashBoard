import './App.css';
import CoinSelection from '../CoinSelection/Index';
import Dashboard from '../Dashboard/Index';
import { Component } from 'react';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Content from '../Shared/Content'
import styled from 'styled-components';

const AppLayout =  styled.div`
    padding: 40px;
`

class App extends Component {
  render(){
    return (
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Content>
            <CoinSelection/>
            <Dashboard/>
          </Content> 
        </AppProvider>
        </AppLayout>
    )
}}

export default App;
