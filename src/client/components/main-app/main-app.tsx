import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'main-app'
})
export class MainApp {
  @Prop() name: string;

  render() {
    return (
      <div class="root">
        My name is {this.name}
      </div>
    );
  }
}