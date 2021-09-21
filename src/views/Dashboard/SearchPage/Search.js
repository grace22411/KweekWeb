import React, { useState } from "react";
import Layout from "../../../component/Layout";
import "./style.scss";
import "../global.scss";
// import RecentListComponent from "../../../component/recentList";
// import APP_PATHS from '../../../constants/appPath';
import { COUNTRIES } from "../../../constants/index";
import { Link } from "react-router-dom";
import DropDown from "../../../component/dropdown";
// import ButtonComponent from "../../../component/button";

const countries = COUNTRIES.map((country) => {
  return {
    label: country.name,
    value: country.code,
  };
});
const currencies = [
  {
    label: "USD",
    icon: "http://countryflagicons.com/SHINY/32/US.png",
    value: "USD",
  },
  {
    label: "NGN",
    icon: "http://countryflagicons.com/SHINY/32/NG.png",
    value: "NGN",
  },
  {
    label: "GBP",
    icon: "http://countryflagicons.com/SHINY/32/GB.png",
    value: "GBP",
  },
  {
    label: "EUR",
    icon: "http://countryflagicons.com/SHINY/32/FR.png",
    value: "EUR",
  },
];

export const Search = () => {
  const [states, setStates] = useState([]);

  const loadStates = (code) => {
    const country = COUNTRIES.filter((x) => x.code === code);
    if (country[0].states) {
      const states = country[0].states.map((state) => {
        return {
          label: state.name,
          value: state.code,
        };
      });
      setStates(states);
    } else setStates([]);
  };
  return (
    <>
      <Layout>
        <div className="page">
          <div className="currency-container">
            <div className="currency">
              <h2>WHAT CURRENCY DO YOU REQUIRE TODAY?</h2>
              <DropDown
                placeholder="Recieving Country"
                size={"large"}
                options={countries}
                onSelect={loadStates}
                dropdownClass="banner-dropdown"
                style={{ width: "100%", borderRadius: 0, border:"1px solid #7BA9DA", boxShadow:"0px 3px 6px #00000029", marginBottom: "25px" }}
                className="select-class control"
              />
              <DropDown
                placeholder="Currency"
                size={"large"}
                options={currencies}
                //onSelect={updateCurrencyOne}
                dropdownClass="calculator-banner-dropdown"
                className="select-class control"
                style={{ width: "100%", borderRadius: 0 ,border:"1px solid #7BA9DA", boxShadow:"0px 3px 6px #00000029",marginBottom: "25px"}}
              />
              
              <Link to="search-results">
                <button>SEARCH INVITES</button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;
