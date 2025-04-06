import {defineConfig} from 'vitepress'
import {nav} from "./navbar";
import {sidebar} from "./sidebar";
import mathjax3 from 'markdown-it-mathjax3';

const customElements = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mi',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'mscarries',
    'msgroup',
    'mstack',
    'mlongdiv',
    'msline',
    'mstack',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'math',
    'mi',
    'mn',
    'mo',
    'ms',
    'mspace',
    'mtext',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'msqrt',
    'mstyle',
    'mmultiscripts',
    'mover',
    'mprescripts',
    'msub',
    'msubsup',
    'msup',
    'munder',
    'munderover',
    'none',
    'maligngroup',
    'malignmark',
    'mtable',
    'mtd',
    'mtr',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'msrow',
    'mstack',
    'maction',
    'semantics',
    'annotation',
    'annotation-xml',
    'mjx-container',
    'mjx-assistive-mml',
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "文档",
    description: "A VitePress Site",

    // Latex公式
    markdown: {
        config: (md) => {
            md.use(mathjax3);
        },
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag),
            },
        },
    },

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: nav,

        sidebar: sidebar,

        socialLinks: [
            {icon: 'github', link: 'https://github.com/lurww'}
        ],

        editLink: {
            pattern: 'https://github.com/your-repo/edit/main/docs/:path'
        },

        // 右侧栏锚点导航
        outline: {
            level: [2, 6],
            label: '当前页目录'
        },

        // 搜索配置
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换'
                        }
                    }
                }
            }
        },

        // 手机端配置返回顶部
        // returnToTop: true,
        // // 手机端配置返回顶部按钮显示文字
        // returnToTopLabel: "返回顶部",
        // // 手机端配置侧边栏菜单按钮显示文字
        // sidebarMenuLabel: "菜单",

        //网站底部设置
        footer: {
            //底部信息
            // message: '<a href="https://beian.miit.gov.cn/#/Integrated/index">渝ICP备2023004958号-2</a>',
            //底部版权
            copyright: " Copyright © 2025 LuRWw ",
        },

    }
})
