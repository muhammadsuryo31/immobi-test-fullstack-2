'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Expense.init({
    TANGGAL: DataTypes.STRING,
    IDPEL: DataTypes.BIGINT,
    TOWER_HOLDER: DataTypes.STRING,
    REGIONAL: DataTypes.STRING,
    NAMA_PELANGGAN: DataTypes.STRING,
    TARIF: DataTypes.STRING,
    DAYA: DataTypes.BIGINT,
    JATUH_TEMPO: DataTypes.STRING,
    PERIODE_PEMAKAIAN: DataTypes.STRING,
    PERIODE_BAYAR: DataTypes.STRING,
    KWHAWAL: DataTypes.BIGINT,
    KWHAKHIR: DataTypes.BIGINT,
    KWHPAKAI: DataTypes.DOUBLE,
    RPTAG: DataTypes.BIGINT,
    DENDA: DataTypes.STRING,
    TOTAL: DataTypes.BIGINT,
    STATUS: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};