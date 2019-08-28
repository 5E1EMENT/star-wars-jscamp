import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import TheMenu from "@/components/TheMenu.vue";
import Films from "@/app/films/components/Films.vue";
import { wrap } from "module";

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

  it("Переходим по роуту /films", () => {
    const routes = [
      {
        path: "/films",
        component: Films
      }
    ];
    const wrapper = shallowMount(TheMenu, { store, localVue });
    wrapper.find("ion-item").trigger("click");
    expect(wrapper.vm.$route).toBe(routes.path);
    console.log(wrapper.vm.$route);
  });

});
