import React, {useState} from 'react';
import * as ReactDOM from 'react-dom/client';


class TaskTest extends React.Component {

  constructor() {
    super();
    this.state = {
      text: '',
      preview: false
    };
    this._handlePreviewClick = this._handlePreviewClick.bind(this);
    this._handleEditClick = this._handleEditClick.bind(this);
  }
  
  _handlePreviewClick(e) {
    e.preventDefault();
    this.setState({ preview: true });
  }
  
  _handleEditClick(e) {
    e.preventDefault();
    this.setState({ preview: false });
  }
  
  _renderPreview() {
    if (this._text) {
      let htmlText = () => ({ __html: this._text.value });
      return (
        <div>
          <div className="preview-box">
            <div dangerouslySetInnerHTML={htmlText()}></div>
          </div>
          <button onClick={this._handleEditClick}>
            Edit
          </button>
        </div>
      );
    }
    return null;
  }
  
  render() {
    
    let edit_style = {};
    if (!this.state.preview)
      edit_style.display = 'block';
    else 
      edit_style.display = 'none';
      
    let previewStyle = {};
    if (this.state.preview)
      previewStyle.display = 'block';
    else previewStyle.display = 'none';

    return (
      <div>
        <form className="editable_task">
            <div className="check_box_and_form">
                <button className="task_check_box"></button>
                <div style={edit_style}>
                    <textarea 
                    ref={f => this._text = f} 
                    defaultValue={this.state.text}
                    className="textarea">
                    </textarea>
                </div>
                <div style={previewStyle}>
                    {this._renderPreview()}
                </div>
            </div>

          <button style={edit_style} onClick={this._handlePreviewClick}>
              Done
        </button>
          
        </form>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TaskTest />);

export default TaskTest