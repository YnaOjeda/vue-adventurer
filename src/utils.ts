import { FeatureType } from './constants/features/features';

export const ColorFlag = 'replace_color_value' as const;

export const isValidColor = (color: string = ''): boolean => {
  const testerElement = document.createElement('div');
  testerElement.style.color = color ?? '';
  return testerElement.style.color !== '';
};

export const getSVGContent = (
  feature: FeatureType,
  variantKey: string = '',
  color: string = ''
): string => {
  const content =
    feature?.variants?.[variantKey] ??
    feature?.variants?.[feature?.defaultVariant];

  if (!content) {
    return '';
  }

  const variantColor = isValidColor(color) ? color : feature.defaultColor;
  return content.replace(ColorFlag, variantColor);
};
