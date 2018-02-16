export default {
  namespaced: true,
  state: {
    projects: [
      {
        id: '1',
        name: 'My Project Red & Blue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        color: ['red', 'blue'],
        size: ['small']
      },
      {
        id: '2',
        name: 'Another Project Red & Green',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        color: ['red', 'green'],
        size: ['medium']
      },
      {
        id: '3',
        name: 'Something Else Blue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        color: ['blue'],
        size: ['large']
      },
      {
        id: '4',
        name: 'My Project Green',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        color: ['green'],
        size: ['small']
      },
      {
        id: '5',
        name: 'Another Project Blue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        color: ['blue'],
        size: ['medium']
      },
      {
        id: '6',
        name: 'Something Else Red',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        color: ['red'],
        size: ['large']
      }
    ]
  },
  getters: {
    projects: (state) => state.projects,
    project: (state) => (id) => {
      return state.projects.find(project => project.id === id)
    }
  }
}
