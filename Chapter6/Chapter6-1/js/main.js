// Vue.directive('highlight', {
//   bind: function (el, binding, vnode, oldVnode) {
//     el.style.backgroundColor = binding.value;
//   },
//   update: function (el, binding, vnode, oldVnode) {
//     el.style.backgroundColor = binding.value;
//   },
// });

// Vue.directive('highlight', function (el, binding, vnode, oldVnode) {
//   if (binding.value === binding.oldValue) {
//     return;
//   }
//   console.log(binding.value);
//   el.style.backgroundColor = binding.value;
// });

// let hook = function (el, binding) {
//   if (binding.value === binding.oldValue) {
//     return;
//   }
//   if (binding.modifiers.border) {
//     el.style.borderColor = binding.value;
//     el.style.borderStyle = 'solid';
//   } else {
//     el.style.backgroundColor = binding.value;
//   }
// };

// Vue.directive('highlight', {
//   bind: hook,
//   update: function (el, binding, vnode, oldVnode) {
//     if (!binding.modifiers.once) {
//       hook(el, binding);
//     }
//   },
// });

// Vue.directive('highlight', function (el, binding, vnode, oldVnode) {
//   switch (binding.arg) {
//     case 'bg':
//       el.style.backgroundColor = binding.value;
//       break;
//     case 'border':
//       el.style.borderStyle = 'solid';
//       el.style.borderWidth = '1px';
//       el.style.borderColor = binding.value;
//       break;
//     case 'text':
//       el.style.fontWeight = 'bold';
//       el.style.color = binding.value;
//       break;

//     default:
//       throw new Error('指定のハイライトは使えません。');
//   }
// });

// Vue.directive('highlight', {
//   bind: function (el, binding) {
//     el.addEventListener(
//       'mouseenter',
//       function () {
//         this.style.backgroundColor = binding.value;
//       },
//       false
//     );
//     el.addEventListener(
//       'mouseleave',
//       function () {
//         this.style.backgroundColor = null;
//       },
//       false
//     );
//   },
// });

Vue.directive('markdown', function (el, binding, vnode, oldVnode) {
  el.innerHTML = marked(el.textContent, binding.value);
});

new Vue({
  el: '#app',
  data: {
    // name: '名無しの権兵衛',
    // color: 'red',
    options: {
      gfm: true,
      breaks: true,
      xhtml: true,
    },
  },
  // directives: {
  //   highlight: {
  //     bind: function (el, binding, vnode, oldVnode) {
  //       el.style.backgroundColor = binding.value;
  //     },
  //   },
  // },
});
