import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "./Buy.css";

const Buy = () => {
  const { user } = useAuth();
  const { glassID } = useParams();
  const [glass, setGlass] = useState({});

  const initialInfo = {
    name: glass.name,
    email: user.email,
    price: glass.cost,
    date: "",
    phone: "",
    address: "",
    creditNumber: "",
  };
  const [buyingInfo, setBuyingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...buyingInfo };
    newInfo[field] = value;
    console.log(newInfo);
    setBuyingInfo(newInfo);

    e.preventDefault();
  };

  const handleBuySubmit = (e) => {
    // Collect Data
    const order = {
      ...buyingInfo,
      name: glass.name,
      email: user.email,
      price: glass.cost,
    };

    // Send to server
    fetch(`https://salty-depths-67861.herokuapp.com/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        alert("Successfully Place Your Order :D");
      });
    e.preventDefault();
  };

  useEffect(() => {
    fetch(`https://salty-depths-67861.herokuapp.com/singleProduct/${glassID}`)
      .then((res) => res.json())
      .then((data) => setGlass(data));
  }, []);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    reset();
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
              <input
                disabled
                value={glass?.name}
                //  {...register("name")}

                name="productName"
              />
              <br />
              <input
                type="email"
                disabled
                value={user?.email}
                // {...register("email")}

                name="email"
              />
              <br />
              <input
                type="number"
                placeholder="Credit Card No."
                required
                name="creditNumber"
                onBlur={handleOnBlur}
                // {...register("creditNumber")}
                {...register("exampleRequired", { required: true })}
              />
              <br />
              <input
                type="date"
                name="date"
                onBlur={handleOnBlur}
                {...register("exampleRequired", { required: true })}
                // {...register("date")}
              />
              <br />
              <input
                disabled
                value={glass?.cost}
                // {...register("price")}
                name="price"
              />
              <br />
              <input
                placeholder="Address"
                required
                onBlur={handleOnBlur}
                // {...register("Address")}
                name="address"
                {...register("exampleRequired", { required: true })}
              />
              <br />
              <input
                type="number"
                required
                placeholder="Phone Number"
                onBlur={handleOnBlur}
                // {...register("number")}
                name="phone"
                {...register("exampleRequired", { required: true })}
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}
              <button onClick={handleBuySubmit}>Submit</button>
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
