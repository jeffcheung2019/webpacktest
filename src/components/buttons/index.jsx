import React from 'react';
import {logInfo} from '../../utils/helper'

class Buttons extends React.Component {
    constructor() {
        super();
    }


    render() {
        return <button onClick={()=> logInfo('button 1')}>button 1</button>
    }
}
export default Buttons