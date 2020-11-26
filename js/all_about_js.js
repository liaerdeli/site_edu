let name = 'Anelia';
let age = 22;
let year = 2020
function timeMachine(name, age, year, whereAge) {
    console.log('welcome ' + name + ' to MT ')
    console.log('today your age is ' + age + ' and now is ' + year)
    function tripToFuture(ageMax) {
        while (age<ageMax) {
            age++
            year++
            if ( age === 23) {
                console.log('2021')
            }
            console.log('тик-так-тик-так ' + age + ' в ' + year + '  году ')
        }

    }
    function tripToPast(minAge) {
        while (age>minAge) {
            age--
            year--
            console.log('вжух! тебе снова ' + age + ' в ' + year + ' году')
        }

    }
    if (whereAge > age) {
        tripToFuture(whereAge)
    } else if (whereAge<age) {
        tripToPast(whereAge)
    }
}


timeMachine('Zhandos', 30, 2020, 8)