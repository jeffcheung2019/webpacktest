import React from 'react';
import './index.scss'

class Pages extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
    }
    render() {
        return <div className='pages-wrapper'>
            <div>page 1</div>
            <div>page 2</div>
            <div>page 3</div>
        </div>;
    }
}
export default Pages