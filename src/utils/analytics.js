const COUNTER_ID = 110089865;

export const sendYmGoal = (goal) => {
  if (typeof window !== 'undefined' && typeof window.ym === 'function') {
    window.ym(COUNTER_ID, 'reachGoal', goal);
  }
};