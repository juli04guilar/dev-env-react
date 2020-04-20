import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
     state = {
         greeting : 'Hello'
     }
     asyncFunc = ()=>{
         return Promise.resolve('using promise');
     }
     async componentDidMount(){
         this.setState({
            greeting : await this.asyncFunc()
         })
     }
     render(){
     return <div> {this.state.greeting}</div>
     }
}
export default App;

ReactDOM.render(<App/>,
    document.getElementById('root'));