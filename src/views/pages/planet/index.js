export const Planet = {
  render: async planetData => {
    console.log(planetData);

    return /* html */ `
                <section class="section">
                    <h1> ${planetData.name} </h1>
                </section>
            `;
  },
  after_render: async () => {},
};
