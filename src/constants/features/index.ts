import { EarringType, Earrings } from './earrings';
import { Eyebrows, EyebrowType } from './eyebrows';
import { Eyes, EyeType } from './eyes';
import { Faces } from './face';
import { Glasses, GlassesType } from './glasses';
import { Hair, HairType } from './hair';
import { Markings, MarkingType } from './markings';
import { Mouths, MouthType } from './mouth';

// TYPES

// Object that holds the svg content of each feature variant
export type FeatureObject = {
  variants: Record<string, string>;
  defaultVariant?: string; // If undefined, then the feature is optional
  defaultColor?: string; // if undefined, then it does not accept color variations
};
export type FeatureBaseProps<T = string> = {
  color?: string;
  variant?: T;
};

export type FeatureType = (typeof FeatureKey)[keyof typeof FeatureKey];

export type FeatureProps<T = string> = FeatureBaseProps<T> & {
  featureKey: FeatureType;
};

export type AdventurerProps = {
  size: number | string;
  earrings?: FeatureBaseProps<EarringType>;
  brows?: FeatureBaseProps<EyebrowType>;
  eyes?: FeatureBaseProps<EyeType>;
  glasses?: FeatureBaseProps<GlassesType>;
  hair?: FeatureBaseProps<HairType>;
  marking?: FeatureBaseProps<MarkingType>;
  mouth?: FeatureBaseProps<MouthType>;
  face?: FeatureBaseProps;
};

// Marker for text to be replaced with color in svg content
export const ColorFlag = 'replace_color_value' as const;
// Keys of expected props for features
export const FeatureKey = {
  face: 'face',
  marking: 'marking',
  mouth: 'mouth',
  eyes: 'eyes',
  brows: 'brows',
  glasses: 'glasses',
  earrings: 'earrings',
  hair: 'hair',
} as const;

// CONSTANTS

// The order matters and will determine which is displayed on top
export const FeatureKeys = [
  FeatureKey.face,
  FeatureKey.marking,
  FeatureKey.mouth,
  FeatureKey.eyes,
  FeatureKey.brows,
  FeatureKey.glasses,
  FeatureKey.earrings,
  FeatureKey.hair,
] as const;

export const FeatureInfo = {
  [FeatureKey.face]: Faces,
  [FeatureKey.marking]: Markings,
  [FeatureKey.mouth]: Mouths,
  [FeatureKey.eyes]: Eyes,
  [FeatureKey.brows]: Eyebrows,
  [FeatureKey.glasses]: Glasses,
  [FeatureKey.earrings]: Earrings,
  [FeatureKey.hair]: Hair,
} as Record<string, FeatureObject>;

export const FeatureOptional = {
  [FeatureKey.face]: false,
  [FeatureKey.marking]: true,
  [FeatureKey.mouth]: false,
  [FeatureKey.eyes]: false,
  [FeatureKey.brows]: false,
  [FeatureKey.glasses]: true,
  [FeatureKey.earrings]: true,
  [FeatureKey.hair]: true,
} as Record<FeatureType, boolean>;
