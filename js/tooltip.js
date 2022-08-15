import { css } from "./utills.js";

const template = (data) => `
${data.items
    .map((item) => {
      return `<li class="tooltip-list-item">
      <div class="value" style="color: ${item.color}">${item.value}</div>
      <div class="name" style="color: ${item.color}">${item.name}</div>
    </li>`
    })
    .join('\n')}
</ul>
`;

export function tooltip(el) {
    const clear = () => el.innerHTML = ``;
    return {
        show({left, top}, data) {
            const {height, width } = el.getBoundingClientRect();
            clear();
            css(el, {
                display: 'block',
                top: top - height + 'px',
                left: (left + width / 2) + 'px'
            });
            el.insertAdjacentHTML('afterbegin', template(data));
        },
        hide() {
            css(el, {display: 'none'})
        },
    };
};