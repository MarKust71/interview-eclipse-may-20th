import React from 'react';

import { RankProps } from './Rank.types';

import './Rank.css';
import StarIcon from 'assets/star.svg';
import { Box } from 'ui/box/Box';
import { Typography } from 'ui/typography/Typography';

export const Rank: React.FC<RankProps> = ({ stars, reviews = 0 }) => {
  const starsArray = new Array(stars);
  starsArray.fill(<img src={StarIcon} alt="star-icon" />);
  return (
    <div className="container-rank">
      {starsArray.map((_, index) => (
        <>
          <img src={StarIcon} alt="star-icon" key={`star-${index}`} />
          {index < starsArray.length - 1 && <Box mr={0.25} />}
        </>
      ))}
      <Box mr={1.25} />
      {reviews && <Typography variant="reviews">{`${reviews} Reviews`}</Typography>}
    </div>
  );
};
