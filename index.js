const scrapeIt = require('scrape-it');

async function getData() {
  const scrapeResult = await scrapeIt('https://slides.com/explore', {
    presentations: {
      listItem: 'li.sl-deck-thumbnail',
      data: {
          title: 'div.title',
          link: {
            selector:'a.deck-link',
            attr:'href'
          },
      },
    },
  });
  console.log("Obteniendo datos");
  console.log(scrapeResult.data);

}
getData();
