import { parseRequestURL } from '../../../common/helpers';

const Planets = {
  render: async () => {
    const request = parseRequestURL();

    return /* html */ `
            <section class="section">
                <h1> Post Id : ${request.id}</h1>
            </section>
        `;
  },
  after_render: async () => {},
};

export default Planets;
