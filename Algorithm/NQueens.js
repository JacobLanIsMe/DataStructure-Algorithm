// n 代表 n * n 的棋盤上要放 n 個皇后，每個皇后的橫向、直向及斜線上不能有另一個皇后。
let perfect = 0;


function nQueens(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push([]);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = null;
        }
    }
    let i = 0;
    let j = 0;
    let loop = true;
    while (loop) {
        console.log(i, j);

        arr[i][j] = "Q";
        let violation = false;
        let k = 0;
        // 檢查上方有沒有 Ｑ
        while (k < i) {
            if (arr[k][j] == "Q") {
                violation = true;
            }
            k++;
        }
        k = 0;
        // 檢查左邊有沒有 Ｑ
        while (k < j) {
            if (arr[i][k] == "Q") {
                violation = true;
            }
            k++;
        }
        k = 1;
        let l = -1;
        // 檢查左下角對角線有沒有 Ｑ
        while (i + k < n && j + l >= 0) {
            if (arr[i + k][j + l] == "Q") {
                violation = true;
            }
            k++;
            l--;
        }
        k = -1;
        // 檢查左上角對角線有沒有 Ｑ
        while (i + k >= 0 && j + k >= 0) {
            if (arr[i + k][j + k] == "Q") {
                violation = true;
            }
            k--;
        }

        if (!violation) {
            console.log("okay");
            printArray(arr);
            if (j == n - 1) {
                perfect++;
                console.log("Perfect");
                printArray(arr);
                arr[i][j] = null;
                i++;
            }
            else {
                i = 0;
                j++;
            }
        }
        else {
            console.log("not okay");
            printArray(arr);
            arr[i][j] = null;
            i++;
        }
        function check() {
            // go back to the previous column
            j--;
            for (let b = 0; b < arr.length; b++) {
                if (arr[b][j] == "Q") {
                    arr[b][j] = null;
                    i = b + 1;
                    break;
                }
            }
        }
        while (i >= n) {
            check();
            if (j < 0){
                console.log("dead end");
                loop = false;
                break;
            }
        }
    }
}

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

nQueens(4);
console.log("Number of Perfect is " + perfect);