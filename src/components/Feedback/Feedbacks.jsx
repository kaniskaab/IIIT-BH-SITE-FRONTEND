import { motion } from 'framer-motion';
import React, { useContext } from 'react';

import { SectionWrapper } from '../../hoc';
import { fadeIn, textVariant } from '../../utils/motion';
// import { testimonials } from '../Constants/index';
import { styles } from './styles';
import { Context } from '../../context/ContextProvider';
const FeedbackCard = ({
 index,
 batch,branch,image,name,testimonials
}) => (
  <motion.div
    variants={fadeIn('', 'spring', 0.5 + index * 0.5, 0.75)}
    className="bg-gray-100 p-10 rounded-3xl w-[320px] "
  >
    <p className="text-gray-900 font-gray text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-gray-900 tracking-wider text-[18px]">{testimonials}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-gray-900 font-medium text-[16px]">
            <span className="text-blue-600">@</span> {name}
          </p>
          <p className="mt-1 text-gray-500 text-[12px]">
            {branch} , {batch}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const {testimonials} = useContext(Context)
  console.log(testimonials)

  return (
    <div className={` bg-gray-300 rounded-[20px]`}>
      <div
        className={`bg-gray-400 rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant(0.5)}>
          <p className={styles.sectionSubText}>What our students have to say</p>
          <h2 className={styles.sectionHeadText}>Student Stories</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 `}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
