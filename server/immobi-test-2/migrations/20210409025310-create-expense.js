'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Expenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TANGGAL: {
        type: Sequelize.STRING
      },
      IDPEL: {
        type: Sequelize.BIGINT
      },
      TOWER_HOLDER: {
        type: Sequelize.STRING
      },
      REGIONAL: {
        type: Sequelize.STRING
      },
      NAMA_PELANGGAN: {
        type: Sequelize.STRING
      },
      TARIF: {
        type: Sequelize.STRING
      },
      DAYA: {
        type: Sequelize.BIGINT
      },
      JATUH_TEMPO: {
        type: Sequelize.STRING
      },
      PERIODE_PEMAKAIAN: {
        type: Sequelize.STRING
      },
      PERIODE_BAYAR: {
        type: Sequelize.STRING
      },
      KWHAWAL: {
        type: Sequelize.BIGINT
      },
      KWHAKHIR: {
        type: Sequelize.BIGINT
      },
      KWHPAKAI: {
        type: Sequelize.DOUBLE
      },
      RPTAG: {
        type: Sequelize.BIGINT
      },
      DENDA: {
        type: Sequelize.STRING
      },
      TOTAL: {
        type: Sequelize.BIGINT
      },
      STATUS: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Expenses');
  }
};