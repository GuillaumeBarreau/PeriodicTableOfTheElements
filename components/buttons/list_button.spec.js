import { shallowMount } from '@vue/test-utils'
import cmp from '~/components/buttons/list_buttons.vue'

jest.mock('~/static/icons-menu.svg', () => 'ImageMoched')
describe('testing component List_buttons', () => {
  const wrapper = shallowMount(cmp, {
    propsData: {
      tableElements: [
        { groupBlock: 'name test_A' },
        { groupBlock: 'name test_B' }
      ]
    }
  })

  it('snapshot testing', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('Component Validation', () => {
    it('Should return the component list_button.vue', () => {
      expect(wrapper.is(cmp)).toBe(true)
    })
  })

  describe('Content validation', () => {
    it('should render the correct text', () => {
      expect(wrapper.text()).toContain('name test_A')
    })

    it('should render the correct text', () => {
      expect(wrapper.text()).toContain('name test_B')
    })
  })
})
