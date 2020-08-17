import {createLocalVue, shallowMount} from '@vue/test-utils'
import MenuBar from "../../../src/components/MenuBar";

describe('MenuBar.vue', () => {
  it('makeOnlyClickedMenuTrue', () => {

    const wrapper = shallowMount(MenuBar);

    const menuList = [
      {text: 'test1', isActive: false, iconData: [], path: '/test1'},
      {text: 'test2', isActive: true, iconData: [], path: '/test2'},
      {text: 'test3', isActive: false, iconData: [], path: '/test3'},
    ];

    wrapper.setData({menuList})

    wrapper.vm.makeOnlyClickedMenuTrue('test1');

    expect(wrapper.vm.menuList).toEqual([
      {text: 'test1', isActive: true, iconData: [], path: '/test1'},
      {text: 'test2', isActive: false, iconData: [], path: '/test2'},
      {text: 'test3', isActive: false, iconData: [], path: '/test3'},
    ]);

    wrapper.vm.makeOnlyClickedMenuTrue('test3');

    expect(wrapper.vm.menuList).toEqual([
      {text: 'test1', isActive: false, iconData: [], path: '/test1'},
      {text: 'test2', isActive: false, iconData: [], path: '/test2'},
      {text: 'test3', isActive: true, iconData: [], path: '/test3'},
    ]);
  });
});