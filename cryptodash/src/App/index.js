import './App.css';
import Settings from '../Settings/Index';
import Dashboard from '../Dashboard/Index';
import { Component } from 'react';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Content from '../Shared/Content'
// const MyButton = styled.div`
//   color: green;

//   ${props => props.primary && css`
//     color: palevioletred;
//   `}
// `

// const TomatoButton = styled(MyButton)`
//   color: tomato;
//   border-color: tomato;
// `;

class App extends Component {
  render(){
    return (
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Content>
            <Settings/>
            <Dashboard/>
          </Content> 
          {/* <MyButton>Hello</MyButton>
          <MyButton primary>Hello</MyButton>
          <TomatoButton>Hello</TomatoButton> */}
        </AppProvider>
      </AppLayout>
    )
}}

export default App;
