import React from 'react';
import BackButton from '../shared/BackButton';
import Hero from '../Casestudies/Casestudy/Hero';
import Statistics from '../Casestudies/Casestudy/Statistics';
import Project from '../Casestudies/Casestudy/Project';
import Problem from '../Casestudies/Casestudy/Problem';
import Solution from '../Casestudies/Casestudy/Solution';
import Outcomes from '../Casestudies/Casestudy/Outcomes';

const Casestudy = () => {
  return (
    <div>
      <BackButton />
      <Hero />
      <Statistics />
      <Project />
      <Problem />
      <Solution />
      <Outcomes />
    </div>
  );
};

export default Casestudy;
