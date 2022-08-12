module.exports = function toReadable(number) {
    let numberToStr = String(number);
    let below10 = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
    };
    let below20 = {
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    };
    let below100 = {
        10: 'ten', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
    };

    if (numberToStr.length === 1) {
        return (below10[number]);
    };

    if ((numberToStr.length === 2) && (numberToStr[0] === '1')) {
        return (below20[number]);
    } else if ((numberToStr.length === 2) && (numberToStr[1] === '0')) {
        return (below100[number]);
    } else if (numberToStr.length === 2) {
        return (below100[numberToStr[0] + '0'] + ' ' + below10[numberToStr[1]]);
    };


    if ((numberToStr.length === 3) && (numberToStr[1] === '0') && (numberToStr[2] === '0')) {
        return (below10[numberToStr[0]] + ' hundred');
    }
    else if ((numberToStr.length === 3) && (numberToStr[1] === '0')) {
        return (below10[numberToStr[0]] + ' hundred ' + below10[numberToStr[2]]);
    } else if ((numberToStr.length === 3) && (numberToStr[2] === '0')) {
        return (below10[numberToStr[0]] + ' hundred ' + below100[numberToStr[1] + '0']);
    }
    else if ((numberToStr.length === 3) && (numberToStr[1] === '1')) {
        return (below10[numberToStr[0]] + ' hundred ' + below20[numberToStr[1] + numberToStr[2]]);
    }
    else if (numberToStr.length === 3) {
        return (below10[numberToStr[0]] + ' hundred ' + below100[numberToStr[1] + '0'] + ' ' + below10[numberToStr[2]]);
    };

}
