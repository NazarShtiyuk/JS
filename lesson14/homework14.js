// let ifGetUp = false;
// function getUp(ifGetUp, callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (ifGetUp) {
//                 console.log('Прокинувся');
//                 resolve(true);
//             }
//             reject(false);
//             // callback();
//         }, 1000)
//     })
// }
//
// function getBrushTeeth(ifGetUp, callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (ifGetUp) {
//                 // callback()
//                 resolve('Почистив зуби');
//             }
//         }, 1000)
//     })
// }
//
// function getWashIn(callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // callback()
//             resolve('Вмився');
//         }, 500)
//     })
// }
//
// function getBreakfast(callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // callback()
//             resolve('Поснідав');
//         }, 2000)
//     })
// }
//
// let money = 150;
// function goWork(callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Приїхав на роботу');
//             // callback();
//             resolve(money);
//         }, 3000)
//     })
// }
// function getLunch(money, callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 100) {
//                 resolve('Пообідав');
//             } else {
//                 resolve('Забувсь готівку вдома :(, тому залишивсь голодний')
//             }
//             // callback()
//         }, 2000)
//     })
// }
// function goHome(callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // callback();
//             resolve('Повернувсь додому');
//         }, 3000)
//     })
// }
// function doHomework(callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // callback()
//             resolve('Зробив домашню OKTEN`a');
//         }, 3000)
//     })
// }
// function goToBed(callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // callback()
//             resolve('Підготовка до сну');
//         }, 1000)
//     })
// }

//                              async
// async function myDay() {
//     try {
//         let task1 = await getUp(true);
//         let task2 = await getBrushTeeth(task1);
//         console.log(task2);
//         let task3 = await getWashIn();
//         console.log(task3);
//         let task4 = await getBreakfast();
//         console.log(task4);
//         let task5 = await goWork();
//         let task6 = await getLunch(task5);
//         console.log(task6);
//         let task7 = await goHome();
//         console.log(task7);
//         let task8 = await doHomework();
//         console.log(task8);
//         let task9 = await goToBed();
//         console.log(task9);
//     } catch (e) {
//         console.error(e);
//     }
// }
// myDay();


//                      promise then
// getUp(true)
//     .then(task1 => {
//         return getBrushTeeth(task1);
//     })
//     .then(task2 => {
//         console.log(task2);
//         return getWashIn()
//     })
//     .then(task3 => {
//         console.log(task3);
//         return getBreakfast();
//     })
//     .then(task4 => {
//         console.log(task4);
//         return goWork();
//     })
//     .then(task5 => {
//         return getLunch(task5);
//     })
//     .then(task6 => {
//         console.log(task6);
//         return goHome();
//     })
//     .then(task7 => {
//         console.log(task7);
//         return doHomework();
//     })
//     .then(task8 => {
//         console.log(task8);
//         return goToBed();
//     })
//     .then(task9 => {
//         console.log(task9);
//     })
//     .catch((e) => {
//         console.error(e);
//     })

//                          callback
let ifGetUp = true;
let money = 150;

function getUp(ifGetUp, callback) {
    setTimeout(() => {
        if (ifGetUp) {
            console.log('Прокинувся');
        } else {
            return console.log('i`m sleep')
        }
        callback();
    }, 1000)

}

function getBrushTeeth(ifGetUp, callback) {
    setTimeout(() => {
        if (ifGetUp) {
            console.log('Почистив зуби');
        }
        callback()
    }, 1000)

}

function getWashIn(callback) {
    setTimeout(() => {
        console.log('Вмився');
        callback()
    }, 500)

}

function getBreakfast(callback) {
    setTimeout(() => {
        console.log('Поснідав');
        callback()
    }, 2000)

}

function goWork(callback) {
    setTimeout(() => {
        console.log('Приїхав на роботу');
        callback(money);
    }, 3000)
}

function getLunch(money, callback) {
    setTimeout(() => {
        if (money > 100) {
            console.log('Пообідав');
        } else {
            console.log('Забувсь готівку вдома :(, тому залишивсь голодний')
        }
        callback()
    }, 2000)
}

function goHome(callback) {
    setTimeout(() => {
        console.log('Повернувсь додому');
        callback();
    }, 3000)
}

function doHomework(callback) {
    setTimeout(() => {
        console.log('Зробив домашню OKTEN`a');
        callback()
    }, 3000)
}

function goToBed() {
    setTimeout(() => {
        console.log('Підготовка до сну');
    }, 1000)
}

getUp(ifGetUp, () => {
    getBrushTeeth(ifGetUp, () => {
        getWashIn(() => {
            getBreakfast(() => {
                goWork(() => {
                    getLunch(money, () => {
                        goHome(() => {
                            doHomework(() => {
                                goToBed()
                            })
                        })
                    })
                })
            })
        });
    });
});