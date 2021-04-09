'use strict';
const excelToJson = require('convert-excel-to-json');

function formatedDate (rawDate) {
//   console.log(rawDate);
  if (rawDate) {
      const dateRaw = new Date(rawDate).toLocaleString('id-ID')
    //   console.log('ini date raw');
      console.log(dateRaw);
      const [date, time] = dateRaw.split(' ')
    //   console.log(date);
    //   console.log(time);
      let [day, month, year] = date.split("/")
      if (+month === 12) {
          month = 1;
          +year++
      } else if (+month < 12) {
          +month++
      }
      const dateParsed = `${day}/${month}/${year}`
      console.log(dateParsed);
    //   console.log(hour, minute, seconds);

      return dateParsed
  } 
}

const result = excelToJson({
    sourceFile: './File Test Interview.xlsx',
    header:{
      rows: 1
  },
    columnToKey: {
        A: 'TANGGAL',
        B: 'IDPEL',
        D: 'TOWER_HOLDER',
        E: 'REGIONAL',
        F: 'NAMA_PELANGGAN',
        G: 'TARIF',
        H: 'DAYA',
        I: 'JATUH_TEMPO',
        J: 'PERIODE_PEMAKAIAN',
        K: 'PERIODE_BAYAR',
        L: 'KWHAWAL',
        M: 'KWHAKHIR',
        N: 'KWHPAKAI',
        O: 'RPTAG',
        P: 'DENDA',
        Q: 'TOTAL',
        R: 'STATUS'
    }
})

const expense = result.Sheet1.map(({
    TANGGAL,
    IDPEL,
    TOWER_HOLDER,
    REGIONAL,
    NAMA_PELANGGAN,
    TARIF,
    DAYA,
    JATUH_TEMPO,
    PERIODE_PEMAKAIAN,
    PERIODE_BAYAR,
    KWHAWAL,
    KWHAKHIR,
    KWHPAKAI,
    RPTAG,
    DENDA,
    TOTAL,
    STATUS
    }) => {
        return {
            TANGGAL,
            IDPEL,
            TOWER_HOLDER,
            REGIONAL,
            NAMA_PELANGGAN,
            TARIF,
            DAYA,
            JATUH_TEMPO,
            PERIODE_PEMAKAIAN,
            PERIODE_BAYAR,
            KWHAWAL,
            KWHAKHIR,
            KWHPAKAI,
            RPTAG,
            DENDA,
            TOTAL,
            STATUS,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    })

console.log(expense)
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Expenses', expense, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Expenses', null, {});
  }
};
