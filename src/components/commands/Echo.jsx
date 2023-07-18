import { React, useContext } from 'react';
import _ from 'lodash';
import { termContext } from '../Terminal';

const Echo = () => {

    const { arg } = useContext(termContext);

    let outputStr = _.join(arg, " ");
    outputStr = _.trim(outputStr, "'");
    outputStr = _.trim(outputStr, '"');
    outputStr = _.trim(outputStr, "`");

    return (
        <div>
            <h1>{outputStr}</h1>
        </div>
    );
};

export default Echo;
