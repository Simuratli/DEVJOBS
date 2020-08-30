import React from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import "./Jobs.css";
import Loader from "../../components/Loader/Loader";

class Jobs extends React.Component {
  state = {
    data: [],
    loader: false,
    emptyJob: false
  };
  page = 1;

  componentDidMount() {
    let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json${this.props.location.search}`;
    axios
      .get(url)
      .then((res) => {
        this.setState({ data: res.data, loader: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  nextState = () => {
    this.setState({ loader: false });
    this.page += 1;

    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=" +
          this.page
      )
      .then((res) => {
        this.setState({ data: res.data, loader: true });
        if (res.data.length === 0) {
          this.setState({ emptyJob: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  goBack = () => {
    this.setState({ loader: false });
    this.page -= 1;
    if (this.page < 0) {
      this.page -= 1;
    }

    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=" +
          this.page
      )
      .then((res) => {
        this.setState({ data: res.data, loader: true });
        if (res.data.length === 0) {
          this.setState({ emptyJob: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        {!this.state.loader ? (
          <Loader />
        ) : (
          <div className="JobsContainer">
            {this.state.data.map((item, i) => {
              return (
                <Card
                  key={i}
                  name={item.title}
                  companyImage={item.company_logo}
                  companyName={item.company}
                  adress={item.location}
                  info={item.description}
                  apply={item.how_to_apply}
                  link={item.url}
                  companyLink={item.company_url}
                />
              );
            })}
          </div>
        )}

        <div className="pagination">
          {this.page !== 1 && (
            <button
              style={{
                padding: "10px 0",
                marginBottom: "10px",
                backgroundColor: "#f7ed00",
                border: "0"
              }}
              onClick={this.goBack}
            >
              Go Back
            </button>
          )}

          {!this.state.emptyJob && (
            <button
              style={{
                padding: "10px 0",
                marginBottom: "10px",
                backgroundColor: "#f7ed00",
                border: "0"
              }}
              onClick={this.nextState}
            >
              Next Page
            </button>
          )}
        </div>
      </>
    );
  }
}

export default Jobs;
