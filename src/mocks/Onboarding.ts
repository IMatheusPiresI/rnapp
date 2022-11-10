import { StepInfo } from '../@types/mocks/StepOnboarding';

import tec1 from '../assets/images/tec1.png';
import tec2 from '../assets/images/tec2.png';
import tec3 from '../assets/images/tec3.png';

export const page: StepInfo[] = [
  {
    title: 'Versatile',
    description:
      'Economical and versatile for business principles as it is easy to handle and update.',
    image: tec1,
  },
  {
    title: 'Native',
    description:
      'Unable to render native code for each platform, this framework uses javascript as a base to create apps.',
    image: tec2,
  },
  {
    title: 'Growing',
    description:
      'Growing! The market for mobile applications is huge and large companies use this technology.',
    image: tec3,
  },
];
