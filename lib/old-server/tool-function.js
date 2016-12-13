function OutputMessage (data) {
    // console.log(data);
}

function getSubString(originData, startCharValue, endCharValue) {
    var subString = "";
    var startPos;
    for (startPos = 0; startPos < originData.length;++startPos) {
        if (originData[startPos] === startCharValue) break;
    }
    var endPos;
    for (endPos = startPos+1; endPos < originData.length;++endPos) {
        if (originData[endPos] === endCharValue) break;
    }
    
    if (startPos < originData.length && endPos < originData.length) {
        subString = originData.substring(startPos+1, endPos);
    }
    
    return subString;
}

function MinusTime(curTime, timeInterval) {
    // console.log ('curTime: ' + curTime);
    // console.log ('timeInterval: ' + timeInterval);

    var timeArray = curTime.split(':');
    for (var i = 0; i < timeArray.length; ++i) {
        timeArray[i] = parseInt(timeArray[i]);
    }

    // console.log(timeArray);

    var timeSum = timeArray[0] * 60 * 60 + timeArray[1]*60 + timeArray[2] - timeInterval;
    timeArray[0] = Math.floor(timeSum / (60*60));
    timeArray[1] = Math.floor((timeSum - timeArray[0] * 60 * 60) / 60);
    timeArray[2] = timeSum - timeArray[0] * 60 * 60 - timeArray[1] * 60;

    for (var i = 0; i < timeArray; ++i) {
        timeArray[i] = timeArray[i].toString();
    }

    // console.log(timeArray);

    return timeArray.join(':');
}

function transID(originalData) {
    var dataArray = originalData.split('.');
    var Object = {};

    Object.AttrType = dataArray[dataArray.length-1];
    Object.ObjectID = originalData.substring(0, originalData.length - Object.AttrType.length-1);
    return Object;
}

exports.transID = transID;

exports.MinusTime = MinusTime;

exports.OutputMessage = OutputMessage;

exports.getSubString  = getSubString;