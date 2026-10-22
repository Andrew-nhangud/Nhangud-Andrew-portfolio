import { motion } from "framer-motion";
import "./Services.css";
import { Card } from "../Card/Card";

export const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="service">
      <motion.h1
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        SERVICES
      </motion.h1>
      <motion.p
        className="services-intro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Let's engineer high performance digital storefronts and custom web
        applications tailored to your business goals
      </motion.p>
      <motion.div
        className="container-cards"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Standard card markup  */}
        <Card
          name="Standard"
          price="2.500"
          description="Everything someone needs to understand your business and contact you, on a single page that looks right on a phone."
          includeList={[
            "A onepage website built around your brand.",
            "A short intro to who you are and what you do.",
            "Your services laid out clearly with pricing.",
            "Up to 5 services.",
            "Up to 8 of your images.",
            "An enquiry section so customers can reach you.",
            "Links to your Instagram and socials.",
            "Your location and business hours.",
            "Your domain set up and connected.",
            "One round of changes before we go live.",
          ]}
          contentDescription="You send me the text, images, logo, contact details, pricing and anything else your customers need to know. I handle the rest."
          contentDescription2="This package covers up to 8 images and 5 services. If you have more than that tell me up front and I'll quote you before we start."
          paymentDescription="50% to get started, 50% before your website goes live."
          monthlyFee="400"
          monthlyList={[
            "Hosting handled for you.",
            "Security and performance updates.",
            "Ongoing upkeep so nothing breaks.",
          ]}
          contentDescriptionUpdate="One round of changes each month"
          contentDescriptionUpdate2="Change a price, add a service, swap an image send it through and I do it."
        />

        {/* Premium card markup */}
        <Card
          name="Premium"
          price="3.500"
          description="Several pages a gallery of your work and a booking or enquiry system built around how your business actually takes work."
          includeList={[
            "Up to 5 pages.",
            "Dedicated services and pricing pages.",
            "Up to 10 services.",
            "Up to 20 of your images.",
            "A gallery for your photos or past work.",
            "A dedicated contact page.",
            "Links to your Instagram and socials.",
            "Your location and business hours.",
            "Your domain set up and connected.",
            "Two rounds of changes before we go live.",
          ]}
          contentDescription="You send me the text, images, logo, contact details, pricing and anything else your customers need to know. I handle the rest."
          contentDescription2="This package covers up to 20 images and 10 services. If you need more pages more content or a more advanced booking system tell me up front and I'll quote you before we start."
          paymentDescription="30% to get started, 70% before your website goes live."
          monthlyFee="700"
          monthlyList={[
            "Hosting handled for you.",
            "Ongoing upkeep so nothing breaks.",
            "Ongoing upkeep so nothing breaks.",
          ]}
          contentDescriptionUpdate="One round of changes each month"
          contentDescriptionUpdate2="Change a price, add a service, swap an image send it through and I do it."
        />
      </motion.div>

      {/* <h2 className="services-intro">
        True luxury in digital design is found in the absence of friction{" "}
      </h2> */}
    </section>
  );
};
