import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from "@/shared/HText";
import { ClassType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and muscle with our comprehensive weight training classes. Our expert trainers will guide you through proper techniques and personalized routines to help you achieve your fitness goals.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find balance and inner peace with our rejuvenating yoga classes. Suitable for all levels, these sessions focus on flexibility, mindfulness, and stress reduction.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core and sculpt your abs with our targeted ab core classes. These high-intensity workouts will help you develop a strong, stable midsection and improve overall body strength.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Challenge yourself with our exciting adventure classes. From outdoor obstacle courses to indoor rock climbing, these classes will push your limits and boost your confidence.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Join our diverse fitness classes for a full-body workout. These sessions combine cardio, strength training, and flexibility exercises to improve overall fitness and endurance.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Get personalized attention in our small group training classes. Our certified trainers will help you set and achieve your fitness goals through tailored workout plans and nutritional guidance.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Discover a wide range of fitness classes designed to cater to all levels and interests. Our expert instructors are committed to helping you achieve your fitness goals in a supportive and motivating environment. Whether you're looking to build strength, improve flexibility, or boost your overall wellness, we have the perfect class for you.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
