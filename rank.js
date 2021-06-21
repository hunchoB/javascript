"USE STRICT"

function leftChild(power) {
    let leftChildNumber;

    if (power == 0 || power == 1) {
        return 1;
    } else {
        leftChildNumber = leftChild(power - 1) + (power - 1) * leftChild(power - 2);
    }
    return leftChildNumber;
}

function rank(variant, power) {
    let r;
    let l1;
    let l2;

    if (power == 0 || power == 1) {
        r = 0;
    } else {
        if (variant[0] == 0) {
            variant.shift();
            r = rank(variant, power - 1);
        } else {
            l1 = variant[0] - 1;
            variant.shift();
            l2 = rank(variant, power - 2);
            r = l1 + (power - 1) * l2 + leftChild(power - 1);
        }
    }
    return r;
}

console.log(rank([1, 1], 4));

function unrank(r, power) {

    let l1;
    let l2;
    let variant = [];
    let array = [];

    if (power == 0 || power == 1) {
        variant = [];
    } else {
        if (power == 0) {
            variant = [0];
        } else {
            if (r < leftChild(power - 1)) {
                variant = array.concat(0, unrank(r, power - 1));
            } else {
                r = r - leftChild(power - 1);
                l1 = r % (power - 1);
                l2 = Math.trunc(r / (power - 1));
                variant = array.concat(l1 + 1, unrank(l2, power - 2));
            }
        }
    }
    return variant;
}

// for (let i = 0; i < 10; i++) {
//     console.log(unrank(i, 4));
// }