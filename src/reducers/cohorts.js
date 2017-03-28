// import * as actions from '../actions/types';

const initialState = {
  cohortsExample: [
    {
      name: 'Penguin',
      tags1: ['#back-end'],
      tags2: ['#part-time', '#full-time'],
      description: 'No one knows what these guys do, we grouped every weird dev in the sea animals cohorts.',
      link: '',
    },
    {
      name: 'Red Panda',
      tags1: ['#front-end'],
      tags2: ['#part-time', '#full-time'],
      description: 'Love playing with material design colors? Join the land animals cohorts to find devs like you.',
      link: '',
    },
    {
      name: 'Flamingo',
      tags1: ['#machine-learning'],
      tags2: ['#full-time'],
      description: 'Wanna build the androids from Blade Runner? The flying animals cohorts are the place for you.',
      link: '',
    },
  ],
};

/**
 * display cohort defaults information on card
 * @param {object} state where the info will be stored and passed to <Cohort /> component
 * @param {string} action string used to identify the function to use
 * @return {object} updated state
 */
export default function cohorts(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}