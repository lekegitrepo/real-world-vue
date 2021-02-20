import BaseButton from '../../components/Button'

export default {
  title: 'BaseButton',
  component: BaseButton,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

const Template = (args, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template: '<BaseButton v-bind="$props" kind="" disabled="" />'
})

export const Default = Template.bind({})
Default.args = {
  baseButton: {
    id: '1',
    title: 'Test Task'
  }
}

export const Disabled = Template.bind({})
Disabled.args = {
  button: {
    ...Default.args.baseButton
  }
}

export const Enabled = Template.bind({})
Enabled.args = {
  button: {
    ...Default.args.baseButton
  }
}
