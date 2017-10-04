import { combineReducers } from 'redux';

import projects from './projects';
import navigation from './navigation';

export default combineReducers({
    projects: projects,
    nav: navigation,
});
