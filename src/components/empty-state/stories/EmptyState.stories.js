import EmptyState from "../EmptyState.vue";
import Button from "../../button/Button.vue";

export default {
  title: "Example/EmtpyState",
  component: EmptyState,
};

const WithPlaceholderAndTitle = () => ({
  components: { EmptyState, Button },
  template: `
    <empty-state >
      <template v-slot:image-placeholder>
        <img src="logo.png" /> 
      </template>
      <template v-slot:title>
        <h1>Well Done!</h1>
      </template>
    </empty-state>`,
});

const WithPlaceholderAndHint = () => ({
  components: { EmptyState, Button },
  template: `
    <empty-state >
      <template v-slot:image-placeholder>
        <img src="logo.png" /> 
      </template>
      <template v-slot:hint>
        <h2>Looks like you need to adjust some things</h2>
      </template>
    </empty-state>`,
});

const WithPlaceholderAndButton = () => ({
  components: { EmptyState, Button },
  template: `
    <empty-state >
      <template v-slot:image-placeholder>
        <img src="logo.png" /> 
      </template>
      <template v-slot:action>
        <Button label="Show Different Results!"></Button>
      </template>
    </empty-state>`,
});

const WithEverything = () => ({
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

const WithMultipleActions = () => ({
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
      <Button label="Or Not!"></Button>
    </template>
  </empty-state>`,
});

const WithMultipleImages = () => ({
  components: { EmptyState, Button },
  template: `
    <empty-state >
      <template v-slot:image-placeholder>
        <img src="logo.png" /> 
        <img src="logo.png" /> 
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
        <Button label="Or Not!"></Button>
      </template>
    </empty-state>`,
});

export const WithPlaceholderAndTitleStory = WithPlaceholderAndTitle.bind({});
export const WithPlaceholderAndHintStory = WithPlaceholderAndHint.bind({});
export const WithPlaceholderAndButtonStory = WithPlaceholderAndButton.bind({});
export const WithEverythingStory = WithEverything.bind({});
export const WithMultipleActionsStory = WithMultipleActions.bind({});
export const WithMultipleImagesStory = WithMultipleImages.bind({});
