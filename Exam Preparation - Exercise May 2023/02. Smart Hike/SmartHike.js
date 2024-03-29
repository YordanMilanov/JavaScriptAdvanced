class SmartHike {

    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if(this.goals[peak] === undefined) {
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`;
        }
        return `${peak} has already been added to your goals`;
    }

    hike(peak, time, difficultyLevel) {
        if(this.goals[peak] === undefined) {
            throw new Error(`${peak} is not in your current goals`)
        }

        if(this.resources <= 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let usedResources = time * 10;
        let difference = this.resources - usedResources;
        if(difference < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= usedResources;
        this.listOfHikes.push(peak, time, difficultyLevel);
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        this.resources += time * 10;
        if(this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
       return `You have rested for ${time} hours and gained ${time*10}% resources`;
    }

    showRecord(criteria) {
        if(this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if(criteria === 'hard' || criteria === 'easy') {
            const allHikes = this.listOfHikes.filter(
                (hike) => hike.difficultyLevel === criteria);

            const sortedHikes = allHikes.sort((a,b) => a.time - b.time);
            const bestHike = sortedHikes[0];

            if(bestHike === undefined) {
               return `${this.username} has not done any ${criteria} hiking yet`;
            }

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`



        } else if (criteria === 'all') {
            const result = ["All hiking records:"];

            this.listOfHikes.forEach(hike => {
              result.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`)  
            });

            return result.join('\n');
        }
    }
}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

// You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui
// You hiked Musala peak for 8 hours and you have 20% resources left
// You don't have enough resources to complete the hike
// Uncaught Error: Everest is not in your current goals

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

// Vili has not done any easy hiking yet
// Vili's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Vili hiked Musala for 8 hours