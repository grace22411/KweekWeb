import React from "react";
import Layout from "../../../component/Layout";
import "./style.scss";
import "../global.scss";
// import RecentListComponent from "../../../component/recentList";
// import APP_PATHS from '../../../constants/appPath';
import { COUNTRIES } from "../../../constants/index";
import { Link } from "react-router-dom";
// import ButtonComponent from "../../../component/button";

const countries = COUNTRIES.map((country) => {
    return {
        label: country.name,
        value: country.code
    };
});

export const Search = () => {
  // const [states, setStates] = useState([]);

  // const [showCalc, setShowCalc] = useState({ state: false, text: "Show" });

  // const loadStates = (code) => {
  //   const country = COUNTRIES.filter((x) => x.code === code);
  //   if (country[0].states) {
  //     const states = country[0].states.map((state) => {
  //       return {
  //         label: state.name,
  //         value: state.code,
  //       };
  //     });
  //     setStates(states);
  //   } else setStates([]);
  // };
  return (
    <>
      <Layout>
        <div className="page">
          <div className="currency-container">
            <div className="currency">
              <h2>WHAT CURRENCY DO YOU REQUIRE TODAY?</h2>
              {/* <DropDown
                placeholder="Country"
                size={"large"}
                options={countries}
                onSelect={loadStates}
                dropdownClass="banner-dropdown"
                style={{ width: 150, borderRadius: 6 }}
                className="select-class"
              /> */}
              <select className="form-control">
                <option value={countries}>{}</option>
              </select>
              <select className="form-control">
                <option>Currency</option>
                <option>Recieving Country</option>
              </select>
              <Link to="search-results"><button>SEARCH INVITES</button></Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;
