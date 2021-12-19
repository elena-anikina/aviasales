export default class AviasalesApi {
  async getSearchId() {
    return fetch('https://front-test.beta.aviasales.ru/search')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка, статус ошибки ${response.status}`);
        }
        return response.json();
      })
      .then((body) => body.searchId);
  }

  async getTickets(searchId) {
    return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`).then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка, статус ошибки ${response.status}`);
      }
      return response.json();
    });
  }
}
