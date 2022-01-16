
// const days = Math.floor(time / (1000 * 60 * 60 * 24));


// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));


// const secs = Math.floor((time % (1000 * 60)) / 1000);


class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
        sec: document.querySelector(`${selector} span[data-value="secs"]`),
        min: document.querySelector(`${selector} span[data-value="mins"]`),
        hours: document.querySelector(`${selector} span[data-value="hours"]`),
        days: document.querySelector(`${selector} span[data-value="days"]`)
        }
        this.updateTimer();
    }

updateTimer() {
//     
    setInterval(() => {
        const time = this.targetDate - new Date();
        this.refs.sec.textContent = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');
            this.refs.min.textContent = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            this.refs.hours.textContent = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        this.refs.days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
        },1000)
    
    }
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 20, 2022'),
});

const newTimer = new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('Oct 29, 2022'),
})
