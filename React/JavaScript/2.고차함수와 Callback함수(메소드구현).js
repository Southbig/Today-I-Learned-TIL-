'use strict';

// 전달인자(argument)가 무엇이든, 그대로 리턴
const identity = function (val) {
    return val;
};

// 배열은 데이터들(요소, element)을 '순서대로' 모은 자료구조이다
// 요소의 위치를 통해 데이터에 접근할 수 있다

// 객체는 서로 관련있는 데이터들(속성, property)을 'key-value' 형태로 '순서 없이' 모은 자료 구조이다
// 속성에 부여된 키(key)를 통해 데이터에 접근할 수 있다

// 각 데이터를 다루는 작업
// 배열의 요소 중 가장 큰 값을 찾는 것
// 배열의 모든 요소의 합을 구하는 것
// 객체에 특정 속성의 이름(key)이 존재하는지 확인 하는 것

// 각 작업들은 각데이터를 가지고 비슷한 처리를 한다
// 배열의 요소 중 가장 큰 값을 찾는 것 => 현재 데이터가 가장 큰 값인지 확인
// 배열의 모든 요소의 합을 구하는 것 => 현재 데이터를 누적값에 더하기
// 객체에 특정 속성의 이름(key)이 존재하는지 확인하는 것 => 현재 key가 원하는 값인지 확인

// 위 처럼 비슷한 처리가 반복되기 때무에 이를 반복(itertation) 작업이라고 한다

// 자바스크립트는 반복(iteration) 작업을 위한 여러 수단을 제공한다
// 반복문(for, for of, for in, while)과 반복을 위한 내장 메소드(arr.map, arr.filter) emd
// 반복문의 제어 변수로 주로 사용하는 변수 i는 iteration의 앞 글자 i를 의미한다


// slice는 배열의 start 인덱스부터 end 인덱스 이전까지의 요소를 shallow copy하여 새로운 배열을 리턴한다
const slice = function (arr, start, end) {

    // let start = start || 0;
    let start = start;
    let end = end;

    if (start === undefined) {
        strt = 0;
    }

    if (start < 0) {
        start = Math.max(0, arr.length + start);
    }
    if (end < 0) {
        end = Math.max(0, arr.length + end);
    }

    if (end === undefined || end > arr.length) {
        end = arr.length;
    }

    let result = [];

    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }

    return result;
}

//take는 배열의 처음 n개의 element를 담은 새로운 배열을 리턴한다
// n이 undefined이거나 음수인 경우, 빈 배열을 리턴한다
// n이 배열의 길이를 벗어날 경우, 전체 배열을 shallow copy한 새로운 배열을 리턴한다
const take = function (arr, n) {
    if (arr.length === 0 || n === undefined) {
        return [];
    }
    if (arr.length < n) {
        return arr;
    }
    else {
        return slice(arr, 0, n)
    }
    // let result = [];
    // for (let i = 0; i < n; i++) {
    //   result.push(arr[i])
    // }
    // return result;
}

//drop는 take와는 반대로, 처음 n개의 element를 제외한 새로운 배열을 리턴한다
// n이 undefined이거나 음수인 경우, 전체 배열을 shallow copy한 새로운 배열을 리턴한다
// n이 배열의 길이를 벗어날 경우, 빈 배열을 리턴한다
const drop = function (arr, n) {
    if (arr.length < n) {
        return [];
    }
    if (n === undefined || n < 0) {
        return arr;
    }
    else {
        return slice(arr, n);
    }
    // let result = arr;
    // for (let i = 0; i < n; i++) {
    //   result.shift(i)
    // }
    // return result;
}

// last는 배열의 마지막 n개의 element를 담은 새로운 배열을 리턴한다
// n이 undefined이거나 음수인 경우, 배열의 마지막 요소만을 담은 배열을 리턴한다
// n이 배열의 길이를 벗어날 경우, 전체 배열을 shallow copy한 새로운 배열을 리턴한다

