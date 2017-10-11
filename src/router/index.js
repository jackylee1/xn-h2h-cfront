import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 首页
const Home = () => import('components/home/home');
// 通知
const Notice = () => import('components/notice/notice');
// 分享
const Recommend = () => import('components/recommend/recommend');
// 推荐历史
const Children = () => import('components/children/children');
// 签到
const Sign = () => import('components/sign/sign');

// 分类
const Cate = () => import('components/category/category');
// 大类
const MajorCategories = () => import('components/major-categories/major-categories');
// 搜索
const Search = () => import('components/search/search');

// 发布
const Publish = () => import('components/publish/publish');
// 商品分类
const PublishCategories = () => import('components/publish-categories/publish-categories');
// 交易圈子
const TradeCircle = () => import('components/trade-circle/trade-circle');

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'recommend',
          component: Recommend,
          children: [
            {
              path: 'history',
              component: Children
            }
          ]
        },
        {
          path: 'sign',
          component: Sign
        },
        {
          path: 'publish',
          component: Publish,
          children: [
            {
              path: 'category',
              component: PublishCategories
            }
          ]
        },
        {
          path: 'trade',
          component: TradeCircle
        }
      ]
    },
    {
      path: '/category',
      component: Cate,
      children: [
        {
          path: 'publish',
          component: Publish,
          children: [
            {
              path: 'category',
              component: PublishCategories
            }
          ]
        },
        {
          path: 'categories',
          component: MajorCategories
        },
        {
          path: 'search',
          component: Search
        }
      ]
    },
    {
      path: '/publish',
      component: Publish
    },
    {
      path: '/notice',
      component: Notice
    }
  ]
});