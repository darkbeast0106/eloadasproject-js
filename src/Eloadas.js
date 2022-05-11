class Eloadas {
    foglalasok = [];
    constructor(sorokSzama, helyekSzama) {
        this.foglalasok = Array.from(Array(sorokSzama), () => new Array(helyekSzama))
        for (let i = 0; i < sorokSzama; i++) {
            for (let j = 0; j < helyekSzama; j++) {
                this.foglalasok[i][j] = false
            }
        }
        console.log(this.foglalasok);
    }
}
module.exports = Eloadas