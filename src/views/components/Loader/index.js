import './styles.scss';

import Spinner from '../../../assets/spinner.svg';

export const Loader = {
  render: async () => {
    const view = `
              <section class="loader">
                  ${Spinner}
              </section>
          `;
    return view;
  },
  after_render: async () => {},
};
