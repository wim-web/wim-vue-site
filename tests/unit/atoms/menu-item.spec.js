import {shallowMount} from '@vue/test-utils'
import MenuItem from "../../../src/atoms/MenuItem";

const factory = propsData => {
  return shallowMount(MenuItem, {
    stubs: {
      'font-awesome-icon': {template: '<div></div>'},
    },
    propsData: {
      iconData: [],
      text: '',
      handleClick: () => {
      },
      isActive: true,
      ...propsData
    },
  });
}

describe('MenuItem.vue', () => {
  it('全propsを受け取る', () => {

    const props = {
      iconData: ['fas', 'test-icon'],
      text: 'This is text',
      handleClick: () => {},
      isActive: true,
    };

    const wrapper = factory(props);

    expect(wrapper.props()).toEqual(props);
  });

  it('clickでpropsで渡した関数が呼ばれる', () => {

    const wrapper = factory({
      handleClick: jest.fn()
    });

    wrapper.find('.menu-item').trigger('click');

    expect(wrapper.vm.handleClick).toHaveBeenCalledTimes(1);
  });

  it('isActiveでclassが付け変わる', () => {

    const wrapper1 = factory({
      isActive: true
    });

    expect(wrapper1.findAll('.menu-item__icon--active').length).toBe(1);
    expect(wrapper1.findAll('.menu-item__text--active').length).toBe(1);

    const wrapper2 = factory({
      isActive: false
    });

    expect(wrapper2.findAll('.menu-item__icon--active').length).toBe(0);
    expect(wrapper2.findAll('.menu-item__text--active').length).toBe(0);

  });
})
