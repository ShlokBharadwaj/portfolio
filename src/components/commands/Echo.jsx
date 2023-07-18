import { React, useContext } from 'react';
import _ from 'lodash';
import { termContext } from '../Terminal';

const Echo = ({ arg }) => {

    let outputStr = _.chain(arg)
        .join(' ')
        .trim(" '\"`")
        .value();

    return (
        <div>
            <h1>{outputStr}</h1>
        </div>
    );
};

export default Echo;
