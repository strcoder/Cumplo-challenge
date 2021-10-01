import axios from 'axios';

const API = `${process.env.API_URL}/api/v1`;

export const setError = (error: object) => ({
  type: 'SET_ERROR',
  error,
});

export const setCandidates = (candidates: []) => ({
  type: 'SET_CANDIDATES',
  candidates,
});

export const setCountdown = (countdown: number) => ({
  type: 'SET_COUNTDOWN',
  countdown,
});

export const getCandidates = async ({ dispatch }) => {
  try {
    const candidates = await axios({
      url: `${API}/candidates`,
      method: 'GET',
    }).then(({ data }) => {
      return data;
    });
    dispatch(setCandidates(candidates));
    return candidates;
  } catch (error) {
    dispatch(setError(error));
    return null;
  }
};

export const getCountdown = async ({ dispatch }) => {
  try {
    const countdown = await axios({
      url: `${API}/countdown`,
      method: 'GET',
    }).then(({ data }) => {
      return data.secondsLeft;
    });
    dispatch(setCountdown(countdown));
    return countdown;
  } catch (error) {
    dispatch(setError(error));
    return 0;
  }
};

