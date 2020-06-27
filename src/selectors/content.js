import { createSelector } from 'reselect';

const content = state => state.entities.content;

export const contentSelector = createSelector([content], entities => entities);
export const userNameSelector = createSelector([contentSelector], entity => entity.user_name);
export const bannerSelector = createSelector([contentSelector], entity => entity.banner);
export const challengesSelector = createSelector([contentSelector], entity => entity.challenges);
export const sportsSelector = createSelector([contentSelector], entity => entity.sports);

export default contentSelector;