const last = function (arr, n) {
    if (n === undefined || n < 0) {
        return [arr[arr.length - 1]]
    }
    if (n > arr.length) {
        return arr;
    }
    if (n === 0) {
        return []
    }
    else {
        return slice(arr, arr.length - n)
    }
    // let result = arr;
    // for (let i = 0; i < arr.length - n; i++) {
    //   result.shift(arr[i])
    // }
    // return result;
}

// each는 collection의 각 데이터에 반복적인 작업을 수행합니다.
//  1. collection(배열 혹은 객체)과 함수 iteratee(반복되는 작업)를 인자로 전달받아 (iteratee는 함수의 인자로 전달되는 함수이므로 callback 함수)
//  2. collection의 데이터(element 또는 property)를 순회하면서
//  3. iteratee에 각 데이터를 인자로 전달하여 실행합니다.

const each = function (collection, iteratee) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            iteratee(collection[i], i, collection)
        }
    }
    else if (typeof collection === 'object') {
        for (let key in collection) {
            interatee(collection[key], key, collection)
        }
    }
};

// _.indexOf는 target으로 전달되는 값이 arr의 요소인 경우, 배열에서의 위치(index)를 리턴합니다.
// 그렇지 않은 경우, -1을 리턴합니다.
// target이 중복해서 존재하는 경우, 가장 낮은 index를 리턴합니다.

const indexOf = function (arr, target) {

    let result = -1;

    each(arr, function (item, index) {

        if (item === target && result === -1) {
            result = index;
        }
    })
    return result;
};

// ilter는 test 함수를 통과하는 모든 요소를 담은 새로운 배열을 리턴합니다.

const filter = function (arr, test) {
    let result = [];

    each(arr, function (item) {
        if (test(item)) {
            result.push(item)
        }
    })
    return result;
}

// reject는 filter와 정반대로 test 함수를 통과하지 않는 모든 요소를 담은 새로운 배열을 리턴합니다.

const reject = function (arr, test) {
    let result = [];

    each(arr, function (item) {
        if (!test(item)) {
            result.push(item)
        }
    })
    return result;
};

// uniq는 주어진 배열의 요소가 중복되지 않도록 새로운 배열을 리턴합니다.

const uniq = function (arr) {
    let result = [];

    each(arr, function (item) {
        if (indexOf(result, item) === -1) {
            result.push(item)
        }
    })
    return result;
}

// map은 iteratee(반복되는 작업)를 배열의 각 요소에 적용(apply)한 결과를 담은 새로운 배열을 리턴합니다.
// 함수의 이름에서 드러나듯이 map은 배열의 각 요소를 다른 것(iteratee의 결과)으로 매핑(mapping)합니다.
const map = function (arr, iteratee) {
    let result = [];

    each(arr, function (item) {
        result.push(iteratee(item))
    })
    return result;
}

// _.pluck은
//  1. 객체 또는 배열을 요소로 갖는 배열과 각 요소에서 찾고자 하는 key 또는 index를 입력받아
//  2. 각 요소의 해당 값 또는 요소만을 추출하여 새로운 배열에 저장하고,
//  3. 최종적으로 새로운 배열을 리턴합니다.
// 예를 들어, 각 개인의 정보를 담은 객체를 요소로 갖는 배열을 통해서, 모든 개인의 나이만으로 구성된 별도의 배열을 만들 수 있습니다.
// 최종적으로 리턴되는 새로운 배열의 길이는 입력으로 전달되는 배열의 길이와 같아야 합니다.
// 따라서 찾고자 하는 key 또는 index를 가지고 있지 않은 요소의 경우, 추출 결과는 undefined 입니다.

const pluck = function (arr, keyOrIdx) {
    // _.pluck을 _.each를 사용해 구현하면 아래와 같습니다.
    // let result = [];
    // _.each(arr, function (item) {
    //   result.push(item[keyOrIdx]);
    // });
    // return result;

    // let result = [];
    // _.map(arr, function (item) {
    //   if (typeof item === 'object') {
    //     for (let key in item) {
    //       if (key === keyOrIdx) {
    //         result.push(item[key])
    //       }
    //     }
    //   }
    // })
    // return result;

    return map(arr, function (item) {
        return item[keyOrIdx];
    })
};

