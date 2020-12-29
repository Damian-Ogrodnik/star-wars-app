import './styles.scss';

export const Film = {
  render: async filmData => {
    console.log(filmData);

    return `
            <main class="films">
                ${filmData.opening_crawl}
            </main>
        `;
  },
  after_render: async () => {},
};
