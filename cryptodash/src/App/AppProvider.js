import React from 'react';

const cc = require ('cryptocompare');
const API_KEY = `${process.env.REACT_APP_API_KEY}`
cc.setApiKey(API_KEY)

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'Dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavourites: this.confirmFavourites
        }
    }

    componentDidMount = () => {
        this.fetchCoins();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
        console.log(coinList);
    }

    confirmFavourites = () => {
        this.setState({
            firstVisit: false,
            page: 'Dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello'
        }));
    }

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoDashData){
            return {page: 'Settings', firstVisit: true}
        }
        return {};
    }

    setPage = page => this.setState({page})

    render(){
        return (
            <AppContext.Provider value ={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}