import { shallowMount } from '@vue/test-utils'
import cmp from '~/components/cells/cell.vue'

describe('testing component cell', () => {
  const wrapper = shallowMount(cmp, {
    propsData: {
      objectElement: {
        atomicNumber: 'atomicNumber-test',
        symbol: 'symbol-test',
        name: 'name-test',
        atomicMass: 'atomicMass-test'
      }
    }
  })

  it('snapshot testing', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('Component Validation', () => {
    it('Should return the component cell.vue', () => {
      expect(wrapper.is(cmp)).toBe(true)
    })
  })
})
