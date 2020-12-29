const Films = {
  render: async (filmsArray) => {
    const films = filmsArray.map((filmData) => `<h1>${filmData.title}</h1>`).join(' ');

    return `
            <section class="section">
                <h1> Films</h1>
                ${films}
            </section>
        `;
  },
  after_render: async () => {},
};

export default Films;
