import {setClockTime} from './clock.js';

window.addEventListener('load', () => {
    setInterval(setClockTime, 1000);
});
