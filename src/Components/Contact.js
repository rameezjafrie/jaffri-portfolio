import React, { useState } from "react";

// import { useHistory} from "react-router-dom";
import Header from "./Header";

const Contact = () => {
  // const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    
    const { name, email, project, message } = formData;
    setFormData({ name: "", email: "", project: "", message: "" });
    
    const res = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, project, message }),
    });

    // const data = await res.json();
    
    if (res.status === 421) {
      window.alert("Please fill the fileld properly ");
    } else if (res.status === 422) {
      window.alert("Already Exist");
    }
     else {
      window.alert("Registration Successfull");
    }
  
    // invalid
    // Here you can send the data to the server using an API call or do something else with it
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Header />
      <section class="contact" id="contact">
        <h1 class="heading">
          {" "}
          <span>contact</span> me{" "}
        </h1>

        <div class="row">
          <div class="content">
            <h3 class="title">contact info</h3>

            <div class="info">
              <h3> </h3>
              <i class="fas fa-envelope"></i> rameezjafrie110m@gmail.com{" "}
              <h3>
                {" "}
                <i class="fas fa-phone"></i> +92-345-314-7701{" "}
              </h3>
              <h3>
                {" "}
                <i class="fas fa-map-marker-alt"></i> Karachi Sindh{" "}
              </h3>
            </div>
          </div>

          {/* Form Section */}

          <form methond="POST" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="name"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
              class="box"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              class="box"
            />
            <input
              type="text"
              name="project"
              placeholder="project"
              value={formData.project}
              onChange={handleChange}
              class="box"
            />
            <textarea
              type="text"
              name="message"
              id=""
              cols="30"
              rows="10"
              class="box message"
              placeholder="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" class="btn">
              {" "}
              send <i class="fas fa-paper-plane"></i>{" "}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
