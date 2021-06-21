"USE STRICT"

function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

function spy(func) {

    let calls = new Map();
    let wrapper = function () {
        return func.apply(this, arguments);
    };
    return function () {
        let key = wrapper(arguments);
        if (calls.has(key)) {
            return calls.get(key);
        }

        let result = func.apply(this, arguments);
        calls.set(key, result);

    };

}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
// НЕ СДЕЛАЛ