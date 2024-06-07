import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Confetti from "react-confetti";

import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.warn("Please fill in all fields before submitting.");
      return;
    }
    setLoading(true);

    emailjs
      .send(
        "service_i430f2m",
        "template_wyryzio",
        {
          from_name: form.name,
          to_name: "Rawaby Rahal",
          from_email: form.email,
          to_email: "rawaby.16.4@gmail.com",
          message: form.message,
        },
        "lvuvOfCXytWVGXven"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Much appreciated! I'll be in touch as soon as possible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast.error("Whoops! Something went wrong. Please RETRY");
        }
      );
    Confetti({});
  };

  return (
    <div
      className={`xl:mt-8 flex xl:flex-row flex-col-reverse gap-5 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>CONTACT</p>
        <h3 className={`${styles.sectionHeadText} sm:whitespace-nowrap`}>
          Get In Touch.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="bg-tertiary px-3 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              style={{
                backgroundColor: "transparent",
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgb(229, 225, 187)' x='0' y='23' width='10' height='1'/></svg>")`,
              }}
            />
          </label>

          <div className="flex justify-end">
            <TextField
              label="Your name"
              type="text"
              name="name"
              variant="standard"
              inputProps={{
                style: { color: "white", fontFamily: "Poppins, sans-serif" },
              }}
              InputLabelProps={{
                style: { color: "white", fontFamily: "Poppins, sans-serif" },
              }}
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your Full Name"
              className=" custom-mui-input-underline w-1/2"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircleIcon style={{ color: "white" }} />
                  </InputAdornment>
                ),
                style: { color: "white" },
              }}
            />
          </div>

          <div className="flex justify-end">
            <TextField
              label="Your email"
              type="email"
              name="email"
              value={form.email}
              variant="standard"
              className="custom-mui-input-underline w-1/2"
              inputProps={{
                style: { color: "white", fontFamily: "Poppins, sans-serif" },
              }}
              InputLabelProps={{
                style: { color: "white", fontFamily: "Poppins, sans-serif" },
              }}
              placeholder="(e.g., name@example.com)"
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <EmailIcon style={{ color: "white" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="flex justify-end mt-9">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-nones w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.8, 1)}
        className="xl:flex-1 xl:h-auto w-[100px]"
      >
        <EarthCanvas />
      </motion.div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
