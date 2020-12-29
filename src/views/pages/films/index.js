import { swapiService } from '../../../core/rootService';
import { ErrorCommon } from '../../components/Error/ErrorCommon';

const Films = {
  render: async () => {
    const fetchedFilms = await swapiService.getFilms();

    if (fetchedFilms.error || !fetchedFilms) return ErrorCommon.render(fetchedFilms.error);

    const films = fetchedFilms.map((filmData) => `<h1>${filmData.title}</h1>`).join(' ');

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
