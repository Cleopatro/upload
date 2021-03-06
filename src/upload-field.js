import React from 'react';

export default class UploadField extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let { hover } = this.state;
    let { children, uploadProps, containerProps, onFiles } = this.props;
    return (
      <div
        style={styles.container}
        {...containerProps}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        {typeof children === 'function' ? children(hover) : children}
        <input
          type="file"
          style={styles.input}
          onChange={e =>
            e.target.files && onFiles ? onFiles(e.target.files) : null}
          {...uploadProps}
        />
      </div>
    );
  }
}

var styles = {
  container: {
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
  },
  input: {
    cursor: 'pointer',
    height: '100%',
    width: '100%',
    opacity: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    zIindex: 99,
  },
};
