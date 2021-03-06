import './styles.scss';

import Spinner from '/src/assets/spinner.svg';

export const Loader = {
  render: async () => {
    const view = `
              <section id="loader" class="loader">
                  ${Spinner}
              </section>
          `;
    return view;
  },
  after_render: async () => {},
};
