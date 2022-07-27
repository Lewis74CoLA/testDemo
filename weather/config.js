var app = new Vue({
    el: "#app",
    data: {
        city: "北京",
        forcasts: [],
    },
    methods: {
        searchWeather: function() {
            var that = this
                // console.log('查询天气')
                // console.log(this.city)
            axios
                .get("http://wthrcdn.etouch.cn/weather_mini?city=" + that.city)
                .then(function(response) {

                    console.log(response.data.data.forecast);
                    that.forcasts = response.data.data.forecast

                })
                .catch(function(err) {
                    console.log(err);
                });
        },
        changeCity: function(newCity) {
            this.city = newCity;

        }
    },
});