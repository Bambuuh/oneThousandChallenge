import { StackNavigator } from 'react-navigation';
import ProjectList from './components/projectList';
import ProjectView from './components/projectView';
import CreateProject from './components/createProject'

const AppNavigator = StackNavigator({
    Home: { screen: ProjectList },
    Project: { screen: ProjectView },
    CreateProject: { screen: CreateProject },
});

export default AppNavigator;
