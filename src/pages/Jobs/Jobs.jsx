import React,{useState,useEffect,Suspense,lazy} from "react";
import axios from "axios";
import "./Jobs.css";
import Loader from "../../components/Loader/Loader";

const Card = lazy(()=>{
  return import('../../components/Card/Card')
})

function Jobs(props) {

const [state, setstate] = useState({
  data: [],
  loader: false,
  emptyJob: false,
  
})

let page = 1

useEffect(() => {
  let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json${props.location.search}`;
    axios
      .get(url)
      .then((res) => {
        setstate({ data: res.data, loader: true });
      })
      .catch((err) => {
        console.log(err);
      });
}, []);

  const nextState = () => {
    setstate({ loader: false });
      page += 1;

    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=" +
          page
      )
      .then((res) => {
        setstate({ data: res.data, loader: true });
        console.log(page)
        if (res.data.length === 0) {
          setstate({ emptyJob: true });
        }
      })
};

  const goBack = () => {
    setstate({ loader: false });
    page -= 1;
    if (page < 0) {
      page -= 1;
    }
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=" +
        page
      )
      .then((res) => {
        setstate({ data: res.data, loader: true });
        if (res.data.length === 0) {
        setstate({ emptyJob: true });
        }
      })
  };


  return (
    <>
      {!state.loader ? (
        <Loader />
      ) : (
        <div className="JobsContainer">
          {state.data.map((item, i) => {
            return (
              <Suspense key={i} fallback={<div>Loading....</div>}>
                <Card
                  name={item.title}
                  companyImage={item.company_logo}
                  companyName={item.company}
                  adress={item.location}
                  info={item.description}
                  apply={item.how_to_apply}
                  link={item.url}
                  companyLink={item.company_url}
                />
              </Suspense>
            );
          })}
        </div>
      )}

      <div className="pagination">
        {page !== 1 && (
          <button
            style={{
              padding: "10px 0",
              marginBottom: "10px",
              backgroundColor: "#f7ed00",
              border: "0"
            }}
            onClick={goBack}
          >
            Go Back
          </button>
        )}

        {!state.emptyJob || state.data.length !==0 && (
          <button
            style={{
              padding: "10px 0",
              marginBottom: "10px",
              backgroundColor: "#f7ed00",
              border: "0"
            }}
            onClick={nextState}
          >
            Next Page
          </button>
        )}
      </div>
    </>
  );
}

export default Jobs
