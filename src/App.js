import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import reactLogo from "./covid.png";
//import Button from "@material-ui/core/Button";
//import Brightness4Icon from "@material-ui/icons/Brightness4";

export default class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const response = await fetchData();
    this.setState({ data: response });
    //console.log(data);
  }
  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.logo} src={reactLogo} atl="React-logo" />
        <Cards data={data} />
        <CountryPicker />
        <br />
        <Chart />
      </div>
    );
  }
}

//export default App;
