
// function findMatching(){}

// const findMatching = (drivers) => {
//     drivers === 'Bobby'
//     return drivers
// };

// const findMmatching = (array) => {
//     const obj = array.filter((record) = record.result === 'Bobby')
//     return obj ? obj.driver : undefined;
// }

function findMatching(drivers, name){
    const match = drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
    return match
}

function fuzzyMatch(drivers, string){
    const match = drivers.filter(driver => driver[0].toUpperCase() === string[0].toUpperCase())
return match
}

function matchName(drivers, string){
    const strings = drivers.filter(driver => driver.name.toUpperCase() === string.toUpperCase());
    return strings
}