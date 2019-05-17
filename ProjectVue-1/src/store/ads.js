export default {
  state: {
    ads: [
      {
        id: '111',
        title: 'Squirrel',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt doloribus esse iste perferendis quas recusandae reprehenderit repudiandae totam unde vel!',
        promo: true,
        imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: '222',
        title: 'Sky',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, reiciendis.',
        promo: false,
        imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        id: '333',
        title: 'Eagle',
        desc: 'Lorem ipsum dolor sit.',
        promo: false,
        imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    allAds (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds (state) {
      return state.ads
    },
    adByID (state) {
      return adID => {
        return state.ads.find(ad => ad.id === adID)
      }
    }
  }
}
