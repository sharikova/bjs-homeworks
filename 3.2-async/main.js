class AlarmClock {
    constructor(){
        this.clocks = [];
        this.id =[]
    };

    addClock(time, fn, id) {
        switch(true){
            case typeof(id) == "undefined":
                console.error("ID будильника не задан");
                break;
            case this.id.indexOf(id) >-1:
                console.error("Звонок с таким id уже существует");
                break;
            default:
                this.clocks.push([time, fn]);
                this.id.push(id);
        };
    };

    removeClock(id){
        if (this.id.indexOf(id) == -1){
            return "Такого id не cуществует"
        } else {
            let index = this.id.indexOf(id);
            this.id.splice(index,1);
            this.clocks.splice(index,1);
        };
        if (this.id.indexOf(id) == -1){
            return true
        } else {
            return false
        };
    };

    get getCurrentFormattedTime(){
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        return `${hours}:${minutes}`
    };

    start(){
        function checkClock(clock){
            let time = new Date();
            let hours = time.getHours();
            let minutes = time.getMinutes();
            let timeNow = `${hours}:${minutes}` 
            if (this.clock[0] = timeNow){
                return true
            };
        };

        for (let i=0; i < this.id.length; i++){
            let setTime = this.clocks[i];
            if (checkClock(setTime)){
                console.log(setTime[1]);
            };
        };
    };


let test = new AlarmClock();
test.addClock("19:40", () => console.log("Пора спать :("), 1);
test.removeClock(1);