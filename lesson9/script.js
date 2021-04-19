// написати розпорядок дня на 7-10 дій (функцій) через колбеки, проміси і асінкАвейт

//----------------------------
//       < callback >
//----------------------------
 
// function wokeUp(awakeOnTime, cb) {
//     console.log(`It's time to get up! Ring-ring!!!`)
//     setTimeout(() => {
//         awakeOnTime ?
//             cb(null, `I'm woke up on time`) :
//             cb(`I didn't hear the alarm`)
//     }, 1000)
// }
//
// function brushTeeth(water, cb) {
//     console.log(`Go to bathroom and brush your teeth`)
//     setTimeout(() => {
//         water ?
//             cb(null, `I am fresh and clean`) :
//             cb(`no water`)
//     }, 800)
// }
//
// function breakfast(products, cb) {
//     console.log(`Go to kitchen and make your breakfast`)
//     setTimeout(() => {
//         products ?
//             cb(null, `om-nom-nom`) :
//             cb(`no products, go to shop`)
//     }, 3000)
// }
//
// function goByBus(bus, cb) {
//     console.log(`Go to the bus stop`)
//     setTimeout(() => {
//         bus ?
//             cb(null, `brum-brum-brum`) :
//             cb(`You are missed the bus. Call to Taxi`)
//     }, 1200)
// }
//
// function hardWork(work, cb) {
//     console.log(`work-work-work`)
//     setTimeout(() => {
//         work ?
//             cb(null, `you earn money`) :
//             cb(`you are late!!!`)
//     }, 8000)
// }
//
// function learnJS(lesson, cb) {
//     console.log(`Go to ZOOM`)
//     setTimeout(() => {
//         lesson ?
//             cb(null, `listen to Vitya`) :
//             cb(`today are no lesson, go to make homework`)
//     }, 10000)
// }
//
// function goSleep(allDone, cb) {
//     console.log(`time to relax, do sleep`)
//     setTimeout(() => {
//         allDone ?
//             cb(null, `a-w-w-w-w-e`) :
//             cb(`you dont make homework. No sleep -> go write taski`)
//     }, 4000)
// }
//
//
//
// wokeUp(true, (error, data) => {
//     if (error) {
//         console.error(error)
//     } else {
//         console.log(data)
//         brushTeeth(true, (error, data) => {
//             if (error) {
//                 console.error(error)
//             } else {
//                 console.log(data);
//                 breakfast(true, (error, data) => {
//                     if (error) {
//                         console.error(error)
//                     } else {
//                         console.log(data)
//                         goByBus(true, (error, data) => {
//                             if (error) {
//                                 console.error(error)
//                             } else {
//                                 console.log(data);
//                                 hardWork(true, (error, data) => {
//                                     if (error) {
//                                         console.error(error)
//                                     } else {
//                                         console.log(data);
//                                         learnJS(true, (error, data) => {
//                                             if (error) {
//                                                 console.error(error)
//                                             } else {
//                                                 console.log(data);
//                                                 goSleep(true, (error, data) => {
//                                                     if (error) {
//                                                         console.error(error)
//                                                     } else {
//                                                         console.log(data)
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

//----------------------------
//       < promise >
//----------------------------

function wokeUp(awakeOnTime) {
    console.log(`It's time to get up! Ring-ring!!!`)
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            awakeOnTime ?
                resolve(`I'm woke up on time`) :
                reject(`I didn't hear the alarm`)
        }, 1000)
    }))
}

function brushTeeth(water) {
    console.log(`Go to bathroom and brush your teeth`)
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            water ?
                resolve(`I am fresh and clean`) :
                reject(`no water`)
        }, 800)
    }))
}

function breakfast(products) {
    console.log(`Go to kitchen and make your breakfast`)
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            products ?
                resolve(`om-nom-nom`) :
                reject(`no products, go to shop`)
        }, 3000)
    }))
}

function goByBus(bus) {
    console.log(`Go to the bus stop`)
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            bus ?
                resolve(`brum-brum-brum`) :
                reject(`You are missed the bus. Call to Taxi`)
        }, 1200)
    }))
}

function hardWork(work) {
    console.log(`work-work-work`)
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            work ?
                resolve(`you earn money`) :
                reject(`you are late!!!`)
        }, 8000)
    }))
}

function learnJS(lesson) {
    console.log(`Go to ZOOM`)
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            lesson ?
                resolve(`listen to Vitya`) :
                reject(`today are no lesson, go to make homework`)
        }, 10000)
    }))
}

function goSleep(allDone) {
    console.log(`time to relax, go sleep`)
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            allDone ?
                resolve(`a-w-w-w-w-e`) :
                reject(`you dont make homework. No sleep -> go write taski`)
        }, 4000)
    }))
}



// wokeUp(true)
//     .then(value => {
//         console.log(value);
//         return brushTeeth(value)
//     })
//     .then(value => {
//         console.log(value);
//         return breakfast(value)
//     })
//     .then(value => {
//         console.log(value);
//         return goByBus(value)
//     })
//     .then(value => {
//         console.log(value);
//         return hardWork(value)
//     })
//     .then(value => {
//         console.log(value);
//         return learnJS(value)
//     })
//     .then(value => {
//         console.log(value);
//         return goSleep(value)
//     })
//     .catch(reason => {
//         console.warn(reason)
//     })


//----------------------------
//       < async await >
//----------------------------

async function doThisTask () {
    try {
        let result = await wokeUp(true);
        console.log(result);
        result = await brushTeeth(result);
        console.log(result);
        result = await breakfast(result);
        console.log(result);
        result = await goByBus(result);
        console.log(result);
        result = await hardWork(result);
        console.log(result);
        result = await learnJS(result);
        console.log(result);
        result = await goSleep(result);
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

doThisTask()
