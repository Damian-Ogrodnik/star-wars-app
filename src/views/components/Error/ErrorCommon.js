export const ErrorCommon = {
  render: async (message) => {
    const view = `
            <section class="section">
                <h1> ${message || 'Something went wrong...'} </h1>
            </section>
        `;
    return view;
  },
  after_render: async () => {},
};
