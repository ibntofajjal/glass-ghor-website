import React, { useEffect, useState } from "react";
// import latestBanner from "../../../../img/Banner-Background/latest-glasses.png";
import "./Services.css";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`/shortServices.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className=" latestBanner">
        {/* <img src={latestBanner} alt="" /> */}
      </div>
      <div className="service-section container mb-5">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
