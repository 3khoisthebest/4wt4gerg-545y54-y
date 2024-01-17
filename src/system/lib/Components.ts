import LibraryLib from '../../structures/LibraryLib'
import { Library } from '../../types'

let library: LibraryLib

const Components: Library = {
  config: {
    name: 'Components',
    type: 'library',
    targetVer: '0.0.1'
  },
  init: (l, k, p) => { library = l },
  data: {
    Input: {
      new: () => {
        const { HTML } = library
        const input = new HTML('input')
        input.style({
          'border-radius': '5px',
          padding: '2.5px',
          outline: 'none',
          background: 'transparent',
          border: '1px solid var(--surface-0)'
        })
        return input
      }
    },
    Button: {
      new: () => {
        const { HTML } = library
        const button = new HTML('button')
        button.style({
          'border-radius': '5px',
          padding: '2.5px',
          background: 'transparent',
          border: '1px solid var(--surface-0)'
        })
        return button
      }
    }
  }
}

export default Components
