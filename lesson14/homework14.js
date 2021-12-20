function getUp(ifGetUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ifGetUp) {
                console.log('Прокинувся');
                resolve(true);
            }
            reject(false);
        }, 1000)
    })
}

function getBrushTeeth(ifGetUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ifGetUp) {
                resolve('Почистив зуби');
            }
        }, 1000)
    })
}

function getWashIn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Вмився');
        }, 500)
    })
}

function getBreakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Поснідав');
        }, 2000)
    })
}

function goWork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let money = 150;
            console.log('Приїхав на роботу');
            resolve(money);
        }, 3000)
    })
}
function getLunch(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 100) {
                resolve('Пообідав');
            } else {
                resolve('Забувсь готівку вдома :(, тому залишивсь голодний')
            }
        }, 2000)
    })
}
function goHome() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Повернувсь додому');
        }, 3000)
    })
}
function doHomework() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Зробив домашню OKTEN`a');
        }, 3000)
    })
}
function goToBed() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Підготовка до сну');
        }, 1000)
    })
}

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

