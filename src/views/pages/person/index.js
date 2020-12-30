export const Person = {
  render: async personData => {
    return /* html */ `
              <section class="section">
                  <h1> ${personData.name} </h1>
              </section>
          `;
  },
  after_render: async () => {},
};
