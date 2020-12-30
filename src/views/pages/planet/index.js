export const Planet = {
  render: async planetData => {
    return /* html */ `
                <section class="section">
                    <h1> ${planetData.name} </h1>
                </section>
            `;
  },
  after_render: async () => {},
};
