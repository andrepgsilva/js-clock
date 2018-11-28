const getTime = () => {
    const time = new Date();
    
    return [
        time.getSeconds(),
        time.getMinutes(),
        time.getHours() * 60
    ];
}

const timeToDegree = (time) => {
    return ((time / 60) * 360) + 90;
}

const handTransform = (hands, degreeTime) => {
    hands.forEach((hand, index) => {
        try {
            hand.style.transform = `rotate(${degreeTime[index]}deg)`;
        } catch($error) {
            return $error;
        }
    });
    return true;
}

const setClockTime = () => {   
    const time = getTime().map(timeToDegree);
    const hands = [
        document.querySelector('.second-hand'), 
        document.querySelector('.min-hand'), 
        document.querySelector('.hour-hand')];
    handTransform(hands, time);
}

export {setClockTime}