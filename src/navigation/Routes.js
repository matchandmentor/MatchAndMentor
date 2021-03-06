import NameScreen from '../components/stateful/NameScreen';
import RoleScreen from '../components/stateful/RoleScreen';
import SkillScreen from '../components/stateful/SkillScreen';
import SummaryScreen from '../components/stateful/SummaryScreen';
import MenteeSummaryScreen from '../components/stateful/MenteeSummaryScreen';
import PhotoScreen from '../components/stateful/PhotoScreen';
import BirthdayScreen from '../components/stateful/BirthdayScreen';

const Routes = {
  NameScreen: { screen: NameScreen },
  RoleScreen: { screen: RoleScreen },
  BirthdayScreen: { screen: BirthdayScreen },
  SkillScreen: { screen: SkillScreen },
  SummaryScreen: { screen: SummaryScreen },
  MenteeSummaryScreen: { screen: MenteeSummaryScreen },
  PhotoScreen: { screen: PhotoScreen },
};

export default Routes;
