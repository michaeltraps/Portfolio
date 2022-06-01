import React from 'react';
import { Projects } from '../../components';
import { gitgood, goodwatch, nutritionx, squril } from './imports';
import './experience.css';

const Experience = () => {
  return (
    <div className='trapani__experience section-padding' id='experience'>
      <div className='trapani__experience-heading'>
        <h2 className='gradient__text'>Experience</h2>
      </div>
      <div className='trapani__experience-container'>
        <div className='trapani__experience-container_projects'></div>
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
      </div>
    </div>
  );
};

export default Experience;
