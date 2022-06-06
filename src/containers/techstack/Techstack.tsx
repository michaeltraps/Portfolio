import React, { useEffect, useState } from 'react';
import { Skills } from '../../components/skills/Skills';
import { motion, useAnimation } from 'framer-motion';
import { nodejs, react, git, sql, typescript, express, jest, mongodb, redux, webpack } from './imports';
import './techstack.css';

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

function Techstack() {
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
    <div className='trapani__techstack section__padding' id='techstack'>
      <motion.div
        className='trapani__techstack-heading'
        ref={rootRef}
        initial={{ opacity: 0, y: 250 }}
        animate={controls}>
        <h2 className='gradient__text'>Techstack</h2>
        <p className='gradient__text'>
          I have experience across the stack, with a passion for frontend
          technologies
        </p>
      </motion.div>
      <motion.div
        className='trapani__techstack-container_group'
        ref={rootRef}
        initial={{ opacity: 0, y: 250 }}
        animate={controls}>
        <Skills imgUrl={react} title='React' />
        <Skills imgUrl={typescript} title='TypeScript' />
        <Skills imgUrl={nodejs} title='NodeJS' />
        <Skills imgUrl={sql} title='PostgreSQL' />
        <Skills imgUrl={git} title='Git' />
        <Skills imgUrl={express} title='Express' />
        <Skills imgUrl={jest} title='Jest' />
        <Skills imgUrl={mongodb} title='MongoDB' />
        <Skills imgUrl={redux} title='Redux' />
        <Skills imgUrl={webpack} title='Webpack' />
      </motion.div>
    </div>
  );
}

export default Techstack;
