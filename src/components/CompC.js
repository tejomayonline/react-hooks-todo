import React, { useContext } from 'react';
import { AppName } from '../App';

const styles = {
    fontSize: '32px',
    textAlign: 'center',
    color: 'black',
    fontWeight: 700,
    padding: '8px'
}

export default function CompC() {
    const appName = useContext(AppName);
    return (

        <h3 style={styles}> {appName.name} </h3>
     
    )
}
