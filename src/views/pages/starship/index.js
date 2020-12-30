export const Starship = {
  render: async starshipData => {
    console.log(starshipData);

    return /* html */ `
            <section class="section">
                <h1> Post Id : ${starshipData.name}</h1>
            </section>
        `;
  },
  after_render: async () => {},
};
