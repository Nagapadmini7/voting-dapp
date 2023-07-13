import React, { useContext } from 'react';
import Image from 'next/image';
import Countdown from 'react-countdown';

import { VotingContext } from '../context/Voter';
import Style from '../styles/index.module.css';
import Card from '../components/card/card';

const Index = () => {
  const { votingTitle } = useContext(VotingContext);
  
  return (
    <div>
      {votingTitle}
    </div>
  );
};

export default Index;
