import React from 'react';
import { AppName } from '../App';

const styles = {
    fontSize: '32px',
    textAlign: 'center',
    color: 'black',
    fontWeight: 700
}

export default function CompC() {
    return (
        <AppName.Consumer>
            {(appName) =>
                <h3 style={styles}> {appName} </h3>
            }
        </AppName.Consumer>
    )
}
