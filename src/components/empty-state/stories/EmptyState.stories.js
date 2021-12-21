import EmptyState from '../EmptyState.vue';

export default {
  title: 'Example/EmtpyState',
  component: EmptyState
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EmptyState },
  template: '<empty-state v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  msg: "Message",
  label: 'EmptyState',
};
