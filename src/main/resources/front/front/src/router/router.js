import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import yikatongList from '../pages/yikatong/list'
import yikatongDetail from '../pages/yikatong/detail'
import yikatongAdd from '../pages/yikatong/add'
import chongzhixinxiList from '../pages/chongzhixinxi/list'
import chongzhixinxiDetail from '../pages/chongzhixinxi/detail'
import chongzhixinxiAdd from '../pages/chongzhixinxi/add'
import koufeixinxiList from '../pages/koufeixinxi/list'
import koufeixinxiDetail from '../pages/koufeixinxi/detail'
import koufeixinxiAdd from '../pages/koufeixinxi/add'
import guashishenqingList from '../pages/guashishenqing/list'
import guashishenqingDetail from '../pages/guashishenqing/detail'
import guashishenqingAdd from '../pages/guashishenqing/add'
import shangpinleixingList from '../pages/shangpinleixing/list'
import shangpinleixingDetail from '../pages/shangpinleixing/detail'
import shangpinleixingAdd from '../pages/shangpinleixing/add'
import shangpinxinxiList from '../pages/shangpinxinxi/list'
import shangpinxinxiDetail from '../pages/shangpinxinxi/detail'
import shangpinxinxiAdd from '../pages/shangpinxinxi/add'
import dingdanxinxiList from '../pages/dingdanxinxi/list'
import dingdanxinxiDetail from '../pages/dingdanxinxi/detail'
import dingdanxinxiAdd from '../pages/dingdanxinxi/add'
import tushuleixingList from '../pages/tushuleixing/list'
import tushuleixingDetail from '../pages/tushuleixing/detail'
import tushuleixingAdd from '../pages/tushuleixing/add'
import tushuxinxiList from '../pages/tushuxinxi/list'
import tushuxinxiDetail from '../pages/tushuxinxi/detail'
import tushuxinxiAdd from '../pages/tushuxinxi/add'
import tushujieyueList from '../pages/tushujieyue/list'
import tushujieyueDetail from '../pages/tushujieyue/detail'
import tushujieyueAdd from '../pages/tushujieyue/add'
import tushuguihaiList from '../pages/tushuguihai/list'
import tushuguihaiDetail from '../pages/tushuguihai/detail'
import tushuguihaiAdd from '../pages/tushuguihai/add'
import tongzhixinxiList from '../pages/tongzhixinxi/list'
import tongzhixinxiDetail from '../pages/tongzhixinxi/detail'
import tongzhixinxiAdd from '../pages/tongzhixinxi/add'
import meishixinxiList from '../pages/meishixinxi/list'
import meishixinxiDetail from '../pages/meishixinxi/detail'
import meishixinxiAdd from '../pages/meishixinxi/add'
import shitangjiucanList from '../pages/shitangjiucan/list'
import shitangjiucanDetail from '../pages/shitangjiucan/detail'
import shitangjiucanAdd from '../pages/shitangjiucan/add'
import tiyuqicaiList from '../pages/tiyuqicai/list'
import tiyuqicaiDetail from '../pages/tiyuqicai/detail'
import tiyuqicaiAdd from '../pages/tiyuqicai/add'
import qicaijieyongList from '../pages/qicaijieyong/list'
import qicaijieyongDetail from '../pages/qicaijieyong/detail'
import qicaijieyongAdd from '../pages/qicaijieyong/add'
import qicaiguihaiList from '../pages/qicaiguihai/list'
import qicaiguihaiDetail from '../pages/qicaiguihai/detail'
import qicaiguihaiAdd from '../pages/qicaiguihai/add'
import huiyiqiandaoList from '../pages/huiyiqiandao/list'
import huiyiqiandaoDetail from '../pages/huiyiqiandao/detail'
import huiyiqiandaoAdd from '../pages/huiyiqiandao/add'
import jiaofeixinxiList from '../pages/jiaofeixinxi/list'
import jiaofeixinxiDetail from '../pages/jiaofeixinxi/detail'
import jiaofeixinxiAdd from '../pages/jiaofeixinxi/add'
import shangjijiluList from '../pages/shangjijilu/list'
import shangjijiluDetail from '../pages/shangjijilu/detail'
import shangjijiluAdd from '../pages/shangjijilu/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'yikatong',
					component: yikatongList
				},
				{
					path: 'yikatongDetail',
					component: yikatongDetail
				},
				{
					path: 'yikatongAdd',
					component: yikatongAdd
				},
				{
					path: 'chongzhixinxi',
					component: chongzhixinxiList
				},
				{
					path: 'chongzhixinxiDetail',
					component: chongzhixinxiDetail
				},
				{
					path: 'chongzhixinxiAdd',
					component: chongzhixinxiAdd
				},
				{
					path: 'koufeixinxi',
					component: koufeixinxiList
				},
				{
					path: 'koufeixinxiDetail',
					component: koufeixinxiDetail
				},
				{
					path: 'koufeixinxiAdd',
					component: koufeixinxiAdd
				},
				{
					path: 'guashishenqing',
					component: guashishenqingList
				},
				{
					path: 'guashishenqingDetail',
					component: guashishenqingDetail
				},
				{
					path: 'guashishenqingAdd',
					component: guashishenqingAdd
				},
				{
					path: 'shangpinleixing',
					component: shangpinleixingList
				},
				{
					path: 'shangpinleixingDetail',
					component: shangpinleixingDetail
				},
				{
					path: 'shangpinleixingAdd',
					component: shangpinleixingAdd
				},
				{
					path: 'shangpinxinxi',
					component: shangpinxinxiList
				},
				{
					path: 'shangpinxinxiDetail',
					component: shangpinxinxiDetail
				},
				{
					path: 'shangpinxinxiAdd',
					component: shangpinxinxiAdd
				},
				{
					path: 'dingdanxinxi',
					component: dingdanxinxiList
				},
				{
					path: 'dingdanxinxiDetail',
					component: dingdanxinxiDetail
				},
				{
					path: 'dingdanxinxiAdd',
					component: dingdanxinxiAdd
				},
				{
					path: 'tushuleixing',
					component: tushuleixingList
				},
				{
					path: 'tushuleixingDetail',
					component: tushuleixingDetail
				},
				{
					path: 'tushuleixingAdd',
					component: tushuleixingAdd
				},
				{
					path: 'tushuxinxi',
					component: tushuxinxiList
				},
				{
					path: 'tushuxinxiDetail',
					component: tushuxinxiDetail
				},
				{
					path: 'tushuxinxiAdd',
					component: tushuxinxiAdd
				},
				{
					path: 'tushujieyue',
					component: tushujieyueList
				},
				{
					path: 'tushujieyueDetail',
					component: tushujieyueDetail
				},
				{
					path: 'tushujieyueAdd',
					component: tushujieyueAdd
				},
				{
					path: 'tushuguihai',
					component: tushuguihaiList
				},
				{
					path: 'tushuguihaiDetail',
					component: tushuguihaiDetail
				},
				{
					path: 'tushuguihaiAdd',
					component: tushuguihaiAdd
				},
				{
					path: 'tongzhixinxi',
					component: tongzhixinxiList
				},
				{
					path: 'tongzhixinxiDetail',
					component: tongzhixinxiDetail
				},
				{
					path: 'tongzhixinxiAdd',
					component: tongzhixinxiAdd
				},
				{
					path: 'meishixinxi',
					component: meishixinxiList
				},
				{
					path: 'meishixinxiDetail',
					component: meishixinxiDetail
				},
				{
					path: 'meishixinxiAdd',
					component: meishixinxiAdd
				},
				{
					path: 'shitangjiucan',
					component: shitangjiucanList
				},
				{
					path: 'shitangjiucanDetail',
					component: shitangjiucanDetail
				},
				{
					path: 'shitangjiucanAdd',
					component: shitangjiucanAdd
				},
				{
					path: 'tiyuqicai',
					component: tiyuqicaiList
				},
				{
					path: 'tiyuqicaiDetail',
					component: tiyuqicaiDetail
				},
				{
					path: 'tiyuqicaiAdd',
					component: tiyuqicaiAdd
				},
				{
					path: 'qicaijieyong',
					component: qicaijieyongList
				},
				{
					path: 'qicaijieyongDetail',
					component: qicaijieyongDetail
				},
				{
					path: 'qicaijieyongAdd',
					component: qicaijieyongAdd
				},
				{
					path: 'qicaiguihai',
					component: qicaiguihaiList
				},
				{
					path: 'qicaiguihaiDetail',
					component: qicaiguihaiDetail
				},
				{
					path: 'qicaiguihaiAdd',
					component: qicaiguihaiAdd
				},
				{
					path: 'huiyiqiandao',
					component: huiyiqiandaoList
				},
				{
					path: 'huiyiqiandaoDetail',
					component: huiyiqiandaoDetail
				},
				{
					path: 'huiyiqiandaoAdd',
					component: huiyiqiandaoAdd
				},
				{
					path: 'jiaofeixinxi',
					component: jiaofeixinxiList
				},
				{
					path: 'jiaofeixinxiDetail',
					component: jiaofeixinxiDetail
				},
				{
					path: 'jiaofeixinxiAdd',
					component: jiaofeixinxiAdd
				},
				{
					path: 'shangjijilu',
					component: shangjijiluList
				},
				{
					path: 'shangjijiluDetail',
					component: shangjijiluDetail
				},
				{
					path: 'shangjijiluAdd',
					component: shangjijiluAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
