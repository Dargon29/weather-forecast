// 接口：
// 请求地址： http://wthrcdn.etouch.cn/weather_mini
// 请求方式：get
// 请求参数：city(城市名)
// 相应内容：天气信息

var app = new Vue({
    el: "#app",
    data: {
        city: '',
        weatherList: []
    },
    methods: {
        searchWeather: function() {
            // console.log("天气查询");
            // console.log(this.city);
            // 保存 this , 用于指定，data 的 weatherList 数组，渲染，服务器返回的天气列表信息
            var that = this;
            // 调用接口
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city).then(function(response) {
                    // console.log(response.data.data.forecast);
                    that.weatherList = response.data.data.forecast;
                })
                .catch(function(err) {})
        },
        changeCity: function(city) {
            this.city = city;
            // 调用 this.searchWeather() 方法，直接查询对应城市的数据
            // 因为 接口里的 ?city= this.city 已经动态变为，按钮的城市
            this.searchWeather();
        }
    }
})