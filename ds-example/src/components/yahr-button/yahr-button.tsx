import { Component, Prop, ComponentInterface, h, Host, Element } from '@stencil/core';
import { hasShadowDom } from '../../utils/utils';

export type Size = 'large' | 'medium' | 'small';

@Component({
  tag: 'yahr-button',
  styleUrl: 'yahr-button.css',
  shadow: true
})
export class YahrButton implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * The variants of the button to display.
   */
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * The button size.
   */
  @Prop() size: Size = 'large';

  /**
   * The type of button
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop() href?: string;

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop() disabled: boolean;

  private handleClick = (ev: Event) => {
    if (this.type !== 'button' && hasShadowDom(this.el)) {
      // this button wants to specifically submit a form
      // climb up the dom to see if we're in a <form>
      // and if so, then use JS to submit it
      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();

        const fakeButton = document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  };

  // Get the URL for this route link without the root from the router
  render() {
    let Tagname = this.href != null ? 'a' : 'button';
    let attributes = {
      class: {
        btn: true,
        primary: this.variant === 'primary',
        secondary: this.variant === 'secondary',
        tertiary: this.variant === 'tertiary',
        large: this.size === 'large',
        small: this.size === 'small',
        disabled: this.disabled
      },
      href: this.href || null,
      disabled: this.disabled
    } as any;

    return (
      <Host onClick={this.handleClick} aria-disabled={this.disabled ? 'true' : null}>
        <Tagname {...attributes}>
          <slot />
        </Tagname>
      </Host>
    );
  }
}
