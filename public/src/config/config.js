// const host = 'http://localhost:3300';

// const host = process.env.HOST;
const config = {
    // host: host,
    // api: host + '/api',
    freelancerLevels: {
        junior: 'junior',
        middle: 'middle',
        senior: 'senior',
    },
    orderStatuses: {
        new: 'new',
        confirmed: 'confirmed',
        success: 'success',
        canceled: 'canceled',
    },
    menu:{
        about_us:{
        en: 'About us',
        sk: 'O nas',
        ru: 'О нас'
    },
        catalog: {
            en: 'Catalog',
            sk: 'Каталог',
            ru: ''
        },
        order:{
            en: 'Order',
            sk: 'Objednat',
            ru: 'Заказать'
        }
    }



}
export default config;