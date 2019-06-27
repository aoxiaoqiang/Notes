Component({
  properties: {
    price: {
      type: String,
      value: '',
      observer(newVal) {
        this._handlePriceStr(newVal);
      }
    },
    color: {
      type: String,
      value: 'red'
    }
  },
  data: {
    showPrice: [],''
  },
  methods: {
    conputed(price) {
      priceStr = `${priceStr}`;
      let showPrice = priceStr;
      if (priceStr.indexOf('.') !== -1) {
        showPrice = priceStr.split('.');
      } else {
        showPrice = [priceStr];
      }
      this.setData({
        showPrice
      });
    },
    handleClick(event) {
      console.log('handle click');
    }
  }
});


// 使用方式
/*
<price class="price-box" color="#F00" price="88.88" bindtap="handleClick"></price>

*/