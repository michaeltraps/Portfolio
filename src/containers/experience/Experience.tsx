import React, { useEffect, useState } from 'react';
import { Projects } from '../../components';
import { motion, useAnimation } from 'framer-motion';
import { gitgood, goodwatch, nutritionx, squril } from './imports';
import './experience.css';

function useOnScreen(ref: any, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

const Experience = () => {
  const controls = useAnimation();
  const rootRef = React.useRef() as React.MutableRefObject<HTMLImageElement>;
  const onScreen = useOnScreen(rootRef);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      });
    }
  }, [onScreen, controls]);
  return (
    <div className='trapani__experience section__padding' id='experience'>
      <motion.div
        className='trapani__experience-heading'
        ref={rootRef}
        initial={{ opacity: 0, y: 250 }}
        animate={controls}>
        <h2 className='gradient__text'>Experience</h2>
        <p className='gradient__text'>
          I am a frequent contributor to the open source community
        </p>
      </motion.div>
      <div className='trapani__experience-container'>
        <motion.div
          className='trapani__experience-container_groupB'
          ref={rootRef}
          initial={{ opacity: 0, y: 250 }}
          animate={controls}>
          <Projects
            imgUrl={squril}
            title='SQuril'
            description='GraphQL schema generation tool for PostgreSQL databases'
            github='https://github.com/oslabs-beta/SQuriL'
            url='http://www.squril.io/'
          />
          <Projects
            imgUrl={goodwatch}
            title='GoodWatch'
            github='https://github.com/GoodWatch/GoodWatch'
            description='Movie library platform for leaving ratings and reviews, and saving movies'
          />
          <Projects
            imgUrl={gitgood}
            title='GitGood'
            github='https://github.com/GitGoodOrg/GitGood'
            description='Learning tool that stores online resources in customizable categories'
          />
          <Projects
            imgUrl={nutritionx}
            title='Nutritionx'
            github='https://github.com/TeamNY31-VR/NutritionX'
            description='Nutrition tracker that allows users to track their meal nutrition info'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
