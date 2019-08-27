import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import TheMenu from "@/components/TheMenu.vue";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

shallowMount(TheMenu, {
  localVue,
  VueRouter
});

describe("TheMenu", () => {
  test("является экземпляром Vue", () => {
    const wrapper = mount(TheMenu);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test("есть заголовок Menu", () => {
    const wrapper = mount(TheMenu);
    expect(wrapper.text()).toContain("Menu");
  });

  let actions;
  let store;

  beforeEach(() => {
    actions = {
      getUid: jest.fn(),
      getUserEmail: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
  });

  it('вызывает действие хранилища "getUid" по нажатию кнопки', () => {
    const wrapper = shallowMount(TheMenu, { store, localVue });
    wrapper.find("ion-item").trigger("click");
    expect(actions.getUid).toHaveBeenCalled();
  });
//   it('вызывает действие хранилища "getUserEmail" по переходу на роут', () => {
//     const $route = {
//       path: "/films"
//     };

//     const wrapper = shallowMount(TheMenu, {
//       mocks: {
//         $route
//       }
//     });

//     wrapper.vm.$route.path;
//     expect($route).toHaveBeenCalled();
//   });
});
