const People = {
  render: async peopleData => {
    const people = peopleData.map(peopleData => `<h1>${peopleData.name}</h1>`).join(' ');

    return /* html */ `
            <section class="section">
                <h1> ${people} </h1>
            </section>
        `;
  },
  after_render: async () => {},
};

export default People;
