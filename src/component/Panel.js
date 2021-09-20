import React, {useState, useEffect} from 'react';
import DropDown from './dropdown'
import "../assets/styles/style.css"

const currencies = [
  {label:'USD' ,icon: 'http://countryflagicons.com/SHINY/32/US.png', value: 'USD'}, {label: 'NGN', icon: 'http://countryflagicons.com/SHINY/32/NG.png', value: 'NGN'}, {label: 'GBP', icon:'http://countryflagicons.com/SHINY/32/GB.png', value: 'GBP'}, {label: 'EUR', icon: 'http://countryflagicons.com/SHINY/32/FR.png', value: 'EUR'}
];
const Panel = (props) => {

  function fetchCurrency(k) {
      const c = currencies.filter(x=>x.label===k);
      return c[0];
  }

  function loadParams (amount = 100, rate, curr1, curr2, inverse = false) {
      let iGive = amount * rate;
      let youGive = amount;
      let activeCurr = [fetchCurrency(curr1), fetchCurrency(curr2)]
      let havePercentage = 0.03;
      let getPercentage = 0.03;
   
      if(inverse){
        iGive = amount;
        youGive = amount * rate;
        activeCurr = [fetchCurrency(curr2), fetchCurrency(curr1)]
      }
      return {
        "have": {
          'iGive': iGive,
          'youGet': iGive - (iGive * havePercentage),
          'activeCurr': activeCurr[0].label,
          'icon': activeCurr[0].icon,
          'percentage': havePercentage * 100,
        },
        "get": {
          'youGive': youGive,
          'iGet': youGive - (youGive * getPercentage),
          'activeCurr': activeCurr[1].label,
          'icon': activeCurr[1].icon,
          'percentage': getPercentage * 100,
        },
        "activeCurr": activeCurr,
      }
    }

    const[rate, setRate] = useState(420);
    const[amount, setAmount] = useState(0);
    const[currencyOne, setCurrencyOne] = useState('NGN');
    const[currencyTwo, setCurrencyTwo] = useState('USD');
    const[currentRate, setCurrentRate] = useState(`${rate} ${currencyOne}/${currencyTwo}`);
    const[parameters, setParameters] = useState(loadParams(100, 420, currencyOne, currencyTwo));

    console.log(parameters);

    const updateAmount = (newAmount) => {
      setAmount(newAmount);
      updateParams();
    }

    useEffect(()=> [parameters])

    const updateCurrentRate = () => {
      setCurrentRate(`${rate} ${currencyOne}/${currencyTwo}`)
    }

    const updateRate = (newRate) => {
      setRate(newRate);
      updateCurrentRate();
      updateParams();
    }

    const updateParams = (inverse=false) => {
      setParameters(loadParams(amount, rate, currencyOne, currencyTwo));
    }

    const updateCurrencyOne_ = (currency) => {
      if(currency !== parameters.have.activeCurr) {
        setCurrencyTwo(parameters.have.activeCurr);
        setCurrencyOne(currency);
        updateParams(true);
      }
    }

    const updateCurrencyOne = (currency) => {
      setCurrencyOne(currency);
      updateCurrentRate();
      updateParams();
    }

    const updateCurrencyTwo = (currency) => {
      setCurrencyTwo(currency);
      updateCurrentRate();
      updateParams();
    }

      return (
        <div>
            <div className="rate-calculator mt-5" style={{color: '#333'}}>
                    <div className="py-1 px-3">
                      <span className='rate'> Rate <i className="fas fa-info-circle"></i></span>
                      <input
                          type="text"
                          value={rate}
                          placeholder="Input your rate"
                          className="calculator-input"
                          onChange={e => updateRate(e.target.value)}
                      />
                      <div className="hero-search relative">
                        <DropDown
                            value={currencyOne}
                            size={"medium"}
                            options={currencies}
                            onSelect={updateCurrencyOne}
                            dropdownClass="calculator-banner-dropdown"
                            className="calculator-select-class"
                        />
                        {/* <span className="calculator-divider"></span> */}
                        <DropDown
                            value={currencyTwo}
                            size={"medium"}
                            options={currencies}
                            onSelect={updateCurrencyTwo}
                            dropdownClass="calculator-banner-dropdown"
                            className="calculator-select-class"
                        />
                      </div>
                    <span className="rate-show" style={{fontSize:"10px",fontWeight:"700"}}>{currentRate}</span>
                    </div>
            </div>
            <div className="hero-form-box">
                <div className="px-3 py-3 row">
                  <div className="float-left col-6">
                    <div className="i-have row mb-1 px-3">
                      <label className='-ml-3'>I have <i className="fas fa-info-circle"></i></label>
                      <div className="input-select-group hero-box col-12 row" >
                        <input
                          placeholder="Input amount"
                          className="col-7 col-lg-8"
                          value={parameters.have.iGive}
                          onChange={e => updateAmount(e.target.value)}
                        />
                        <DropDown
                            value={parameters.have.activeCurr}
                            size={"medium"}
                            options={parameters.activeCurr}
                            dropdownClass="calculator-banner-dropdown"
                            className="calculator-select-class col-5 col-lg-4"
                            style={{minWidth: '85px'}}
                            customDropdown={true}
                            hasIcon={true}
                            iconClass="dropdown-icon-flag"
                            onSelect={updateCurrencyOne_}
                        />
                      </div>
                    </div>
                    <div className="transfer-desc ml-1 mt-2">
                      <p className="desc" style={{color:"#fff",fontSize:"11px"}}>
                      100 USD - KweekTransfer fees <br /> {parameters.have.percentage}% of what I have
                      </p>
                      <i className="fas fa-minus-circle"></i>
                    </div>
                    <div className="you-get row mt-1 pl-3">
                      <label className="-ml-3">You Get <i className="fas fa-info-circle"></i></label>
                      <div className="input-select-group col-12 row">
                        <input
                          placeholder="Input amount"
                          className="col-7 col-lg-8"
                          value={parameters.have.youGet} disabled
                        />
                        <span className="col-5 col-lg-4">
                          <span className="currency-box">
                            <img src={parameters.have.icon} alt="" style={{marginTop: 2, height: 16, float: 'left'}} className="mr-1" /> <small style={{fontSize: 11}}><b>{parameters.have.activeCurr}</b></small>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 pl-4 float-left">
                  <div className="you-give mb-1 row">
                    <label>You give <i className="fas fa-info-circle"></i></label>
                    <div className="input-select-group col-12 px-4 row">
                      <input
                        placeholder="Input amount"
                        className="col-7 col-lg-8"
                        value={parameters.get.youGive} disabled
                      />
                      <span className="col-5 col-lg-4">
                          <span className="currency-box">
                            <img src={parameters.get.icon} alt="" style={{marginTop: 2, height: 16, float: 'left'}} className="mr-1" /> <small style={{fontSize: 11}}><b>{parameters.get.activeCurr}</b></small>
                          </span>
                        </span>
                    </div>
                  </div>
                  <div className="transfer-desc mt-1">
                    <p className="desc" style={{color:"#fff",fontSize:"11px"}}>
                    1000 NGN - KweekTransfer fees <br /> {parameters.get.percentage}% of what you give
                    </p>
                    <i className="fas fa-minus-circle"></i>
                  </div>
                  <div className="i-get row mt-1">
                    <label>I Get <i className="fas fa-info-circle"></i></label>
                    <div className="input-select-group col-12 row px-4">
                      <input
                        placeholder="Input amount"
                        className="col-7 col-lg-8"
                        value={parameters.get.iGet} disabled
                      />
                      <span className="col-5 col-lg-4">
                          <span className="currency-box">
                            <img src={parameters.get.icon} alt="" style={{marginTop: 2, height: 16, float: 'left'}} className="mr-1" /> <small style={{fontSize: 11}}><b>{parameters.get.activeCurr}</b></small>
                          </span>
                        </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
      )
  }

  export default Panel;