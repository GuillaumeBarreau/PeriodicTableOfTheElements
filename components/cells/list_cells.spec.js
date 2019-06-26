import { shallowMount } from '@vue/test-utils'
import cmp from '~/components/cells/list_cells'

describe('Testing component List_cells', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(cmp, {
    })
  })

  it('snapshot testing', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
