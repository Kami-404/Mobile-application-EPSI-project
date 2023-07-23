import Accueil from './components/screens/accueil/Accueil';
import { withPerformanceMonitor } from 'react-native-performance-monitor';

export default withPerformanceMonitor({ WrappedComponent: Accueil, id: 'Accueil' });
