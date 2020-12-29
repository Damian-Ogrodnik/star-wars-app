const Starships = {
  render: async starshipsData => {
    const starships = starshipsData.map(starshipData => `<h1>${starshipData.name}</h1>`).join(' ');

    return /* html */ `
            <section class="section">
                <h1> Post Id : ${starships}</h1>
            </section>
        `;
  },
  after_render: async () => {},
};

export default Starships;
