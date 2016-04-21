function OutputMessage (data) {
    console.log(data);
    // alert(data);
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

exports.OutputMessage = OutputMessage;

exports.getSubString  = getSubString;