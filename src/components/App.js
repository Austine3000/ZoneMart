import React, {PropTypes} from 'react';
import Header from './common/Header';
   
class App extends React.Component {
    render() {
        return (
            <div>
                <Header/> 
                {this.props.children}
            </div>
        );
    }
}

App.PropTypes = {
    children: PropTypes.object.isRequired
}

export default App;