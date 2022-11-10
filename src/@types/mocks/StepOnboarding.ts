import { ImageSourcePropType } from 'react-native';

interface StepInfo {
  title: string;
  description: string;
  image: ImageSourcePropType | undefined;
}

export type { StepInfo };
