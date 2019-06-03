

// https://baijiahao.baidu.com/s?id=1615713540466951098&wfr=spider&for=pc

console.log(1);

setTimeout(() => {
    console.log(5);
}, 0);

new Promise(function (resolve, reject) {
    console.log(2);

    for (let i = 0; i < 999999999; i++) {
        if (i === 10000000) {
            console.log(7);
        }
    }

    resolve();

    console.log(4);
}).then(() => {
    console.log(3);
})

console.log(6);