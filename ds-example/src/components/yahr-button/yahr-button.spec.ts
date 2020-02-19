import { newSpecPage } from '@stencil/core/testing';
import { YahrButton } from './yahr-button';
import * as YahrButtonExamples from './yahr-button.stories';

describe('example', () => {
  it('should render a foo-component', async () => {
    const page = await newSpecPage({
      components: [YahrButton],
      template: YahrButtonExamples.primaryActive,
    });
    expect(page.root).toEqualHtml(`
      <my-cmp>Success!</my-cmp>
    `);
  });
});
