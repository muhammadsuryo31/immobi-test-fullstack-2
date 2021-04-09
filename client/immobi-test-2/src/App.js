import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
const axios = require('axios');
const baseUrl = 'http://localhost:3000/expenses'

function App() {
  const [regional, setRegional] = useState('all')
  const [periode, setPeriode] = useState('all')
  const [expenses, setExpenses] = useState([])
  const [isClear, setClear] = useState(false)

  useEffect(() => {
    axios({
      method: "GET",
      url: `${baseUrl}?regional=${regional}&periode=${periode}`
    })
    .then (response => {
      setExpenses(response.data)
      console.log(expenses)
    })
    .catch (err => {
      console.log('error di axios');
      console.log(err);
    })
  }, [isClear])

  function regionalChange( event) {
    let input = event.target.value
    setRegional(input)
}
function periodChange( event) {
  let input = event.target.value
  setPeriode(input)
}
function submitter() {
      axios({
        method: "GET",
        url: `${baseUrl}?regional=${regional}&periode=${periode}`
      })
      .then (response => {
        setExpenses(response.data)
        console.log(expenses)
      })
      .catch (err => {
        console.log('error di axios');
        console.log(err);
      })
      
  }

  function clearer () {
    if (isClear === false){
      setClear(true)
    } else {
      setClear(false)
    }
    setPeriode('all')
    setRegional('all')
  }

  function formatedPrice(price) {
    if(price) {
      return 'Rp. ' + price.toString()
        .split('')
        .reverse()
        .map((number, i) => i % 3 === 0 && i !== 0 ? number + ',' : number)
        .reverse()
        .join('')
    }
  }

  return (
    <div>
    <div>
      <div style={{width: '300px'}} className="flex-container">
        <form>
          <h5>Regional</h5>
          <select className="form-select" aria-label="Default select example" onChange= {regionalChange} value={regional} >
          <option value='all' defaultValue>All Region</option>
          <option value="R01 - SUMBAGUT">R01 - SUMBAGUT</option>
          </select>
          <h5>Periode Pemakaian</h5>
          <select className="form-select" aria-label="Default select example" onChange= {periodChange} value={periode} >
          <option value='all' defaultValue>All Periode</option>
          <option value='02/2021' >02/2021</option>
          </select>
          <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mt-4" type="button" onClick ={ submitter }>Apply</button>
          <button className="btn btn-lg btn-danger btn-block btn-login text-uppercase font-weight-bold mt-4" type="button" onClick ={ clearer }>CLear filter</button>
        </form>
      </div>
    </div>
    <div>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Tanggal</th>
          <th scope="col">IDPEL</th>
          <th scope="col">Tower Holder</th>
          <th scope="col">Regional</th>
          <th scope="col">Nama Pelangan</th>
          <th scope="col">Tarif</th>
          <th scope="col">Daya</th>
          <th scope="col">Jatuh Tempo</th>
          <th scope="col">Periode Pemakaian</th>
          <th scope="col">Periode bayar</th>
          <th scope="col">KWH Awal</th>
          <th scope="col">KWH Akhir</th>
          <th scope="col">KWH Pakai</th>
          <th scope="col">Rp Tag</th>
          <th scope="col">Denda</th>
          <th scope="col">Total</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
          {
            expenses.map(expense => {
              return <tr key={expense.id}>
                 <th scope="row">{expense.id}</th>
                <td>{expense.TANGGAL}</td>
                <td>{expense.IDPEL}</td>
                <td>{expense.TOWER_HOLDER}</td>
                <td>{expense.REGIONAL}</td>
                <td>{expense.NAMA_PELANGGAN}</td>
                <td>{expense.TARIF}</td>
                <td>{expense.DAYA}</td>
                <td>{expense.JATUH_TEMPO}</td>
                <td>{expense.PERIODE_PEMAKAIAN}</td>
                <td>{expense.PERIODE_BAYAR}</td>
                <td>{expense.KWHAWAL}</td>
                <td>{expense.KWHAKHIR}</td>
                <td>{expense.KWHPAKAI}</td>
                <td>{formatedPrice(expense.RPTAG)}</td>
                <td>{formatedPrice(expense.DENDA)}</td>
                <td>{formatedPrice(expense.TOTAL)}</td>
                <td>{expense.STATUS}</td>
              </tr>
            })
          }
      </tbody>
    </table>
    </div>
    </div>
  );
}

export default App;
