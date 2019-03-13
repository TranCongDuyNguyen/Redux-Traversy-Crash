import React, {Component} from 'react';
export const ReduxContext = React.createContext();

export class ReduxProvider extends Component {
    render(){
        return <ReduxContext.Provider value = {{}}>
            {this.props.children}
        </ReduxContext.Provider>
    }
}