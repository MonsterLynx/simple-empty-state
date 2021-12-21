import EmptyState from '../EmptyState.vue';
import Button from '../../button/Button.vue';

export default {
  title: 'Example/EmtpyState',
  component: EmptyState
};

import image from '../../../assets/logo.png';

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EmptyState, Button },
  template: '<empty-state v-bind="$props" />',
});

const WithPlaceholder = (args, { argTypes }) => ({
  props: {
    src: {
      default: () => image,
    },
  },
  components: { EmptyState, Button },
  template: `
    <empty-state >
      <template v-slot:image-placeholder>
        <img src="logo.png" /> 
      </template>
      <template v-slot:title>
        <h1>Well Done!</h1>
      </template>
      <template v-slot:hint>
        <h2>You're all caught up</h2>
      </template>
      <template v-slot:action>
        <Button label="Show Me!"></Button>
      </template>
    </empty-state>`,
});

export const WithPlaceholderStory = WithPlaceholder.bind({});
WithPlaceholderStory.args = {
  src: {
    default: image
  },
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
// Primary.args = {
//   label: 'EmptyState',
// };
