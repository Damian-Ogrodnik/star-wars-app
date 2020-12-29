import Utils from '../../../services/Utils';

const Planets = {
  render: async () => {
    const request = Utils.parseRequestURL();

    return /* html */ `
            <section class="section">
                <h1> Post Id : ${request.id}</h1>
            </section>
        `;
  },
  after_render: async () => {},
};

export default Planets;
