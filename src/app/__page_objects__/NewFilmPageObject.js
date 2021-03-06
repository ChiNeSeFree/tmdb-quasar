import PageObject from './PageObject'
import TextInput from '../shared-components/TextInput.vue'
import DateTimeInput from '../shared-components/DateTimeInput.vue'
import FormButton from '../shared-components/FormButton.vue'

export default class NewFilmPageObject extends PageObject {
  constructor(wrapper) {
    super(wrapper)
    this.wrapper = wrapper
  }

  writeName(name) {
    let input = this.wrapper.find(TextInput)
    input.vm.change(name)
  }

  dirtyValidation() {
    this.wrapper.vm.$v.$touch()
  }

  writeDatetime(datetime) {
    const datetimeInput = this.wrapper.find(DateTimeInput)
    datetimeInput.vm.change(datetime)
  }

  hasDatetimeError() {
    return this.wrapper.find(DateTimeInput).hasClass('text-red')
  }

  hasNameError() {
    return this.wrapper.find(TextInput).hasClass('text-red')
  }

  isSaveButtonDisabled() {
    return this.wrapper.find(FormButton).hasProp('disabled', true)
  }

  clickSaveButton() {
    this.wrapper.find(FormButton).trigger('click')
  }

  fillForm(name, date) {
    this.writeNameAsync(name)
    this.writeDatetime(date)
    this.resolveAll()
  }

  fillFormWith(name, datetime) {
    this.writeName(name)
    this.writeDatetime(datetime)
    return this.resolveAll()
  }
}
