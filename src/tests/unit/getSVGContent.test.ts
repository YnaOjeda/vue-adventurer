import { describe, it, expect } from 'vitest';
import { getSVGContent, isValidColor } from '../../utils';
import {
  ColorFlag,
  FeatureInfo,
  FeatureKeys, FeatureOptional,
  FeatureType,
} from '../../constants/features';

// as FeatureType used to avoid linting errors
describe('getSVGContent', () => {
  it('should return an empty string for an invalid featureKey', () => {
    expect(getSVGContent('invalidFeature' as FeatureType)).toBe('');
  });

  it('should return the default variant content if variantKey is invalid', () => {
    // If a feature is not optional, ti should always have a default value
    FeatureKeys.forEach((key) => {
      if (!FeatureOptional[key]) {
        expect(getSVGContent(key as FeatureType, 'invalidVariantKey')).not.toBe(
            ''
        );
      }
    });
  });

  it('should always be able to replace ColroFlag with a valid value', () => {
    let featureKeyWithFlag = '' as FeatureType;
    Object.entries(FeatureInfo).forEach(([key, feature]) => {
      if (!featureKeyWithFlag && feature.defaultColor) {
        // this key will be used to check the replace-logic later
        featureKeyWithFlag = key as FeatureType;
      }
      // Ensure that all default values are valid colors
      if (feature.defaultColor) {
        expect(isValidColor(feature.defaultColor)).toBe(true);
      }

      // Ensure that all features with the color flag have default colors
      const hasColorFlag = Object.values(feature.variants).some((variant) =>
        variant.includes(ColorFlag)
      );
      if (hasColorFlag) {
        expect(feature.defaultColor).toBeTruthy();
      }
    });

    // Finally, the color flag should be removed from the return value
    expect(getSVGContent(featureKeyWithFlag)).not.toContain(ColorFlag);
  });
});
