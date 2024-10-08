import { EaringType } from './earrings';
import { EyebrowType } from './eyebrows';
import { EyeType } from './eyes';
import { GlassesType } from './glasses';
import { HairType } from './hair';
import { MarkingType } from './markings';
import { MouthType } from './mouth';

// Marker for text to be replace with color in svg content
export const ColorFlag = 'replace_color_value' as const;

export type FeatureType = {
  variants: Record<string, string>;
  defaultVariant: string;
  defaultColor: string;
};
export type FeatureBaseProps<T = string> = {
  color?: string;
  variant?: T;
};
export type FeatureProps<T = string> = FeatureBaseProps<T> & {
  size: number;
};

export type AdventurerProps = {
  size: number;
  earrings?: FeatureBaseProps<EaringType>;
  brows?: FeatureBaseProps<EyebrowType>;
  eyes?: FeatureBaseProps<EyeType>;
  glasses?: FeatureBaseProps<GlassesType>;
  hair?: FeatureBaseProps<HairType>;
  marking?: FeatureBaseProps<MarkingType>;
  mouth?: FeatureBaseProps<MouthType>;
  face?: FeatureBaseProps;
};
