(() => {
    console.log('Starting at: ' + new Date());
    let d, o, n, a, l, g, e, r, b, t;
    let donald, gerald, robert;
    let i, tmp;
    for (i = 5012346789; i <= 5987643210; i++) {
        tmp = [...new Set(i+'')];
        if(tmp.length !== 10) {
            continue;
        }
        d = tmp[0];
        o = tmp[1];
        n = tmp[2];
        a = tmp[3];
        l = tmp[4];
        g = tmp[5];
        e = tmp[6];
        r = tmp[7];
        b = tmp[8];
        t = tmp[9];

        donald = d * 100000 + o * 10000 + n * 1000 + a * 100 + l * 10 + d * 1;
        gerald = g * 100000 + e * 10000 + r * 1000 + a * 100 + l * 10 + d * 1;
        robert = r * 100000 + o * 10000 + b * 1000 + e * 100 + r * 10 + t * 1;
        if (donald + gerald === robert) {
            console.log('DONALGERBT=5' + (i - 5000000000));
            break;
        }
    }
    console.log('Ending at: ' + new Date());
})()
