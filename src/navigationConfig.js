import { StackNavigator } from 'react-navigation';
import ProjectList from './components/projectList';
import ProjectView from './components/projectView';

const AppNavigator = StackNavigator({
    Home: { screen: ProjectList },
    Project: { screen: ProjectView },
});

export default AppNavigator;
