/*
 * SBSES — 中文文案（简体）。
 *
 * 这个文件只放「翻译」。结构必须和 site-content.js（英文）一一对应；
 * 这里没写的项目会自动沿用英文版的值。
 *
 * 联系资料、链接、图片路径等不分语言的设定，只在 site-content.js 里改一次，
 * 不要在这里重复填写。
 *
 * 规则与英文版相同：
 *  - 品牌名 "Smart Bookkeping Services" 保持英文原样，不翻译、不更正拼写。
 *  - 不得用「持牌、注册、特许、认证、税务代理、审计公司」等字眼形容 SBSES，
 *    不保证报税或合规结果，不虚构评价、客户数、年资。
 */
window.SITE_CONTENT_ZH = {
  meta: {
    title: "SBSES · Smart Bookkeping Services｜会计 · 做账 · 薪资",
    description: "为中小企业和成长中的公司，提供自由职业的会计、做账与薪资支援。"
  },

  nav: {
    ariaLabel: "主导航",
    languageLabel: "语言",
    menuLabel: "菜单",
    items: [
      { label: "首页" },
      { label: "服务项目" },
      { label: "合作流程" },
      { label: "关于" },
      { label: "知识中心" },
      { label: "联系" }
    ],
    clientLogin: {
      label: "客户登入",
      hint: "客户专区即将开放"
    },
    cta: { label: "预约咨询" }
  },

  hero: {
    titleLines: ["您的生意，", "账目清晰，", "井然有序。"],
    strapline: "自由职业会计 · 做账 · 薪资",
    intro: "为中小企业和成长中的公司，提供专业、灵活、可靠的会计支援。",
    primary: { label: "服务项目" },
    secondary: { label: "联系我们" },
    illustrationAlt: "立体插图：圆台上摊开的账本、柱状图、饼图、计算器，以及 %、5、8 等数字",
    tags: [
      { label: "会计" },
      { label: "做账" },
      { label: "薪资" },
      { label: "合规支援" }
    ]
  },

  services: {
    eyebrow: "我们做什么",
    title: "服务项目",
    intro: "可以只选一项，也可以组合搭配。每一项合作，都按您公司的实际需要来界定范围。",
    items: [
      {
        title: "全套账目处理",
        text: "账目记录、对账，以及财务报表的编制支援。"
      },
      {
        title: "每月做账",
        text: "每个月整理并更新账目记录，条理清楚，不积压。"
      },
      {
        title: "薪资与法定缴纳支援",
        text: "计算薪资、制作薪资单，并拟好公积金（EPF）、社险（SOCSO）、就业保险（EIS）和预扣税（PCB）的呈报资料，由您确认后提交。如适用，也包括人力资源发展基金（HRDF）。"
      },
      {
        title: "年终结账与审计准备支援",
        text: "准备各类明细表，并协助回复您外部审计师的查询。SBSES 不是审计公司，也不是税务代理。"
      },
      {
        title: "账目审阅与合规行政",
        text: "在约定的服务范围内，提供账目审阅和合规方面的行政支援。"
      }
    ]
  },

  why: {
    title: "为什么选择 SBSES",
    items: [
      { title: "灵活配合", text: "按月、按季或年终支援，配合您公司的运作方式。" },
      { title: "账目清楚", text: "账目有条理，您和您的审计师都容易看懂。" },
      { title: "专注中小企业", text: "为小型和成长中的公司而设。" },
      { title: "流程务实", text: "文件交接简单，每月节奏稳定。" }
    ]
  },

  process: {
    eyebrow: "流程",
    title: "合作流程",
    steps: [
      { title: "了解需求", text: "先聊聊您的公司，以及需要哪方面的支援。" },
      { title: "安全交接文件", text: "通过双方约定的私人渠道传送。" },
      { title: "整理与审阅", text: "账目和薪资整理好后，先经过审阅，再交到您手上。" },
      { title: "持续支援", text: "逐月跟进，一直到年终。" }
    ],
    notice: "请勿通过公开的联系表单或首次询问的讯息，发送银行月结单、薪资单或身份证件。敏感文件只会通过双方事先约定的私人渠道传送。"
  },

  about: {
    eyebrow: "关于",
    titleLead: "自由职业的会计服务，",
    titleAccent: "由专人亲自跟进。",
    paragraphs: [
      "SBSES 为中小企业提供自由职业的会计、做账和薪资支援。每个月都由同一个人跟进，熟悉您的账目。",
      "审计与报税仍由您自行委任的审计师和税务代理负责，SBSES 负责准备他们所需的记录和明细表。"
    ],
    image: {
      placeholderLines: ["TODO_OWNER", "照片或品牌图"]
    }
  },

  knowledge: {
    eyebrow: "资讯",
    title: "知识中心",
    teaser: "用浅白的文字，整理马来西亚会计、税务和薪资方面的资讯，并附上官方来源链接。",
    cta: { label: "前往知识中心" },
    intro: "用浅白的文字，整理马来西亚会计、税务和薪资方面的资讯。每篇文章都注明最后审阅日期，并附上官方来源链接。",
    allLabel: "全部主题",
    readLabel: "阅读全文",
    backLabel: "全部文章",
    publishedLabel: "发布",
    reviewedLabel: "最后审阅",
    emptyAll: "第一批文章正在准备中。在此之前，建议直接到下方的官方网站查询最新规定。",
    emptyTopic: "这个主题暂时还没有文章。建议直接到下方的官方网站查询最新规定。",
    sourcesTitle: "官方来源",
    sourcesIntro: "规定和税率会调整，请以这些官方网站的最新公布为准。",
    articleSourcesTitle: "本文资料来源",
    missing: "找不到这篇文章，可能已经移动或撤下。",
    draftLabel: "草稿，尚未发布",
    disclaimer: "以上仅为一般资讯，不构成税务、法律或专业意见。SBSES 不是税务代理，也不是审计公司。规定会调整，采取行动前请以官方来源为准，或咨询您的税务代理。"
  },

  contact: {
    title: "让您的账目，更简单。",
    whatsapp: {
      label: "WhatsApp 咨询",
      prefill: "您好 SBSES，我想了解你们的会计服务。"
    },
    email: {
      label: "电邮联系"
    },
    serviceArea: "古来至新山",
    serviceAreaPrefix: "服务地区：",
    pendingLabels: {
      whatsapp: "WhatsApp 号码",
      email: "电邮",
      serviceArea: "服务地区"
    }
  },

  notFound: {
    title: "找不到页面",
    text: "您要找的页面不在这里，可能已经移动，或者链接不完整。",
    action: { label: "返回首页" }
  },

  footer: {
    strapline: "自由职业会计 · 做账 · 薪资",
    privacy: { label: "隐私政策" },
    registrationPending: "TODO_OWNER: 注册资料"
  }
};
