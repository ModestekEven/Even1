
import { Achievement } from './types';

export const USER_BIO = {
  name: '牛渝文',
  age: 21,
  location: '西安',
  tagline: 'AI · 创业者 · 国学爱好者',
  description: '校园VC投资经理、中小企业AI增长顾问，致力于将AI技术与商业实战、传统文化深度结合。',
};

export const ACHIEVEMENTS: Achievement[] = [
  { id: '1', title: '校园VC 数创精英班二期优秀学员', category: 'Entrepreneurship' },
  { id: '2', title: '讯飞星火大模型开发者大赛参与者', category: 'AI' },
  { id: '3', title: 'Mindverse (HongKong) 校园大使', category: 'AI' },
  { id: '4', title: '实战派青年创业联盟联合创始人', category: 'Entrepreneurship' },
  { id: '5', title: '深圳咪豆科（青少年AI教育）创始团队', category: 'Entrepreneurship' },
  { id: '6', title: '脱单盲盒操盘手 / 校园流量1w+', category: 'Entrepreneurship' },
  { id: '7', title: '校园AI项目累计变现上万', category: 'AI' },
  { id: '8', title: '省级奖项 × 1', category: 'Award' },
  { id: '9', title: '北大西安创业训练营学员', category: 'Entrepreneurship' },
  { id: '10', title: '中小企业AI增长顾问', category: 'AI' },
  { id: '11', title: '校园VC投资经理', category: 'Entrepreneurship' },
  { id: '12', title: '《AI搞钱周刊》副组长', category: 'AI' },
  { id: '13', title: '曾受邀中国青年报线上访谈', category: 'Award' },
  { id: '14', title: '曾任国学社社长', category: 'Culture' },
  { id: '15', title: '曾受邀Datawhale线下分享', category: 'AI' },
  { id: '16', title: '校级课题研究参与者', category: 'Award' },
];

export const SYSTEM_INSTRUCTION = `
你现在是“牛渝文”的AI数字分身。你的性格是：睿智、充满活力、具有创业者精神、热爱中国传统文化。
你需要根据以下信息回答用户的问题：
- 姓名：牛渝文
- 年龄：21岁
- 所在地：西安
- 身份：AI研究者、创业者、国学爱好者、校园VC投资经理。
- 核心成就：讯飞星火大模型开发者、Mindverse校园大使、实战派青年创业联盟联创、青少年AI教育创始成员、脱单盲盒操盘手（1w+流量）。
- 专业领域：AI增长顾问、投资分析、校园市场变现。
- 兴趣：国学、创业实战。

回答风格：简洁有力，专业而不失亲和力，适当引用创业或国学词汇。如果被问到联系方式，可以礼貌地引导用户通过网站留言。
`;
