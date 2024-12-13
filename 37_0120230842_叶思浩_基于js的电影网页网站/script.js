var doms = {
    caroursel:document.querySelector('.carousel'),
    indicators:Array.from(document.querySelectorAll('.indicator span'))  
}
// doms 对象用于存储与轮播图相关的DOM元素。
// carousal: 通过.carousel选择器获取轮播图的主要容器。
// indicators: 通过.indicator span选择器获取所有指示器（小圆点），
// 并使用Array.from()将NodeList转换成数组以便于操作。

var totalItems = doms.indicators.length; //保存指示器的数量，也对应于轮播图的数量。


function moveTo(index){
    doms.caroursel.style.transform = `translateX(-${index}01%)`
    
    var active = document.querySelector('.indicator span.active')
    active.classList.remove('active')
    doms.indicators[index].classList.add('active')
}
// moveTo(index) 函数根据传入的索引值调整轮播图的位置，并更新当前激活的指示器。
// 使用CSS的transform属性来平移轮播图，使其看起来像是在滚动。
// 移除当前激活的指示器上的active类，然后为新的指示器添加active类。



doms.indicators.forEach(function(item,i){
  item.onclick = function(){
      moveTo(i)
      autoSlide = setInterval(moveToNext, 5000)
    }
})

// 遍历所有的指示器，并为每一个绑定一个点击事件处理器。
// 当用户点击某个指示器时，调用moveTo(i)函数跳转到对应的图片。
// 同时重新开始自动播放定时器，确保从新位置开始自动播放。



function moveToNext() {
    var current = doms.indicators.indexOf(document.querySelector('.indicator span.active'));
    moveTo((current + 1) % totalItems);
}

// moveToNext() 函数用于处理自动播放逻辑。
// 它首先找到当前激活的指示器的索引。
// 然后调用moveTo()函数跳转到下一个位置 (current + 1) % totalItems，这样可以循环回到第一张图片。



var autoSlide = setInterval(moveToNext, 5000);

window.onload = function () {
    moveTo(0);
}


// 加了一个点击事件监听器给ID为toggleTheme的按钮。
// 当该按钮被点击时，它会切换body标签上dark-theme和light-theme类的状态，实现主题切换的效果。



const { createApp } = Vue;

        createApp({
            data() {
                return {
                    isDarkMode: false
                };
            },
            methods: {
                toggleTheme() {
                    this.isDarkMode = !this.isDarkMode;
                    document.body.classList.toggle('dark-theme', this.isDarkMode);
                    document.body.classList.toggle('light-theme', !this.isDarkMode);
                }
            }
        }).mount('#app');