import React from 'react'

export const formatTime = timeInMs => {
    var millis = padZeros((timeInMs / 10) % 100)
    var secs = parseInt((timeInMs/1000) % 60)
    var mins = parseInt((timeInMs / 60000) % 60);
    if (mins !== 0) {
        return mins + ':' + secs + '.' + millis;
    }else{
        return secs + '.' + millis
    }
}

export const padZeros = num => {
    let numStr = parseInt(num).toString();
    if (numStr.length < 2) {
        return "0" + numStr;
    }
    return numStr;
}

