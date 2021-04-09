const { Expense } = require('../models')
const { Op } = require('sequelize');
class ExpenseController  {
    // static getAllExpenses (req, res, next) {
    //     Expense.findAll()
    //     .then (response => {
    //         console.log(response);
    //     })
    //     .catch (err => {
    //         console.log('error in get All');
    //         console.log(err);
    //     })
    // }
    static getExpense (req, res, next) {
        let PERIODE_PEMAKAIAN = req.query.periode
        let REGIONAL = req.query.regional
        console.log('masuk kesini');
        console.log(PERIODE_PEMAKAIAN, REGIONAL);
        if (PERIODE_PEMAKAIAN !== 'all' && REGIONAL !== 'all') {
            Expense.findAll({
                where: {
                    [Op.and]: [
                        {REGIONAL},
                        {PERIODE_PEMAKAIAN}
                    ]
                }
            })
            .then (response => {
                res.status(200).json(response)
                // res.status(200).json(response)
            })
            .catch (err => {
                console.log('ada error');
                res.status(500).send(err)
            })
        } else if (PERIODE_PEMAKAIAN == 'all' && REGIONAL !== 'all') {
            Expense.findAll({where: {
                REGIONAL
            }})
            .then (response => {
                res.status(200).json(response)
            })
            .catch (err => {
                console.log('error in get ALL 2');
                console.log(err);
            })
        }
        else if (PERIODE_PEMAKAIAN !== 'all' && REGIONAL == 'all') {
            Expense.findAll({where: {
                PERIODE_PEMAKAIAN
            }})
            .then (response => {
                res.status(200).json(response)
            })
            .catch (err => {
                console.log('error in get ALL 3');
                console.log(err);
            })
        }
        else if (PERIODE_PEMAKAIAN === 'all' && REGIONAL === 'all') {
            Expense.findAll()
            .then (response => {
                res.status(200).json(response)
            })
            .catch (err => {
                console.log('error in get All');
                console.log(err);
            })
        }
    }
}

module.exports = ExpenseController