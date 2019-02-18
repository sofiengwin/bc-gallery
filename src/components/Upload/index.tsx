import * as React from 'react';

const Uppy = require('@uppy/core')
const Tus = require('@uppy/tus')
const { DragDrop } = require('@uppy/react')

const uppy = Uppy({
  meta: { type: 'avatar' },
  restrictions: { maxNumberOfFiles: 1 },
  autoProceed: true
})

uppy.use(Tus, { endpoint: '/upload' })

uppy.on('complete', (result: any) => {
 console.log({result})
})

class Upload extends React.Component {
  render() {
    return (
      <DragDrop
        uppy={uppy}
        locale={{
          strings: {
            // Text to show on the droppable area.
            // `%{browse}` is replaced with a link that opens the system file selection dialog.
            dropHereOr: 'Drop here or %{browse}',
            // Used as the label for the link that opens the system file selection dialog.
            browse: 'browse'
          }
        }}
      />
    );
  }
}


export default Upload;