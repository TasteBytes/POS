$('.ui.form')
  .form({
    empty: {
      identifier: 'empty',
      rules: [{
        type: 'empty',
        prompt: 'Please enter a value'
      }]
    },
    dropdown: {
      identifier: 'dropdown',
      rules: [{
        type: 'empty',
        prompt: 'Please select a dropdown value'
      }]
    },
    checkbox: {
      identifier: 'checkbox',
      rules: [{
        type: 'checked',
        prompt: 'Please check the checkbox'
      }]
    }
  });
