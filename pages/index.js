import React, { useEffect, useState } from "react";
import Head from "../components/head";

const Home = () => {
  const [box] = useState([
    { s: 0, e: 6 },
    { s: 7, e: 12 },
    { s: 13, e: 18 },
    { s: 19, e: 24 },
    { s: 25, e: 30 },
    { s: 31, e: 36 },
    { s: 37, e: 42 },
    { s: 43, e: 48 },
    { s: 49, e: 54 },
    { s: 55, e: 60 }
  ]);
  const [array, setArray] = useState([]);
  const [cutz, setCutz] = useState();
  const [lodding, setLodding] = useState(0);

  useEffect(() => {
    // console.log(array);
    // async function getDate() {
    //	const res = await fetch('/api/date');
    //	const newDate = await res.json();
    //	setDate(newDate);
    // }
    // getDate();
  }, []);

  async function InsertBACARAT(data) {
    await setArray([...array, { w: data }]);
    if ((await array.length) > 4) {
      setLodding(1);
      setCutz(Math.floor(Math.random() * 100 + 1));
      setTimeout(() => {
        setLodding(0);
      }, 3000);
    }
  }

  return (
    <div>
      <Head title="Home" />

      <link
        href="https://fonts.googleapis.com/css?family=Prompt&display=swap"
        rel="stylesheet"
      />
      <div className="hero">
        <center>
          <img className="pt-5 sss" src="/logobrand66.png" width="500px" />
        </center>
        <h1 className="title">สูตรบาคาร่า</h1>
        {!lodding ? (
          <p className="description pt-1">
            {cutz ? (
              cutz > 66.6666666667 ? (
                <p className="description">
                  <img
                    src="/BB.png"
                    align="center"
                    width="50px"
                    className="sss"
                  />
                  <br />
                  <p className="pt-1">ตานี้เดิมพัน: เจ้ามือ</p>
                </p>
              ) : cutz > 33.3333333333 ? (
                <p className="description">
                  <img
                    src="/TT.png"
                    align="center"
                    width="50px"
                    className="sss"
                  />
                  <br />
                  <p className="pt-1">ตานี้เดิมพัน: เสมอ</p>
                </p>
              ) : (
                <p className="description">
                  <img
                    src="/PP.png"
                    align="center"
                    width="50px"
                    className="sss"
                  />
                  <br />
                  <p className="pt-1">ตานี้เดิมพัน: ผู้เล่น</p>
                </p>
              )
            ) : (
              ""
            )}
          </p>
        ) : (
          <p className="title">
            <img src="/load.gif" align="center" className="sss" width="100px" />
          </p>
        )}
        <center className="pt-1">
          <div
            className="container"
            style={{
              width: "610px"
            }}
          >
            <div className="row justify-content-md-center w50">
              {box
                ? box.map(boxes => (
                    <div className="col-1 nopadding">
                      {array ? (
                        [...Array(60)].map((element, i) =>
                          i >= boxes.s - 1 && i <= boxes.e - 1 ? (
                            <img
                              src={array[i] ? array[i].w + ".png" : "C.png"}
                              width="50px"
                              alt="..."
                              className="rounded nopadding"
                            />
                          ) : (
                            ""
                          )
                        )
                      ) : (
                        <span className="loading" />
                      )}
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </center>
        <center>
          <div
            className="container nopadding p-3"
            style={{
              width: "610px"
            }}
          >
            <div className="row nopadding justify-content-md-center">
              <div
                className="col nopadding"
                style={{
                  paddingRight: "0px !important",
                  paddingLeft: "0px !important"
                }}
              >
                <button
                  type="button"
                  onClick={() => InsertBACARAT("P")}
                  className="btn nopadding btn-primary btn-lg btn-block"
                >
                  ผู้เล่น
                </button>
              </div>
              <div
                className="col nopadding"
                style={{
                  paddingRight: "0px !important",
                  paddingLeft: "0px !important"
                }}
              >
                <button
                  type="button"
                  onClick={() => InsertBACARAT("T")}
                  className="btn nopadding btn-success btn-lg btn-block"
                >
                  เสมอ
                </button>
              </div>
              <div
                className="col nopadding"
                style={{
                  paddingRight: "0px !important",
                  paddingLeft: "0px !important"
                }}
              >
                <button
                  type="button"
                  onClick={() => InsertBACARAT("B")}
                  className="btn nopadding btn-danger btn-lg btn-block"
                >
                  เจ้ามือ
                </button>
              </div>
            </div>
          </div>
        </center>
      </div>

      <style jsx>{`
        * {
          font-family: "Prompt", sans-serif;
        }
        body {
          width: 100vw;
          height: 100vh;
        }
        .nopadding {
          padding: 0 !important;
          margin: 0 !important;
        }
        .sss {
          -webkit-filter: drop-shadow(5px 5px 5px #222);
          filter: drop-shadow(5px 5px 5px #222);
        }
        .hero {
          // background-color: #e7eff1;
          background-image: url("/เว็บพนันบอลออนไลน์-สะดวก-สบาย-เล่นกว่าที่.jpg");

          background-repeat: no-repeat;
          background-position: center center;
          background-attachment: fixed;
          -o-background-size: 100% 100%, auto;
          -moz-background-size: 100% 100%, auto;
          -webkit-background-size: 100% 100%, auto;
          background-size: 100% 100%, auto;

          width: 100vw;
          height: 100vh;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 20px;
          line-height: 1.15;
          font-size: 48px;
          text-shadow: 2px 2px #fff;
        }
        .title,
        .description {
          text-align: center;
          text-shadow: 2px 2px #fff;
        }
      `}</style>
    </div>
  );
};

export default Home;
