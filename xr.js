var boy = {
    date: {},
    innitfn: function (date) {
        this.date = date;
        this.contronls();
    },
    contronls: function () {
        this.date.control.addEventListener("click", function (e) {
            var target = e.target.getAttribute("class");
            var timer = null;
            console.log(target)
            if (target == '') {
                return;
            }    
            console.log(img)
        timer = setInterval(function (target) {
            var speed = 0;
            var mv = 10;
            //自身运动
            speed++;
            img.src = "./images/" + target + "-" + speed + ".png"
            speed = speed % 4;
            //视口运动
            switch (target) {
                case "down":
                    wrapper.style.top = wrapper.offsetTop + mv + 'px';
                case 'up':
                    wrapper.style.top = wrapper.offsetTop - mv + 'px';
                case "left":
                    wrapper.style.left = wrapper.offsetLeft - mv + 'px';
                case 'right':
                    wrapper.style.left = wrapper.offsetLeft + mv + 'px';
                case 'lu':
                    wrapper.style.top = wrapper.offsetTop - mv + 'px';
                    wrapper.style.left = wrapper.offsetLeft - mv + 'px';
                case 'rightup':
                    wrapper.style.left = wrapper.offsetLeft + mv + 'px';
                    wrapper.style.top = wrapper.offsetTop - mv + 'px';
                case 'ld':
                    wrapper.style.top = wrapper.offsetTop + mv + 'px';
                    wrapper.style.left = wrapper.offsetLeft - mv + 'px';
                case 'rd':
                    wrapper.style.top = wrapper.offsetTop + mv + 'px';
                    wrapper.style.left = wrapper.offsetLeft + mv + 'px';
            }
        }, 200)
        })
    }
}
