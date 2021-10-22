function giaipt() {
    var a = parseInt(document.getElementById('num1').value);
    var b = parseInt(document.getElementById('num2').value);
    var c = parseInt(document.getElementById('num3').value);
    var delta;
    delta = b * b - 4 * a * c;

    var result;
    if (delta < 0) {
        result = 'Phuong trinh vo nghiem';
    } else {
        if (delta == 0) {
            x = -b / (2 * a);
            result = 'PT co nghiem' + x;
        } else {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            x2 = (-b - Math.sqrt(delta)) / (2 * a);
            result = ' x1= ' + x1.toFixed(2) + 'va' + ' x2= ' + x2.toFixed(2);
        }
    }
    document.getElementById('ketqua').value = result;
}
// số nguyên
function ktsonguyen() {
    var result1;
    var n = parseInt(document.getElementById('soN').value);
    if (n < 2) {
        result1 = 'khong phai so nguyen'
    }
    {
        if (n == 2) {
            result1 = 'so nguyen'
        } else {
            for (i = 2; i < n; i++) {
                if (n % i == 0) {
                    result1 = 'khong la so nguyen to'
                    break
                }
                if (n % i != 0) {
                    result1 = 'la so nguyen to'
                }
            }
        }
    }

    document.getElementById('ketqua1').value = result1;
}




// if (a != 1 && a != 0) {
//     if (a == 2) {
//         b = 'số nguyên'
//     } else {
//         for (i = 2; i < a; i++) {
//             if (a % i == 0) {
//                 b = 'không phải số nguyên'
//                 break
//             }
//             if (a % i != 0) {
//                 b = 'số nguyên'
//             }
//         }
//     }
