import React from 'react';
import Candidate from './Candidates';

export interface ContextInterface {
  dispatch: React.Dispatch<any>;
  candidates?: Candidate[],
  countdown?: number,
}
