import { h } from '@stencil/core';

export default { title: 'Button' };

export const primaryBase = () => <yahr-button>Label</yahr-button>;
export const primaryHover = () => <yahr-button class="hover">Label</yahr-button>;
export const primaryActive = () => <yahr-button class="active">Label</yahr-button>;
export const primaryDisabled = () => <yahr-button disabled>Label</yahr-button>;
export const secondaryBase = () => <yahr-button variant="secondary">Label</yahr-button>;
export const secondaryHover = () => (
  <yahr-button variant="secondary" class="hover">
    Label
  </yahr-button>
);
export const secondaryActive = () => (
  <yahr-button variant="secondary" class="active">
    Label
  </yahr-button>
);
export const secondaryDisabled = () => (
  <yahr-button variant="secondary" disabled>
    Label
  </yahr-button>
);
export const tertiaryBase = () => <yahr-button variant="tertiary">Label</yahr-button>;
export const tertiaryHover = () => (
  <yahr-button variant="tertiary" class="hover">
    Label
  </yahr-button>
);
export const tertiaryActive = () => (
  <yahr-button variant="tertiary" class="active">
    Label
  </yahr-button>
);
export const tertiaryDisabled = () => (
  <yahr-button variant="tertiary" disabled>
    Label
  </yahr-button>
);
export const small = () => <yahr-button size="small">Small</yahr-button>;

export const anchor = () => <yahr-button href="#">Test</yahr-button>;

export const custom = () => (
  <yahr-button
    style={{
      '--background': 'black',
      '--color': 'white',
      '--padding-top': '80px',
      '--padding-bottom': '80px',
      '--padding-left': '80px',
      '--padding-right': '80px'
    }}
  >
    Label
  </yahr-button>
);
