import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Container from "react-bootstrap/Container";

import Banner from "./component/Banner";
import SearchForm from "./component/SearchForm";
import Repos from "./component/Repos";
import ErrorMessage from "./component/ErrorMessage";
import LoadingSpinner from "./component/LoadingSpinner";

function App() {
  const [url, setUrl] = useState();
  // we need 3 state when fetching Url
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  //loading is false as we have not click on loadind
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const { data } = await axios.get(url);
          // console.log(data)
          setError(false);
          setData(data);
        } catch (error) {
          console.log(error.message);
          setError(true);
        }
        setIsLoading(false);
      };
      fetchData();
    }
  }, [url]);

  const handleSearch = (mode, searchText) => {
    console.log(mode, searchText);
    if (mode === "organisation") {
      //const url = `https://api.github.com/orgs/${searchText}/repos`;
      setUrl(`https://api.github.com/orgs/${searchText}/repos`);
    }
    if (mode === "userName") {
      setUrl(`https://api.github.com/users/${searchText}/repos`);
    }
  };
  console.log(data);
  console.log(error);

  return (
    <Container>
      <Banner />

      <SearchForm handleSearch={handleSearch} />

      {isLoading && <LoadingSpinner />}

      {error && !data && <ErrorMessage />}

      {data && !error && <Repos repos={data} />}
    </Container>
  );
}

export default App;
