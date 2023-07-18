import { React, useContext } from 'react';
import _ from 'lodash';
import { termContext } from '../Terminal';

const Echo = ({ arg }) => {

    // const { arg } = useContext(termContext);

    // let outputStr = _.join(arg, " ");
    // outputStr = _.trim(outputStr, "'");
    // outputStr = _.trim(outputStr, '"');
    // outputStr = _.trim(outputStr, "`");

    return (
        <div>
            <h1>{arg}</h1>
        </div>
    );
};

export default Echo;
