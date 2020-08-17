import {createLocalVue, shallowMount} from '@vue/test-utils'
import MenuBar from "../../../src/components/MenuBar";

describe('MenuBar.vue', () => {
  it('$router.pushが呼ばれる', () => {

    const $router = {
      push: jest.fn()
    };

    const $route = {
      path: ''
    }

    const wrapper = shallowMount(MenuBar, {
      mocks: {
        $router,
        $route
      }
    });

    wrapper.vm.handleClickMenu();

    expect($router.push).toHaveBeenCalledTimes(1);
  });
});