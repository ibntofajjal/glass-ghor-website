import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "./Buy.css";

const Buy = () => {
  const { glassID } = useParams();
  const [glass, setGlass] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/singleProduct/${glassID}`)
      .then((res) => res.json())
      .then((data) => setGlass(data));
  }, []);
  console.log(glass);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      {/* =========NAVBAR */}
      <Navbar></Navbar>
      {/* NAVBAR========= */}

      <h1
        className="text-center"
        style={{ marginTop: "9rem", marginBottom: "3rem" }}
      >
        Purchase Your Fav Sunglass.
      </h1>

      {/* ----------------------------------------------------------------------------------- */}
      <div className="form-section container">
        <div className="row buy-form-section">
          <div className="col col-lg-6 col-12">
            <img src={glass?.img} className="img-fluid rounded mb-5" alt="" />
          </div>
          <div className="col col-lg-6 col-12 buy-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input disabled value={glass?.name} {...register("name")} />{" "}
              <br />
              <input
                type="email"
                disabled
                value={user?.email}
                {...register("email")}
              />
              <br />
              <input
                type="number"
                placeholder="Credit Card No."
                required
                {...register("creditNumber")}
              />
              <br />
              <input type="date" {...register("date")} /> <br />
              <input disabled value={glass?.cost} {...register("price")} />{" "}
              <br />
              <input
                placeholder="Address"
                required
                {...register("Address")}
              />{" "}
              <br />
              <input
                type="number"
                required
                placeholder="Phone Number"
                {...register("number")}
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------- */}

      {/* =========FOOTER */}
      <Footer></Footer>
      {/* FOOTER========= */}
    </div>
  );
};

export default Buy;
