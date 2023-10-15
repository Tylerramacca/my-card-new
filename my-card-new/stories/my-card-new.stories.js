import { html } from 'lit';
import '../src/my-card-new.js';

export default {
  title: 'MyCardNew',
  component: 'my-card-new',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <my-card-new
      style="--my-card-new-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </my-card-new>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
