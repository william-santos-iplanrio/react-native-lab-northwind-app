import ModuleNavigation from './config/routes';
import { config as featureConfig } from './feature/config';
import { 
  screens as featureScreens, 
  containers as featureContainers, 
  duck as featureDuck, 
  middlewares as featureMiddlewares
} from './feature';

export { 
  featureConfig, 
  featureScreens, 
  featureContainers, 
  featureDuck, 
  featureMiddlewares 
};

export default ModuleNavigation;
