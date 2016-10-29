import React from 'react';
import ReactDom from 'react-dom';

class Layout extends React.Component {
    render() {
        return (
            <h1 className="text-center">Enjoy dev with React and Webpack.</h1>
        );
    }
}

const app = document.getElementById('app');

ReactDom.render(<Layout/>, app);