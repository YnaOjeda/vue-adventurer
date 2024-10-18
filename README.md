# vue-adventurer

An avatar vue component based on Lisa Wischofsky's [Adventurer Library](https://www.figma.com/community/file/1184595184137881796)

# Usage

```javascript
  <Adventurer
    :size="500"
    :eyes="{variant: 'eye-1', color: "#A9A9A9"}"
  />
```

## Props
If a feature is optional and its corresponding prop is undefined, then the feature will not be rendered. If a featuer is required and its corresponding prop is undefined, then the feature will be rendered using default values. If a feature has "n/a" for default color, then that means that the feature's color is not customizable.

| Name | Optional | Default Variant| Default Color |
|----------|----------|----------|----------|
| size    | no   | n/a   | n/a   |
| face    | no   | `face-1`   | `#ECAD80`   |
| marking    | yes   | `marking-1`   | n/a   |
| mouth    | no   | `mouth-1`   | n/a   |
| eyes    | no   | `eye-1`   | `#101010`   |
| brows    | no   | `brow-1`   | `#101010`   |
| glasses    | yes   | `glasses-1`   | `#101010`   |
| earrings    | yes   | `earring-1`   | n/a   |
| hair    | yes   | `hair-1`   | `#F4A460`   |
