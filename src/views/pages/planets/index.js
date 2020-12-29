const Planets = {
  render: async planetsData => {
    const planets = planetsData.map(planetData => `<h1>${planetData.name}</h1>`).join(' ');

    return /* html */ `
            <section class="section">
                <h1> Planets : ${planets}</h1>
            </section>
        `;
  },
  after_render: async () => {},
};

export default Planets;
