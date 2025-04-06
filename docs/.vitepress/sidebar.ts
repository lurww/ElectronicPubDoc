// docs/.vitepress/relaConf/index.ts 配置内容较多，单独起个文件
export * from './sidebar';

// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
    // /column/辐射发射 表示对这个文件夹下的所有md文件做侧边栏配置
    '/column/辐射发射': [
        // 第一部分
        {
            text: '1-辐射发射问题原理',
            items: [
                {
                    text: '1.1 辐射发射源头分析',
                    link: '/column/辐射发射/1-辐射发射问题原理/1.1 辐射发射源头分析.md'
                },
                {
                    text: '1.2 产品辐射发射原理',
                    link: '/column/辐射发射/1-辐射发射问题原理/1.2 产品辐射发射原理.md'
                },
                {
                    text: '1.3 辐射发射测试中的天线特征关系研究',
                    link: '/column/辐射发射/1-辐射发射问题原理/1.3 辐射发射测试中的天线特征关系研究.md'
                }
            ]
        },
        // 第二部分
        // {
        //     text: '字典和树',
        //     items: [
        //         {
        //             text: '字典和集合-Set和Map',
        //             link: '/column/Algorithm/003_Dictionary'
        //         },
        //         {
        //             text: '树-深/广度优先遍历',
        //             link: '/column/Algorithm/004_Tree'
        //         }
        //     ]
        // }
    ]
};