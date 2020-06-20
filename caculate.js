var data =
    "全国人民 李文亮医生 李文亮医生 嘉鱼县新型冠状病毒感染的肺炎防控指挥部 撒贝宁 李文亮 全体医护人员 全国人民 湖北生态环境系统各级党员干部 财政部 有关部门 医务人员 财政部 有关部门 钱七虎 人民日报全媒体 李文亮 全体医护人员 国家政府 海尔 一线救援人员 财政部 有关部门 武汉民警董宏祥的家庭 上海市人大常委会 张文宏 企业 无 李文亮 公司股东陈宏望 大王镇镇村干部、医疗卫生人员 财政部 社会各界 无 黄冈居民 科尔化工 郎朗吉娜夫妇 郎朗艺术基金会 武汉民警董宏祥的家庭 武汉市卫健委 人工智能创建的药物 医院 媒体 人民日报全媒体 无 无 荆州市新型冠状病毒感染肺炎疫情防控指挥部 无 无 武汉市政府 无 上海人工智能研究院 健培科技 一线的医务工作者 疫情一线医护•守护者后盾行动”项目 新浪 社会各界爱心企业及爱心人士 医疗救助 全国支援 无 云南文山 湖北省市场监管局 河南村民 疫情一线医护•守护者后盾行动”项目 新浪 白衣天使 前线医护英雄 雷神山医院 医院 媒体 在家乖乖的大家 新疆人民 武汉开发区城管 人民日报旗下新媒体 无 政府 人民 钱七虎 湖北省 疫情一线医护•守护者后盾行动”项目 新浪 医护人员 华南农业大学联合其他机构科研人员 荆州市新型冠状病毒感染的肺炎防控指挥部 幼儿园青年教师谢文思 卡车司机李超 全市党政机关、企事业单位 荆州市新型冠状病毒感染的肺炎防控指挥部 7名正值哺乳期的护士妈妈 作者‘我’ 无 圭圭 我 李文亮 奔赴一线拿命治肺炎的人 医护人员 李文亮 财政部会同有关部门 上海市 袁海涛医生 医护人员 供电部门 博主我 钱七虎 武汉4名医护人员 钱七虎 无 北京与广州医疗队 钱七虎 国家 社区工作人们 “我”和家人 一大家人 医生 国家卫健委 医疗队 盒马派送员 河南 医护人员 志愿服务出租车 抗疫医护人员 作者 深圳警方 陈吉宁 政府 政府 国家和政府 钟南山 政府 深圳华大基因科技有限公司等 政府 大型超市 张劲农 首旅如家 医护人员 医院和医生 梁武东医生 爸爸 梁武东医生 平台 阿里平台 辟谣平台 出租车 武汉市 张雁灵 邓传福 幼儿园青年教师谢文思 武汉市 捐赠者 医护人员 医护人员 辟谣平台 医院和医生 政府 梁武东医生 第三军医大学 上海海关 姥爷 政府 我 李文亮 公司股东陈宏望 大王镇镇村干部、医疗卫生人员 财政部 社会各界 无 黄冈居民 抗疫医护人员 作者 深圳警方 医生 博主 政府 政府 上海海关 辟谣平台 研究人员 博主 辟谣平台 拍视频的人 上海海关 捐赠的人 医生 交通部 国家 各城市 医生护士 医护人员 社区排查一线工作者 终南山 梁武东医生 社会 捐赠人 医院 医生 医护工作者 政府 民营企业 广东医疗队 医院和医生 酒店 医生们 博主 武汉市 医生 博主 国家 国家 政府 制作视频的人 钟南山团队 耶稣 美国 政府 志愿服务出租车 医生 政府 湖北中医药大学 政府 政府 邻居 政府 政府 广西部 政府 我 我 政府 政府 医生 医生 博主 博主 政府 我 医院和医生 同济医院 医生 博主 中医 政府 政府 政府 政府 妈妈 政府 政府 政府 社区 政府 政府 梁武东医生 国家和政府 黄石“小汤山”医院 专家 井岗山小学全体教职工 抗疫医护人员 作者 谭德塞 抗疫医护人员 作者 抗疫医护人员 作者 深圳警方 范恒教授 ";

var arr = data.split(" ");
arr = arr.filter((el) => {
    return el != "无";
});
var res = []; //医务  人民群众  政府  其他
var doctor = [],
    public = [],
    government = [],
    occupy = [];
console.log(arr.length);
for (let i = 0; i < data.length; i++) {
    if (/(医生|医院|医护|李文亮|白衣天使|中医|医疗|医务)/.test(arr[i])) {
        doctor.push(arr[i]);
        // arr.splice(i, 1);
        delete arr[i];
    } else if (
        /(政府|市|武汉|湖北|部|国家|上海|平台|广东|干部|警)/.test(arr[i])
    ) {
        government.push(arr[i]);
        // arr.splice(i, 1);
        delete arr[i];
    } else if (/(大学|企业|小学|南山|钱七虎|公司)/.test(arr[i])) {
        occupy.push(arr[i]);
        // arr.splice(i, 1);
        delete arr[i];
    } else if (
        /(我|人|社会|媒体|报|志愿|社区|村民|博主|大家|老师)/.test(arr[i])
    ) {
        public.push(arr[i]);
        // arr.splice(i, 1);
        delete arr[i];
    }
}
var filtered = arr.filter(function (el) {
    return el != null || el != undefined || el != "";
});
console.log("医务  人民群众  政府  企业  其他");
console.log(
    doctor.length,
    public.length,
    government.length,
    occupy.length,
    filtered.length
);
//console.log(filtered);
//console.log(doctor, public, government, occupy);
