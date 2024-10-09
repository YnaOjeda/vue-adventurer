import { FeatureType, ColorFlag, FeatureInfo } from './constants/features';

export const isValidColor = (color: string = ''): boolean => {
  const testerElement = document.createElement('div');
  testerElement.style.color = color ?? '';
  return testerElement.style.color !== '';
};

export const getSVGContent = (
  featureKey: FeatureType,
  variantKey: string = '',
  color: string = ''
): string => {
  const feature = FeatureInfo[featureKey];
  if (!feature) {
    return '';
  }

  const content =
    feature?.variants?.[variantKey] ??
    feature?.variants?.[feature?.defaultVariant];

  if (!content) {
    return '';
  }

  if (!feature.defaultColor) {
    // the feature does not accept a color prop, no need to process further
    return content;
  }

  const variantColor = isValidColor(color) ? color : feature.defaultColor;
  return content.replace(ColorFlag, variantColor);
};
