import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  buyerSteps,
  homeCarouselData,
  pillars,
  sellerSteps,
  testimonials,
} from "../../data/Home/HomeData";
import Carousel from "../../components/common/Carousel/Carousel";
import Card from "../../components/common/Card/Card";
import Input from "../../components/common/Input/Input";
import Select from "../../components/common/Select/Select";
import Button from "../../components/common/Button/Button";

const Home = () => {
  const navigate = useNavigate();
  const [journey, setJourney] = useState<"seller" | "buyer">("seller");

  const [currentStep, setCurrentStep] = useState(1);

  const [keyword, setKeyword] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");

  const currentSteps = journey === "seller" ? sellerSteps : buyerSteps;

  const score = 72;
  const progress = score * 3.6;

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (keyword.trim()) {
      params.set("search", keyword.trim());
    }
    if (industry) {
      params.set("industry", industry);
    }
    if (location) {
      params.set("location", location);
    }
    if (budget) {
      params.set("budget", budget);
    }
    const query = params.toString();

    navigate(query ? `/marketplace?${query}` : "/marketplace");
  };

  return (
    <>
      {/* hero carousel */}
      <section
        className="py-5 rounded-4"
        style={{ backgroundColor: "var(--bg-dark)" }}
      >
        <div className="container py-4">
          <Carousel items={homeCarouselData} />
        </div>
      </section>

      {/* intro */}

      <section
        className="py-5 mt-3 rounded-4"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-9 mx-auto">
              <div
                className="fw-bold mb-3 small"
                style={{ color: "var(--orange)" }}
              >
                🇮🇳 Built for India's MSMEs
              </div>
              <h1 className="display-4 fw-bold mb-3 text-white">
                No Indian business <br />
                should have to <em style={{ color: "var(--orange)" }}>
                  die
                </em>{" "}
                completely.
              </h1>
              <p className="lead text-secondary mx-auto text-white">
                80% of Indian businesses shut down within five years — and most
                still have value left when they do. ReBusi helps founders sell,
                partially exit, or revive what they built, instead of losing it
                all.
              </p>
            </div>
          </div>
          {/* states */}

          <div className="row g-3 border-top border-secondary mt-5 pt-4">
            <div className="col-6 col-lg-3">
              <div className="text-center p-3 border border-warning rounded-4">
                <div
                  className="fs-3 fw-bold"
                  style={{ color: "var(--orange)" }}
                >
                  2400+
                </div>
                <div className="small text-secondary">
                  businesses found a buyer instead of closing for good
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="text-center p-3 border border-warning rounded-4">
                <div className="fs-3 fw-bold text-white">₹340Cr+</div>
                <div className="small text-secondary">
                  recovered by exiting founders
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="text-center p-3 border border-warning rounded-4">
                <div className="fs-3 fw-bold text-white">18 days</div>
                <div className="small text-secondary">
                  average time from listing to closing
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="text-center p-3 border border-warning rounded-4">
                <div className="fs-3 fw-bold text-white">₹500Cr+</div>
                <div className="small text-secondary">
                  in bank loans kept serviced
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* search */}
      <section
        className="py-5 mt-3 rounded-4"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div className="container">
          <Card className="shadow-sm">
            <div className="row g-3 align-items-end">
              {/* keyword */}
              <div className="col-12 col-md-6 col-lg-3">
                <Input
                  label="Business / keyword"
                  type="text"
                  placeholder="Search businesses..."
                  value={keyword}
                  onChange={(ev) => setKeyword(ev.target.value)}
                />
              </div>

              {/* industry */}
              <div className="col-12 col-md-6 col-lg-2">
                <Select
                  label="Industry"
                  placeholder="All Industries"
                  options={[
                    { label: "Retail", value: "retail" },
                    { label: "Restaurant", value: "restaurant" },
                    { label: "Manufacturing", value: "manufacturing" },
                    { label: "Technology", value: "technology" },
                    { label: "Healthcare", value: "healthcare" },
                  ]}
                  value={industry}
                  onChange={(ev) => setIndustry(ev.target.value)}
                />
              </div>

              {/* location */}
              <div className="col-12 col-md-6 col-lg-2">
                <Select
                  label="Location"
                  placeholder="All Locations"
                  options={[
                    { label: "Pune", value: "Pune" },
                    { label: "Mumbai", value: "Mumbai" },
                    { label: "Delhi", value: "Delhi" },
                    { label: "Bangalore", value: "Bangalore" },
                    { label: "Hyderabad", value: "Hyderabad" },
                  ]}
                  value={location}
                  onChange={(ev) => setLocation(ev.target.value)}
                />
              </div>

              {/* budget */}
              <div className="col-12 col-md-6 col-lg-2">
                <Select
                  label="Budget"
                  placeholder="Any Budget"
                  options={[
                    { label: "under-50l", value: "under-50L" },
                    { label: "50l-1cr", value: "50L-1Cr" },
                    { label: "1cr-5cr", value: "1Cr-5Cr" },
                    { label: "5cr-plus", value: "₹5Cr" },
                  ]}
                  value={budget}
                  onChange={(ev) => setBudget(ev.target.value)}
                />
              </div>

              {/* search and reset */}

              <div className="col-12 col-lg-3 d-flex gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  className=" w-50"
                  onClick={handleSearch}
                >
                  <i className="bi bi-search"></i>
                </Button>
                <Button variant="primary" type="reset" className="w-50">
                  <i className="bi bi-arrow-counterclockwise"></i>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* BUSINESS LIFECYCLE */}

      <section
        className="py-5 mt-3 mx-auto rounded-4"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div className="container">
          <div className="card border-0 shadow-sm rounded-4">
            <div
              className="card-body p-4 p-lg-5"
              style={{ backgroundColor: "var(--ink)" }}
            >
              {/* section header */}
              <div className="row align-items-start mb-5">
                <div className="col-12 col-lg-9">
                  <div
                    className="fw-bold small mb-2"
                    style={{ color: "var(--orange)" }}
                  >
                    WHAT REBUSI ACTUALLY CHANGES
                  </div>
                  <h3 className="fw-bold mb-0 text-white">
                    We catch a business before it disappears —
                    <br />
                    and give it a next owner.
                  </h3>
                </div>
                <div className="col-12 col-lg-3 text-lg-end mt-3 mt-lg-0">
                  <Button
                    type="button"
                    className="btn rounded-pill px-3 w-50"
                    onClick={() => setCurrentStep(1)}
                  >
                    <i className="bi bi-arrow-clockwise me-2"></i>
                    Replay
                  </Button>
                </div>
              </div>

              {/* before / after */}
              <div className="row align-items-center g-4 mt-4 mt-sm-2">
                {/* struggling business */}
                <div className="col-12 col-lg-5">
                  <div className="card-dark p-4 rounded-4 h-100 border-2 border-danger shadow-sm">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <i className="bi bi-buildings fs-2 text-danger"></i>
                      <span className="badge bg-danger text-white rounded-pill px-3 py-2">
                        Struggling
                      </span>
                    </div>
                    <h5 className="fw-bold text-white mb-4">
                      Multi-Cuisine Restaurant, Nashik
                    </h5>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow={25}
                        aria-valuemax={100}
                        aria-valuemin={0}
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <small className="text-secondary">Health Score</small>
                      <small className="fw-bold text-danger">25 / 100</small>
                    </div>
                  </div>
                </div>

                {/* arrow */}

                <div className="col-12 col-lg-2 text-center">
                  <i
                    className="bi bi-arrow-right fs-1"
                    style={{ color: "var(--orange)" }}
                  ></i>
                  <div
                    className="small fw-semibold mt-2"
                    style={{ color: "var(--orange)" }}
                  >
                    Recovered
                  </div>
                </div>

                {/* recovered business */}

                <div className="col-12 col-lg-5">
                  <div className="card-dark p-4 h-100 rounded-4 border-2 border-danger shadow-sm">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <i className="bi bi-leaf fs-2 text-success"></i>
                      <span className="badge bg-success text-white rounded-pill px-3 py-2">
                        Recovered
                      </span>
                    </div>
                    <h5 className="fw-bold text-white mb-4">
                      How run by a new owner
                    </h5>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "88%" }}
                        aria-valuenow={88}
                        aria-valuemax={100}
                        aria-valuemin={0}
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <small className="text-secondary">Health Score</small>
                      <small className="fw-bold text-danger">88 / 100</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* lifecycle steps */}
              <div className="row mt-5 pt-4 position-relative">
                {/* progress line */}
                <div
                  className="position-absolute left-0 right-0 z-0 bg-light"
                  style={{
                    height: "3px",
                    top: "42px",
                  }}
                >
                  <div
                    className="bg-warning h-100"
                    style={{
                      width: `${((currentStep - 1) / 4) * 100}%`,
                      transition: "width .6s ease",
                    }}
                  ></div>
                </div>
                {/* step 1 */}
                <div className="col text-center position-relative">
                  <Button
                    type="button"
                    className={`rounded-circle border border-2.d-inline-flex align-items-center.fw-bold ${
                      currentStep >= 1
                        ? "bg-warning text-dark"
                        : "bg-dark text-white"
                    }`}
                    style={{ width: "40px", height: "40px" }}
                    onClick={() => setCurrentStep(1)}
                  >
                    1
                  </Button>
                  <div className="small fw-semibold mt-3 text-white">
                    Founder runs BVE Diagnostic
                  </div>
                </div>

                {/* step 2 */}
                <div className="col text-center position-relative">
                  <Button
                    type="button"
                    className={`rounded-circle border border-2.d-inline-flex align-items-center.fw-bold ${
                      currentStep >= 2
                        ? "bg-warning text-dark"
                        : "bg-dark text-white"
                    }`}
                    style={{ width: "40px", height: "40px" }}
                    onClick={() => setCurrentStep(2)}
                  >
                    2
                  </Button>
                  <div className="small fw-semibold mt-3 text-white">
                    Lists for partial sale
                  </div>
                </div>

                {/* step 3 */}
                <div className="col text-center position-relative">
                  <Button
                    type="button"
                    className={`rounded-circle border border-2.d-inline-flex align-items-center.fw-bold ${
                      currentStep >= 3
                        ? "bg-warning text-dark"
                        : "bg-dark text-white"
                    }`}
                    style={{ width: "40px", height: "40px" }}
                    onClick={() => setCurrentStep(3)}
                  >
                    3
                  </Button>
                  <div className="small fw-semibold mt-3 text-white">
                    Verified buyer found
                  </div>
                </div>

                {/* Step 4 */}
                <div className="col text-center position-relative">
                  <button
                    type="button"
                    className={`rounded-circle border border-2 d-inline-flex align-items-center justify-content-center fw-bold ${
                      currentStep >= 4
                        ? "bg-warning text-dark"
                        : "bg-dark text-white"
                    }`}
                    style={{
                      width: "42px",
                      height: "42px",
                    }}
                    onClick={() => setCurrentStep(4)}
                  >
                    4
                  </button>

                  <div className="small fw-semibold mt-3 text-white">
                    NDA signed, Deal Room opens
                  </div>
                </div>

                {/* Step 5 */}
                <div className="col text-center position-relative">
                  <button
                    type="button"
                    className={`rounded-circle border border-2 d-inline-flex align-items-center justify-content-center fw-bold ${
                      currentStep >= 5
                        ? "bg-warning text-dark"
                        : "bg-dark text-white"
                    }`}
                    style={{
                      width: "42px",
                      height: "42px",
                    }}
                    onClick={() => setCurrentStep(5)}
                  >
                    5
                  </button>

                  <div className="small fw-semibold mt-3 text-white">
                    Sale closes — founder recovers ₹
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pillers */}

      <section
        className="py-5 mt-3 mx-auto rounded-4"
        style={{ backgroundColor: "var(--ghost)" }}
      >
        <div className="container">
          {/* section header */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-lg-start text-center">
              <div
                className="fw-bold small mb-2 text-capitalize"
                style={{ color: "var(--ink)" }}
              >
                One ecosystem, four pillars
              </div>
              <h2 className="display-6 fw-bold mb-3">
                Everything you need to move forward.
              </h2>
              <p className="text-white mb-0">
                From buying and selling to revival, finance and business
                resources — ReBusi brings the complete ecosystem together.
              </p>
            </div>
          </div>

          {/* pillers */}
          <div className="row g-4">
            {pillars.map((pillar) => (
              <div className="col-12 col-md-4 col-lg-6" key={pillar.number}>
                <div className="card-dark border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body p-4 d-flex flex-column">
                    {/* number + icon */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center fs-3"
                        style={{
                          width: "52px",
                          height: "52px",
                          backgroundColor: "var(--orange)",
                        }}
                      >
                        {pillar.icon}
                      </div>
                      <span
                        className="fw-bold"
                        style={{ color: "var(--orange)" }}
                      >
                        {pillar.number}
                      </span>
                    </div>
                    {/* title */}
                    <h5 className="fw-bold mb-3">{pillar.title}</h5>
                    {/* description */}
                    <p className="text-white mb-4">{pillar.desc}</p>

                    {/* Links */}
                    <div className="mt-auto">
                      {pillar.links.map((link) => (
                        <div
                          className="d-flex align-items-center mb-2"
                          key={link}
                        >
                          <i
                            className="bi bi-arrow-right me-2"
                            style={{ color: "var(--orange)" }}
                          ></i>
                          <span className="small fw-semibold">{link}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how rebusi works */}

      <section
        className="py-5 mt-3 mx-auto rounded-4"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div className="container">
          {/* section header */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center text-lg-start">
              <div
                className="fw-bold small mb-2 text-capitalize"
                style={{ color: "var(--orange)" }}
              >
                How rebusi works
              </div>
              <h4 className="display-4 fw-bold text-white mb-3">
                {" "}
                A clearer path from problem to possibility.
              </h4>
              <p className="text-secondary mb-0">
                Whether you're selling your business or looking for your next
                opportunity, ReBusi gives you a structured journey from start to
                finish.
              </p>
            </div>
          </div>

          {/* journey toggle button */}
          <div className="row mb-5">
            <div className="col-12 d-flex justify-content-center ">
              <div
                className="btn-group"
                role="group"
                aria-label="Choose your journey"
              >
                <Button
                  type="button"
                  className={`btn ${journey === "seller" ? "btn-primary" : "btn-outline"} px-4`}
                  onClick={() => setJourney("seller")}
                >
                  <i className="bi bi-shop me-2"></i>
                  I' am Selling
                </Button>

                <Button
                  type="button"
                  className={`btn ${journey === "buyer" ? "btn-primary" : "btn-outline"} px-4`}
                  onClick={() => setJourney("buyer")}
                >
                  <i className="bi bi-shop me-2"></i>
                  I' am Buying
                </Button>
              </div>
            </div>
          </div>

          {/* steps */}
          <div className="row mb-2 g-4">
            {currentSteps.map((step, index) => (
              <div className="col-12 col-md-6 col-lg-3" key={step.title}>
                <div className="card-dark border-1 border-warning rounded-4 shadow-sm">
                  <div className="card-body p-4">
                    {/* step number */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                        style={{
                          backgroundColor: "var(--orange)",
                          color: "var(--ink)",
                          width: "42px",
                          height: "42px",
                        }}
                      >
                        {index + 1}
                      </div>
                      <span
                        className="small fw-bold"
                        style={{ color: "var(--orange)" }}
                      >
                        STEP {index + 1}
                      </span>
                    </div>

                    {/* icon */}
                    <div className="fs-1 mb-3">{step.icon}</div>

                    {/* title */}
                    <h5 className="fw-bold text-white mb-3">{step.title}</h5>

                    {/* description */}
                    <p className=" text-secondary mb-0">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* bottom cta */}

          <div className="row mt-5">
            <div className="col-12 text-center">
              <p className="text-secondary mb-3">
                {journey === "seller"
                  ? "Ready to see what your business could be worth?"
                  : "Ready to find a business worth building on?"}
              </p>
              <Button
                type="button"
                className="btn btn-primary rounded-pill px-4"
              >
                {journey === "seller" ? "Start Selling" : "Explore Businesses"}
                <i className="bi bi-arrow-right ms-2"></i>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Health */}

      <section
        className="py-5 mt-3 mx-auto rounded-4"
        style={{ backgroundColor: " var(--ghost)" }}
      >
        <div className="container">
          <div className="row align-items-center g-2">
            {/* left content */}
            <div className="col-12 col-lg-6">
              <div className="fw-bold small mb-2">BUSINESS HEALTH</div>

              <h2 className="display-6 fw-bold mb-4">
                Know what's really happening inside your business.
              </h2>

              <p className="text-white mb-4">
                The ReBusi Health Diagnostic looks across the important parts of
                your business and gives you a clear picture of where you stand —
                before you decide what to do next.
              </p>

              <div className="row g-3 d-flex flex-column">
                <div className="col-12 col-sm-6 col-lg-12 mb-3">
                  <div className="d-flex gap-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "42px",
                        height: "42px",
                        backgroundColor: "var(--orange)",
                      }}
                    >
                      <i className="bi bi-heart-pulse"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">7 health dimensions</h6>

                      <p className="small text-white mb-0">
                        Get a structured view of your business health.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-12 mb-3">
                  <div className="d-flex gap-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "42px",
                        height: "42px",
                        backgroundColor: "var(--orange)",
                      }}
                    >
                      <i className="bi bi-clock"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">10-minute diagnostic</h6>

                      <p className="small text-white mb-0">
                        Quick enough to understand your current position.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-12 mb-3">
                  <div className="d-flex gap-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "42px",
                        height: "42px",
                        backgroundColor: "var(--orange)",
                      }}
                    >
                      <i className="bi bi-graph-up-arrow"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Clear health score</h6>

                      <p className="small text-white mb-0">
                        Understand strengths, risks and opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-12 mb-3">
                  <div className="d-flex gap-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "42px",
                        height: "42px",
                        backgroundColor: "var(--orange)",
                      }}
                    >
                      <i className="bi bi-currency-rupee"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Indicative valuation</h6>

                      <p className="small text-white mb-0">
                        Get an initial indication of what your business may be
                        worth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Button
                  type="button"
                  className="btn btn-primary rounded-pill px-4"
                >
                  Run the Health Diagnostic
                  <i className="bi bi-arrow-right ms-2"></i>
                </Button>
              </div>
            </div>

            {/* right content */}
            <div className="col-12 col-lg-6">
              <div className="card-dark border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="card-body p-4 p-lg-5">
                  <div className="d-flex align-items-start justify-content-between mb-4">
                    <div>
                      <div
                        className="small fw-bold mb-2 text-uppercase"
                        style={{ color: "var(--orange)" }}
                      >
                        Your business health
                      </div>
                      <h4 className="fw-bold text-white mb-0">
                        {" "}
                        Health Diagnostic
                      </h4>
                    </div>
                    <span className="badge bg-warning text-dark rounded-pill px-3 py-2">
                      Demo
                    </span>
                  </div>

                  {/* score */}

                  {/* Circular Score */}
                  <div className="text-center py-4">
                    <div
                      className="mx-auto d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "220px",
                        height: "220px",
                        background: `conic-gradient(from -90deg, 
                        var(--white) 0deg ${progress}deg, var(--orange) ${progress}deg 360deg)`,
                      }}
                    >
                      {/* Inner circle */}
                      <div
                        className="d-flex flex-column align-items-center justify-content-center rounded-circle"
                        style={{
                          width: "180px",
                          height: "180px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "52px",
                            fontWeight: "700",
                            lineHeight: "1",
                            color: "#111820",
                          }}
                        >
                          {score}%
                        </span>

                        <span
                          style={{
                            marginTop: "25px",
                            fontSize: "18px",
                            fontWeight: "700",
                            color: "var(--orange)",
                          }}
                        >
                          Sample score
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Score Progress */}
                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="small text-secondary">
                        Overall Health
                      </span>

                      <span className="small fw-bold text-white">{score}%</span>
                    </div>

                    <div
                      className="progress"
                      style={{
                        height: "8px",
                        backgroundColor: "#eeeae2",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${score}%`,
                          backgroundColor: "var(--orange)",
                        }}
                        aria-valuenow={score}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>

                  {/* health dimensions */}
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="bg-dark rounded-3 p-3">
                        <div className="small text-secondary mb-1">
                          Financial
                        </div>
                        <div className="fw-bold text-white">82 / 100</div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="bg-dark rounded-3 p-3">
                        <div className="small text-secondary mb-1">
                          Operations
                        </div>
                        <div className="fw-bold text-white">74 / 100</div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="bg-dark rounded-3 p-3">
                        <div className="small text-secondary mb-1">
                          Customers
                        </div>
                        <div className="fw-bold text-white">69 / 100</div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="bg-dark rounded-3 p-3">
                        <div className="small text-secondary mb-1">Growth</div>
                        <div className="fw-bold text-white">63 / 100</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex align-items-start gap-3">
                      <i
                        className="bi bi-lightbulb fs-4"
                        style={{ color: "var(--orange)" }}
                      ></i>

                      <p className="small text-secondary mb-0">
                        Your score highlights where your business is strong and
                        where action could improve its health and value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* stats */}

      <section
        className="py-5 mt-3 mx-auto rounded-4"
        style={{ backgroundColor: " var(--ink)" }}
      >
        <div className="container">
          <div className="row g-0">
            {/* state 1 */}
            <div className="col-6 col-lg-3">
              <div className="text-center p-4 border-end border-secondary">
                <div
                  className="display-5 fw-bold mb-2"
                  style={{ color: "var(--orange)" }}
                >
                  2,400+
                </div>
                <p className="text-white mb-0">Businesses found a buyer</p>
                <small className="text-secondary">
                  instead of closing for good
                </small>
              </div>
            </div>

            {/* state 2 */}
            <div className="col-6 col-lg-3">
              <div className="text-center p-4 border-end border-secondary">
                <div className="display-5 fw-bold mb-2 text-white">₹340Cr+</div>
                <p className="text-white mb-0">Recovered by founders</p>

                <small className="text-secondary">
                  through successful exits
                </small>
              </div>
            </div>

            {/* state 3 */}
            <div className="col-6 col-lg-3">
              <div className="text-center p-4 border-end border-secondary">
                <div className="display-5 fw-bold mb-2 text-white">18 days</div>
                <p className="text-white mb-0">Average time to close</p>

                <small className="text-secondary">
                  from listing to closing
                </small>
              </div>
            </div>

            {/* state 4 */}
            <div className="col-6 col-lg-3">
              <div className="text-center p-4 border-end border-secondary">
                <div className="display-5 fw-bold mb-2 text-white">₹500Cr+</div>
                <p className="text-white mb-0">Bank loans kept serviced</p>

                <small className="text-secondary">not written off</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* trust */}

      <section
        className="py-5 mt-3 mx-auto rounded-4"
        style={{ backgroundColor: " var(--ghost)" }}
      >
        {/* section header */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center text-lg-start">
            <div className="fw-bold small mb-2">TRUST & SECURITY</div>
            <h2 className="display-6 fw-bold mb-3">
              Built around trust at every step.
            </h2>
            <p className="text-white mb-0">
              {" "}
              Buying or selling a business involves sensitive information.
              ReBusi puts verification, privacy and structured processes at the
              centre of every transaction.
            </p>
          </div>
        </div>

        {/* trust cards */}
        <div className="row g-4">
          <div className="col-12 col-md-4 col-lg-6">
            <div className="card-dark border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-4 fs-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    backgroundColor: "var(--orange)",
                  }}
                >
                  <i className="bi bi-patch-check"></i>
                </div>
                <h5 className="fw-bold mb-3">Verified businesses</h5>
                <p className="text-white mb-0">
                  Listings go through verification so buyers can make decisions
                  with greater confidence.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-6">
            <div className="card-dark border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-4 fs-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    backgroundColor: "var(--orange)",
                  }}
                >
                  <i className="bi bi-person-vcard"></i>
                </div>
                <h5 className="fw-bold mb-3">KYC Verified buyers</h5>
                <p className="text-white mb-0">
                  Buyer verification helps protect sellers and keeps serious
                  participants inside the marketplace.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-6">
            <div className="card-dark border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-4 fs-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    backgroundColor: "var(--orange)",
                  }}
                >
                  <i className="bi bi-file-earmark-lock"></i>
                </div>
                <h5 className="fw-bold mb-3">NDA protected data</h5>
                <p className="text-white mb-0">
                  Sensitive business information is shared through a structured
                  and controlled process.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-6">
            <div className="card-dark border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-4 fs-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    backgroundColor: "var(--orange)",
                  }}
                >
                  <i className="bi bi-shield-check"></i>
                </div>
                <h5 className="fw-bold mb-3">Structured Deal Room</h5>
                <p className="text-white mb-0">
                  Due diligence, documents and transaction steps stay organised
                  in one place.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* verification flow */}
        <div className="row align-items-center g-5 mt-4">
          <div className="col-12 col-lg-6">
            <div
              className="rounded-4 p-4 p-lg-5"
              style={{ backgroundColor: "var(--ink)" }}
            >
              <div
                className="small fw-bold mb-2"
                style={{ color: "var(--orange)" }}
              >
                HOW WE PROTECT THE PROCESS
              </div>
              <h3 className="fw-bold text-white mb-4">
                From first contact to closing.
              </h3>

              <div className="d-flex gap-3 mb-4">
                <div
                  className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center fw-bold"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "var(--orange)",
                    color: "var(--ink)",
                  }}
                >
                  1
                </div>
                <div>
                  <h6 className="fw-bold text-white mb-1">
                    Identity verification
                  </h6>
                  <p className="small text-white mb-0">
                    Participants complete the required verification before
                    sensitive transaction information is shared.
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-4">
                <div
                  className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center fw-bold"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "var(--orange)",
                    color: "var(--ink)",
                  }}
                >
                  2
                </div>
                <div>
                  <h6 className="fw-bold text-white mb-1">
                    NDA & controlled access
                  </h6>
                  <p className="small text-white mb-0">
                    Confidential business information is unlocked through a
                    structured access process.
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-4">
                <div
                  className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center fw-bold"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "var(--orange)",
                    color: "var(--ink)",
                  }}
                >
                  3
                </div>
                <div>
                  <h6 className="fw-bold text-white mb-1">Deal Room</h6>
                  <p className="small text-white mb-0">
                    Due diligence and transaction activity remain organized as
                    both sides move towards closing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* trust massage */}

          <div className="col-12 col-lg-6">
            <div className="ps-lg-4">
              <div
                className="display-5 fw-bold mb-4"
                style={{ color: "var (--orange)" }}
              >
                Trust is not a feature.
                <br />
                It's the foundation.
              </div>
              <p className="lead text-dark mb-4">
                Business transactions involve money, documents, identities and
                years of someone's work. The process needs to make all of that
                easier to handle responsibly.
              </p>

              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-check-circle-fill text-dark fs-5"></i>
                  <span className="fw-semibold">Verified participants</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-check-circle-fill text-dark fs-5"></i>

                  <span className="fw-semibold">
                    Controlled information access
                  </span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-check-circle-fill text-dark fs-5"></i>

                  <span className="fw-semibold">
                    Structured transaction workflow
                  </span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-check-circle-fill text-dark fs-5"></i>

                  <span className="fw-semibold">One organized Deal Room</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial */}

      <section
        className="py-5 mt-3 rounded-4 mx-auto"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div className="container">
          {/* section header */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <div
                className="fw-bold small text-uppercase   mb-2"
                style={{ color: "var(--orange)" }}
              >
                Real stories
              </div>
              <h2 className="display-6 fw-bold text-white mb-3">
                Businesses that found a way forward.
              </h2>
              <p className="text-white mb-0">
                Real experiences from founders and buyers who chose a different
                path for their business.
              </p>
            </div>
          </div>

          {/* testimonial */}
          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div className="col-12 col-md-6 col-lg-4" key={testimonial.name}>
                <div className="card-dark border-0 rounded-4 h-100 shadow-sm">
                  <div className="card-body p-4 p-lg-4 d-flex flex-column">
                    <blockquote className="blockquote position-relative mb-2">
                      <span
                        className="fs-1 lh-1"
                        style={{ color: "var(--orange)" }}
                      >
                        “
                      </span>

                      <p className="text-white mb-4">{testimonial.quote}</p>

                      <span
                        className="fs-1 lh-1 d-block text-end"
                        style={{ color: "var(--orange)" }}
                      >
                        ”
                      </span>
                    </blockquote>

                    {/* user */}
                    <div className="d-flex align-items-center gap-3 mt-auto">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center fw-bold flex-shrink-0"
                        style={{
                          width: "48px",
                          height: "48px",
                          backgroundColor: "var(--orange)",
                          color: "var(--ink)",
                        }}
                      >
                        {testimonial.initial}
                      </div>

                      <div className="fw-bold text-white">
                        {testimonial.name}
                      </div>
                    </div>
                    <div className="small text-white text-center mt-2">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* final cta */}

      <section
        className="py-5 mx-auto rounded-4 mt-3 mb-3"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div className="container">
          <div className=" rounded-4 text-center p-5">
            <div className="text-warning fw-bold small">
              YOUR NEXT CHAPTER STARTS HERE
            </div>

            <h2 className="fw-bold mt-2">
              Ready to give your business a second chance?
            </h2>

            <p className=" align-items-center justify-content-center fs-1 fw-bold text-white ">
              Whether you're buying, selling or reviving a business, ReBusi is
              here to help.
            </p>

            <div className="d-flex justify-content-center gap-2 flex-wrap mt-4">
              <Link to="/businesses" className="btn btn-primary px-4">
                Explore Businesses
              </Link>

              <Link to="/list-business" className="btn btn-outline-light px-4">
                List Your Business
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
