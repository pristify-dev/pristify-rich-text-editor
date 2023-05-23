import { Component, Host, h } from '@stencil/core';
import userActionService from '../../service/UserActionService';

@Component({
  tag: 'pristify-editor-header-action',
  styleUrl: 'pristify-editor-header-action.css',
  shadow: true,
})
export class PristifyEditorHeaderAction {

  public  actionsClicked(e: Event){
    userActionService.removeBold();
  }

  render() {
    return (
      <button class="pristify-action" onClick={this.actionsClicked}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"/></svg>
      </button>
    );
  }

}
