import './styles.scss';

const Films = {
  render: async filmsArray => {
    const films = filmsArray
      .map(
        filmData => `
      <section>
       <h1>${filmData.title}</h1>
      </section>`
      )
      .join(' ');

    console.log(filmsArray);

    return `
            <main>
                <h2> Films</h2>
                ${films}
            </main>
        `;
  },
  after_render: async () => {},
};

export default Films;
