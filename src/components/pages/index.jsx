import React from 'react';
import './index.scss'
import config from 'utils/config.json'

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
            {
                JSON.stringify(config, null, 2)
            }
        </div>;
    }
}
export default Pages