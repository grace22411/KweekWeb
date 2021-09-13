import React from "react";
import Layout from "../../../component/Layout";
import "./style.scss";
import "../global.scss";
import SearchResultComponent from "../../../component/searchResult";


export const SearchResult = () => {
  
  return (
    <>
     <Layout>
       <SearchResultComponent count="12" />
     </Layout>
    </>
  );
};

export default SearchResult;
