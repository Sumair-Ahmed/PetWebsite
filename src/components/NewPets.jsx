import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "./Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import PetCard from "./PetCard";
import { fetchDogs } from "../services/dogServices";

const NewPets = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const getDogs = async () => {
      try {
        const data = await fetchDogs();
        setDogs(data);
      } catch (error) {
        setError("Failed to fetch dogs data.");
      } finally {
        setLoading(false);
      }
    };
    getDogs();
  }, []);

  if (loading) {
    return <p>Loading dogs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <motion.div
      ref={sectionRef}
      className="flex flex-col lg:ml-20 lg:mr-20 lg:mt-14 lg:mb-10 mt-3 ml-7"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView || !loading ? 1 : 0,
        y: isInView || !loading ? 0 : 50,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p>What's new?</p>
          <h1 className="text-primary-dark-blue font-bold text-2xl">
            Take A Look At Some Of Our Pets
          </h1>
        </div>
        <Button style="lg:pl-6 lg:pr-6 font-normal hidden lg:flex">
          View More
          <MdOutlineNavigateNext className="w-6 h-6 text-primary-dark-blue ml-2" />
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 mt-8 w-full">
        {dogs.map((dog) => (
          <motion.div
            key={dog._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView || !loading ? 1 : 0,
              y: isInView || !loading ? 0 : 20,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PetCard pet={dog} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NewPets;
