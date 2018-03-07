'use strict';

module.exports = {
    port: 8080,
    year: 2018,
    author: 'alexsatov',
    meta: { charset: 'utf-8' },
    lang: 'ru',
    title: 'Твой день',
    backText: 'На главную',
    weatherApi: {
        url: 'https://www.metaweather.com/api/',
        querySearch: 'location/search/?query=',
        lattlongSearch: 'location/search/?lattlong=',
        idSearch: 'location/',
        locationNotFound: 'Местоположение неизвестно',
        locationRequired: 'Необходимы данные местоположения',
        states: {
            'sn': 'Снег',
            'sl': 'Слякоть',
            'h': 'Град',
            't': 'Гроза',
            'hr': 'Ливень',
            'lr': 'Дождь',
            's': 'Пасмурно',
            'hc': 'Облачно',
            'lc': 'Немного облачно',
            'c': 'Ясно'
        }
    },
    newsCategoriesTitle: 'Категории новостей',
    newsCategories: [
        { originalName: 'buisness', name: 'Бизнес' },
        { originalName: 'entertainment', name: 'Развлечения' },
        { originalName: 'general', name: 'Общее' },
        { originalName: 'health', name: 'Здоровье' },
        { originalName: 'science', name: 'Наука' },
        { originalName: 'sports', name: 'Спорт' },
        { originalName: 'technology', name: 'Технологии' }
    ],
    newsApi: {
        url: 'https://newsapi.org/',
        search: 'v2/top-headlines?apiKey=989971a6b7384d38b124b9bfe7009d35',
        categoryParam: '&category=',
        countryParam: '&country=',
        newsNotFound: 'Новостей не найдено'
    }
};
