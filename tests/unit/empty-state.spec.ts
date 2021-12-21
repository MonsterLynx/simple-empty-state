import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/empty-state/EmptyState.vue";

describe("EmptyState", () => {
  const title = "Hello";
  it("renders the title slot", () => {
    const wrapper = shallowMount(HelloWorld, {
      scopedSlots: {
        title: `<div>${title}</div>`,
      },
    });
    expect(wrapper.text()).toMatch(title);
  });
  it("renders the image slot", () => {
    const wrapper = shallowMount(HelloWorld, {
      scopedSlots: {
        title: `<img />`,
      },
    });
    expect(wrapper.find("img").exists).toBeTruthy();
  });
  it("renders the hint slot", () => {
    const wrapper = shallowMount(HelloWorld, {
      scopedSlots: {
        hint: `<div>${title}</div>`,
      },
    });
    expect(wrapper.text()).toMatch(title);
  });

  it("renders the actions slot", () => {
    const wrapper = shallowMount(HelloWorld, {
      scopedSlots: {
        action: `<button>${title}</button>`,
      },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
