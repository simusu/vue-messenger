import './Hello.css';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  render(h) {
    return (
      <div class="hello">
        <h1>{this.msg}</h1>
        <h2>Essential Links</h2>
        <ul>
          <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
          <li>
            <a href="https://gitter.im/vuejs/vue" target="_blank">
              Gitter Chat
            </a>
          </li>
          <li>
            <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
          </li>
          <br />
          <li>
            <a
              href="http://vuejs-templates.github.io/webpack/"
              target="_blank">
              Docs for This Template
            </a>
          </li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
          <li>
            <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
          </li>
          <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
          <li>
            <a
              href="http://vue-loader.vuejs.org/"
              target="_blank">
              vue-loader
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/awesome-vue"
              target="_blank">
              awesome-vue
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
