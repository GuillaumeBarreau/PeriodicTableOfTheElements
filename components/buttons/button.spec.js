import { shallowMount } from '@vue/test-utils'
import cmp from '~/components/buttons/button.vue'

describe('testing component button', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(cmp, {
      slots: {
        default: 'slotsText test'
      },
      data: () => {
        return {
          modalIsOpen: 'false'
        }
      }
    })
  })

  it('snapshot testing', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('Component Validation', () => {
    it('Should render the component button.vue', () => {
      expect(wrapper.is(cmp)).toBe(true)
    })
  })

  describe('Content validation', () => {
    it('should render the correct text', () => {
      expect(wrapper.text()).toContain('slotsText test')
    })
  })

  describe('Methods validation', () => {
    it('Should check if the method showData is called ', () => {
      const showData = jest.fn()
      wrapper.setMethods({ showData })

      const button = wrapper.find('button')
      button.trigger('click')

      expect(wrapper.vm.showData).toHaveBeenCalled()
    })
  })
})
