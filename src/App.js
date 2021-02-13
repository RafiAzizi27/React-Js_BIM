import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      berat: 0,  
      tinggi: 0,
      hasil: 0,
      keterangan: "Silahkan masukkan berat badan anda dalam satuan kilogram dan tinggi badan anda dalam satuan cm",
      warna: "info"
    }
  }
  beratBadan = (event) => {
    this.setState({berat: event.target.value});
  }
  tinggiBadan = (event) => {
    this.setState({tinggi: event.target.value});
  }
  hasil = () => {
    this.setState({hasil: this.state.berat / ((this.state.tinggi * this.state.tinggi)/10000)});
    
    if (this.state.hasil <= 18) {
      return this.setState({keterangan: "Anda Kurus", warna: "warning"});
    }
    else if (this.state.hasil > 18 && this.state.hasil <=23){
      return this.setState({keterangan: "Berat badan anda ideal, mantap pertahankan", warna: "success"});
    }
    else if (this.state.hasil > 23 && this.state.hasil <=28){
      return this.setState({keterangan: "Normal menengah gemuk", warna: "info"});
    }
    else {
      return this.setState({keterangan: "anda advanced Normal (FAT)", warna: "danger"});
    }
  }
  render(){
    return (
      <div className="container text-center">
        <div className="row mt-4">
          <div className="col bg-dark">
            <h5 className="fw-bold p-4 putih">BMI Calculator</h5>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label putih text-start">Berat</label>
              <div class="col-sm-10">
                <input type="number" class="form-control" placeholder="Masukkan dalam satuan kg" onChange={this.beratBadan} />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label putih text-start">Tinggi</label>
              <div class="col-sm-10">
                <input type="number" class="form-control" placeholder="Masukkan dalam satuan cm" onChange={this.tinggiBadan} />
              </div>
            </div>
            <div className="row pt-4 mb-4">
              <div className="col d-grid gap-2">
                <button type="button" onClick={this.hasil} className="btn btn-success">Hitung</button>
              </div>
            </div>
            <div className="row p-2 mb-2">
            <div className={"alert alert-" + this.state.warna}><p>{this.state.keterangan}</p></div>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default App;
