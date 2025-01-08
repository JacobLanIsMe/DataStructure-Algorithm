
function recursiveLCS(str1, str2) {
    if (str1.length === 0 || str2.length === 0) {
        return 0;
    }
    else {
        if (str1[str1.length - 1] == str2[str2.length - 1]) {
            return 1 + recursiveLCS(str1.substring(0, str1.length - 1), str2.substring(0, str2.length - 1));
        }
        else {
            return Math.max(recursiveLCS(str1.substring(0, str1.length - 1), str2), recursiveLCS(str1, str2.substring(0, str2.length - 1)));
        }
    }
}

// console.log(recursiveLCS("ATAACGCGCTGCTCGGGT", "TCAATCAGGATCCGCTGA"));


let table1;
let table2;
let result = "";
let x = "ATTTGGCTA";
let y = "TTAGCCAT";

function dynamicProgrammingLCS(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    table1 = [];
    table2 = [];
    // Table1 initialization
    for (let i = 0; i <= m; i++) {
        table1.push([]);
        table1[i][0] = 0;
        for (let k = 1; k <= n; k++) {
            table1[i].push(null);
        }
    }
    for (let j = 0; j <= n; j++) {
        table1[0][j] = 0;
    }
    // Table2 initialization
    for (let i = 0; i <= m; i++) {
        table2.push([]);
        for (let k = 0; k <= n; k++) {
            table1[i].push(null);
        }
    }

    // LCS
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] == str2[j - 1]) {
                table1[i][j] = 1 + table1[i - 1][j - 1];
                table2[i][j] = "LeftTop";
            }
            else if (table1[i - 1][j] >= table1[i][j - 1]) {
                table1[i][j] = table1[i - 1][j];
                table2[i][j] = "Top";
            }
            else {
                table1[i][j] = table1[i][j - 1];
                table2[i][j] = "Left";
            }
        }
    }
    let table1String = "";
    let table2String = "";
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            table1String = table1String + table1[i][j] + " ";
            table2String = table2String + table2[i][j] + " ";
        }
        table1String += "\n";
        table2String += "\n";
    }

    console.log(table1String);
    console.log(table2String);
}

function printLCS(i, j) {
    if (i == 0 || j == 0) {
        return;
    }
    if (table2[i][j] == "LeftTop") {
        printLCS(i - 1, j - 1);
        result += x[i - 1];
    }
    else if (table2[i][j] == "Top") {
        printLCS(i - 1, j);
    }
    else {
        printLCS(i, j - 1);
    }
}

dynamicProgrammingLCS(x, y);
printLCS(x.length, y.length);
console.log(result);

