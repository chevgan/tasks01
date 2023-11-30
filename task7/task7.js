// Например:
// - aba[bab]xyz поддерживает SSL (aba вне квадратных скобок с соответствующим bab в квадратных скобках).
// - xyx[xyx]xyx не поддерживает SSL (xyx соответствующий BAB, но нет последовательности yxy соответствующей ABA).
// - aaa[kek]eke поддерживает SSL (eke в суперсети с соответствующим kek в гиперсети;
// последовательность aaa не подходит под ABA, потому что внутренний символ должен быть другим).
// - zazbz[bzb]cdb поддерживает SSL (у zaz нет соответствующего aza,
// но у zbz есть соответствующий bzb).

function supportsSSL(ip) {
    let hypernet = [];
    let supernet = [];
    let inHypernet = false;

    for (let i = 0; i < ip.length; i++) {
        let currentIp = ip[i];
        if (currentIp === '[') {
            inHypernet = true;
        } else if (currentIp === ']') {
            inHypernet = false;
        } else {
            if (inHypernet) {
                hypernet.push(currentIp);
            } else {
                supernet.push(currentIp);
            }
        }
    }

    let hypernetStr = hypernet.join('');
    let supernetStr = supernet.join('');

    let supernetABA = [];
    for (let i = 0; i < supernetStr.length - 2; i++) {
        if (supernetStr[i] === supernetStr[i + 2] && supernetStr[i] !== supernetStr[i + 1]) {
            supernetABA.push(supernetStr.substring(i, i + 3));
        }
    }

    for (let aba of supernetABA) {
        let bab = aba[1] + aba[0] + aba[1];
        if (hypernetStr.includes(bab)) {
            return true;
        }
    }
    return false;
}

let result = 0;
function supportsSSLCount(ips) {
    result = 0;
    for (let ip of ips) {
        if (supportsSSL(ip)) {
            result++;
        }
    }
}

console.log(supportsSSLCount(['aba[bab]xyz','aba[bab]xyz','aba[baa]xyz']))
console.log("Кол-во IP, поддерживающих SSL:", result);