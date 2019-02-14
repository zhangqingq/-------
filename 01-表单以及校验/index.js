window.onload = function () {
    // 获取元素
    var btn = document.getElementById('btn');
    // console.log(btn);
    // 给提交按钮注册点击时间
    btn.onclick = function () {
        // 测试
        // alert(123456);
        // 获取input元素
        var searchName = document.getElementsByClassName('name')[0];
        var research = document.getElementsByClassName('research')[0];
        var contacts = document.getElementsByClassName('contacts')[0];
        var boo = document.getElementsByClassName('yes')[0];
        console.log(boo.value);
        console.log(boo.checked);
        var number = document.getElementsByClassName('number')[0];
        var desc = document.getElementsByClassName('desc')[0];

        // ----------1, 判断调查名称输入格式是否合法-------------
        // 获取 调查名称的 value
        var v1 = searchName.value;
        console.log(v1);
        // 判断 调查名称中 是否存在 ”-“
        var boo1 = v1.indexOf('-');
        if (boo1 === -1) {
            alert('调查名称输入不合法，请使用“-”分隔符');
            return;
        }

        // ----------2, 判断调查负责人输入格式是否合法-------------
        var v2 = research.value;
        // 正则表达式验证，调查负责人名称 书写规则
        var test1 = /^[u4e00-\u9fa5]{2,5}$/;
        if (v2 !== "") {
            if (!test1.exec(v2)) {
                alert('姓名格式错误，只能输入2到5个汉字');
                return false
            }
        } else {
            alert('负责人名称不能为空')
        }

        //  ----------3, 判断联系人名称输入格式是否合法-------------
        var v3 = contacts.value;
        if (v3 !== "") {
            if (!test1.exec(v3)) {
                alert('联系人名称格式错误，只能输入2到5个汉字');
                return false
            }
        } else {
            alert('联系人名称不能为空')
        }


        // ----------4, 判断企业账号输入格式是否合法-------------
        var v4 = number.value;
        console.log(v4);
        var test2 = /\d+(,\d+)*/g;
        // ① 首先判断 企业账号是否为空
        if (v4 !== "") {
            // ② 当不为空的时候，判断书写格式是否正确
            if (test2.exec(v4)) {
                // ③ 当不为空且书写格式也正确，判断是否存在 ”，“；即判断有几个账号
                var boo2 = v4.indexOf(',');
                if (boo2 !== -1) {
                    //  当存在 多个账号的时候，将 value 用 , 分割
                    var enterpriseIds = v4.split(",");
                    // console.log(enterpriseIds);
                    for (var i = 0; i < enterpriseIds.length; i++) {
                        // 将分割过后的数组元素有字符串转为 数字
                        enterpriseIds[i] = Number(enterpriseIds[i]);
                    }
                    // console.log(enterpriseIds);
                }
            } else {
                alert('企业账号只能是数字，且不同帐号之间用”,“分割');
                return;
            }
        } else {
            alert("企业账号不能为空");
            return;
        }

        // 获取 调查摘要 内容
        var v5 = desc.value;

        // 当代码执行到此处的时候，表示所有的表单验证均已经通过
        var obj = {
            name: '',
            manager: "",
            concatPeople: '',
            isPreResearch: '',
            enterpriseIds: '',
            desc: ''
        };
        obj['name'] = v1;
        obj.manager = v2;
        obj['concatPeople'] = v3;
        obj['isPreResearch'] = boo.checked;
        obj['enterpriseIds'] = enterpriseIds;
        obj['desc'] = v5;
        console.log(obj);

        // 阻止默认跳转
        return false;
    }
}