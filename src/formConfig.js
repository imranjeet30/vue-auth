// formConfig.js
export const formFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      validation: 'required|min:3'
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      validation: 'required|email'
    },
    {
      name: 'employeeType',
      label: 'Employee Type',
      type: 'select',
      options: ['Full-time', 'Part-time', 'Contractor'],
      validation: 'required'
    },
    {
      name: 'contractLength',
      label: 'Contract Length (months)',
      type: 'number',
      showIf: { employeeType: 'Contractor' },
      validation: 'required|numeric|min:1'
    }
  ]
  