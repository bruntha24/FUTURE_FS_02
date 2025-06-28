import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => (
  <motion.div
    className="p-6"
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.95, opacity: 0 }}
  >
    <h2 className="text-3xl font-semibold text-pink-500 mb-4">Contact</h2>
    <p>Email us at: <strong>brunthajewels@example.com</strong></p>
  </motion.div>
);

export default ContactPage;
