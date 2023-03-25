import "./App.css";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("monthly");

  function handleMonthlyClick() {
    setActive("monthly");
  }

  function handleYearlyClick() {
    setActive("yearly");
  }

  return (
    <div className=" container-fluid pricingTable pt-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="inner d-flex tabsBtnHolder">
              <ul>
                <li>
                  <p
                    id="monthly"
                    className={`text-center my-2 ${
                      active === "monthly" ? "active" : ""
                    }`}
                    onClick={handleMonthlyClick}
                  >
                    Monthly
                  </p>
                </li>
                <li>
                  <p
                    id="yearly"
                    className={`text-center my-2 ${
                      active === "yearly" ? "active" : ""
                    }`}
                    onClick={handleYearlyClick}
                  >
                    yearly
                  </p>
                </li>
                <li
                  className="indicator"
                  style={{ left: active === "monthly" ? "2px" : "163px" }}
                ></li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`row ${
            active === "monthly" ? "monthlyPriceList" : "yearlyPriceList"
          } animated`}
        >
          
          <div className="col-md-4">
            <div
              className={`inner holder ${active === "monthly" ? "" : "active"}`}
            >
              <div className="hdng">
                <p>Starter Plan</p>
              </div>
              <div className="price mt-5">
                <p>
                  <b>${active === "monthly" ? "10" : "120"}</b>
                  <span> / {active === "monthly" ? "month" : "year"}</span>
                </p>
              </div>
              <div className="info">
                {active === "monthly" ? (
                  <>
                    <p>50GB Disk Space</p>
                    <p>50 Email Accounts</p>
                    <p>50GB Monthly Bandwidth</p>
                    <p>10 subdomains</p>
                    <p>15 Domains</p>
                  </>
                ) : (
                  <>
                    <p>60GB Disk Space</p>
                    <p>60 Email Accounts</p>
                    <p>60GB Monthly Bandwidth</p>
                    <p>15 subdomains</p>
                    <p>20 Domains</p>
                  </>
                )}
              </div>
              <div className="btn">
                <a href="Starter Plan" className="readon">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className={`inner holder ${active === "monthly" ? "active" : ""}`}
            >
              <div className="hdng">
                <p>Basic Plan</p>
              </div>
              <div className="price mt-5">
                <p>
                  <b>${active === "monthly" ? "20" : "230"}</b>
                  <span> / {active === "monthly" ? "month" : "year"}</span>
                </p>
              </div>
              <div className="info">
                {active === "monthly" ? (
                  <>
                    <p>100GB Disk Space</p>
                    <p>100 Email Accounts</p>
                    <p>100GB Monthly Bandwidth</p>
                    <p>20 subdomains</p>
                    <p>30 Domains</p>
                  </>
                ) : (
                  <>
                    <p>150GB Disk Space</p>
                    <p>120 Email Accounts</p>
                    <p>150GB Monthly Bandwidth</p>
                    <p>25 subdomains</p>
                    <p>40 Domains</p>
                  </>
                )}
              </div>
              <div className="btn">
                <a href="Business Plan" className="readon">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className={`inner holder ${active === "monthly" ? "" : "active"}`}
            >
              <div className="hdng">
                <p>Business Plan</p>
              </div>
              <div className="price mt-5">
                <p>
                  <b>${active === "monthly" ? "30" : "350"}</b>
                  <span> / {active === "monthly" ? "month" : "year"}</span>
                </p>
              </div>
              <div className="info">
                {active === "monthly" ? (
                  <>
                    <p>150GB Disk Space</p>
                    <p>150 Email Accounts</p>
                    <p>150GB Monthly Bandwidth</p>
                    <p>30 subdomains</p>
                    <p>40 Domains</p>
                  </>
                ) : (
                  <>
                    <p>200GB Disk Space</p>
                    <p>180 Email Accounts</p>
                    <p>170GB Monthly Bandwidth</p>
                    <p>35 subdomains</p>
                    <p>45 Domains</p>
                  </>
                )}
              </div>
              <div className="btn">
                <a href="Business Plan" className="readon">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
