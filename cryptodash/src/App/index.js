import './App.css';
import WelcomeMessage from './WelcomeMessage';
import { Component } from 'react';
import AppLayout from './AppLayout';

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
        <WelcomeMessage/> 
        {/* <MyButton>Hello</MyButton>
        <MyButton primary>Hello</MyButton>
        <TomatoButton>Hello</TomatoButton> */}
      </AppLayout>
    )
}}

export default App;
