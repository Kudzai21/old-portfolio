import React from 'react';
import BackButton from '../shared/BackButton';
import Hero from '../Casestudies/Casestudy2/Hero';
import Statistics from '../Casestudies/Casestudy2/Statistics';
import Project from '../Casestudies/Casestudy2/Project';
import Problem from '../Casestudies/Casestudy2/Problem';
import Solution from '../Casestudies/Casestudy2/Solution';
import Outcomes from '../Casestudies/Casestudy2/Outcomes';

const Casestudy2 = () => {
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

export default Casestudy2;
