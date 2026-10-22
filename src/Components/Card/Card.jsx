import { motion } from "framer-motion";
import "./Card.css";

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const Card = ({
  name,
  price,
  description,
  includeList = [],
  contentDescription,
  contentDescription2,
  paymentDescription,
  monthlyFee,
  monthlyList = [],
  contentDescriptionUpdate,
  contentDescriptionUpdate2,
}) => {
  return (
    <motion.div
      className={`card-contianer ${name === "Premium" ? "premium-card" : ""}`}
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="card">
        <h1 className="card-type-name"> {name}</h1>
        <h3 className="card-price">R{price} build fee</h3>
        <p className="card-para">{description}</p>

        <h1 className="card-header">INCLUDES</h1>
        <ul className="card-list">
          {includeList.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>

        <h1 className="card-header spacer">CONTENT</h1>
        <p className="card-para">{contentDescription}</p>
        <p className="card-para">{contentDescription2}</p>

        <h1 className="card-header spacer">PAYMENT</h1>
        <p className="card-payment">{paymentDescription}</p>

        <hr className="horizontal-line" />
        <h1 className="card-monthly-section">
          R{monthlyFee}/<span>month</span>
        </h1>
        <p className="card-para montly-para">
          Keeps your website online, secure and up to date after launch.
        </p>
        <ul className="card-list">
          {monthlyList.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>

        <h1 className="card-header spacer">CONTENT UPDATES</h1>
        <p className="card-content-para">{contentDescriptionUpdate}</p>
        <p className="card-content-para">{contentDescriptionUpdate2}</p>

        <p className="card-last-para">
          the monthly plan is what keeps your website live and looked after
        </p>
      </div>
    </motion.div>
  );
};