// _.reduce는
//  1. 배열을 순회하며 각 요소에 iteratee 함수를 적용하고,
//  2. 그 결과값을 계속해서 누적(accumulate)합니다.
//  3. 최종적으로 누적된 결과값을 리턴합니다.
// 예를 들어, 배열 [1, 2, 3, 4]를 전부 더해서 10이라는 하나의 값을 리턴합니다.
// 각 요소가 처리될 때마다 누적되는 값은 차례대로 1, 1+2, 1+2+3, 1+2+3+4 입니다.
// 이처럼 _.reduce는 배열이라는 다수의 정보가 하나의 값으로 축소(응축, 환원, reduction)되기 때문에 reduce라는 이름이 붙게 된 것입니다.

// _.reduce는 위에서 구현한 많은 함수처럼, 입력으로 배열과 각 요소에 반복할 작업(iteratee)을 전달받습니다.
// iteratee에 대해서 복습하면 아래와 같습니다. (일반적으로 객체를 reduce 하지는 않으므로, 배열 부분만 복습합니다.)
// iteratee는 차례대로 데이터(element 또는 value), 접근자(index 또는 key), collection을 다룰 수 있어야 합니다.
//  배열 arr을 입력받을 경우, iteratee(ele, idx, arr)

// _.reduce는 반복해서 값을 누적하므로 이 누적되는 값을 관리해야 합니다.
// 따라서 _.reduce의 iteratee는 인자가 하나 더 추가되어 최종 형태는 아래와 같습니다.
//  iteratee(acc, ele, idx, arr)
// 누적되는 값은 보통 tally, accumulator(앞글자만 따서 acc로 표기하기도 함)로 표현하거나
// 목적을 더 분명하게 하기 위해 sum(합), prod(곱), total 등으로 표현하기도 합니다.
// 이때, acc는 '이전 요소까지'의 반복 작업의 결과로 누적된 값입니다.
// ele는 잘 아시다시피 반복 작업을 수행할(아직 수행하지 않은) 현재의 요소입니다.

// 여기까지 내용을 정리하면 다음과 같습니다.
//  _.reduce(arr, iteratee)
//  iteratee(acc, ele, idx, arr)
// 그런데 사실 누적값에 대해서 빠뜨린 게 하나 있습니다.
// 바로 '누적값은 어디서부터 시작하는가'라는 의문에 대한 대답을 하지 않았습니다.
// 이를 해결하는 방법은 초기 값을 직접 설정하거나 자동으로 설정하는 것입니다.
// _.reduce는 세 번째 인자로 초기 값을 전달받을 수 있습니다.
// 이 세 번째 인자로 초기 값이 전달되는 경우, 그 값을 누적값의 기초(acc)로 하여 배열의 '첫 번째' 요소부터 반복 작업이 수행됩니다.
// 반면 초기 값이 전달되지 않은 경우, 배열의 첫 번째 요소를 누적값의 출발로 하여 배열의 '두 번째' 요소부터 반복 작업이 수행됩니다.

// 따라서 최종적인 형태는 아래와 같습니다.
//  _.reduce(arr, iteratee, initVal)
//  iteratee(acc, ele, idx, arr)

const reduce = function (arr, iteratee, initVal) {
    let acc = initVal;
    each(arr, function (item, index, arr) { // 첫 each문을 실행시 item의 index는 0일 것이다
        if (initVal === undefined && index === 0) { // 초기값(initVal)이 없고 index가 0인 경우
            acc = item;  // 즉 초기값이 없고 item의 인덱스가 0이면 acc에 arr의 인덱스 0번째를 할당해 준다. 즉, 첫번째 itme
        }
        else { // 초기값이 있다면
            acc = iteratee(acc, item, index, arr) // 함수 첫부분에 acc에 초기값(initVal)이 할당 되어 있으므로
        }                                        // iteratee(initVal, item, index, arr)이며 acc값에 iteratee값을 그대로 할당하여 acc에 값을 합산해 준다
    })
    return acc;
}


















