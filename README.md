# vue-adventurer

An avatar vue component based on Lisa Wischofsky's [Adventurer Library](https://www.figma.com/community/file/1184595184137881796)

# Usage

```vue
  <Adventurer
    :size="500"
    :eyes="{variant: 'eye-1', color: '#A9A9A9'}"
    ...
  />
```

## Props

Aside from the `size` prop, the parts of the avatar is called Features.
Each Feature has its own prop listed in the table below and expects `{variant: string, color: string}`.

| Feature Key | Optional | Default Variant | Default Color |
|-------------|----------|-----------------|----------|
| size        | no   | n/a             | n/a   |
| face        | no   | `face-1`        | `#ECAD80`   |
| marking     | yes   | `undefined`      | `undefined`   |
| mouth       | no   | `mouth-1`       | `undefined`   |
| eyes        | no   | `eye-1`         | `#101010`   |
| brows       | no   | `brow-1`        | `#101010`   |
| glasses     | yes   | `undefined`     | `#101010`   |
| earrings    | yes   | `undefined`     | `undefined`   |
| hair        | yes   | `hair-1`        | `#F4A460`   |

A `variant` value is formatted as `${FeatureKey}-${number}`, where the number is 1 to maximum available variant count.

The visibility of each feature can be customised as such:
- If the feature's props receive a valid `variant` value, the feature will be displayed.
- If the feature is optional and its props receive an `undefined` variant value, the feature is hidden.
- If a feature is not optional and its props receive an `undefined`, the feature will use the default value.
- Except for `hair`, all optional features default to `undefined`.