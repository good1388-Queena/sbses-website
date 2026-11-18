/*
 * SBSES — Knowledge Centre content: topics, official links and articles (English + Chinese).
 *
 * HOW TO ADD AN ARTICLE
 *   Copy the example in `articles`, give it a new `slug` (lowercase letters, numbers, dashes),
 *   and fill in both languages. Newest first.
 *
 * RULES FOR EVERY ARTICLE
 *   - status "draft" keeps it hidden from visitors (viewable only with ?preview=1 in the
 *     address). Change to "published" only after the Owner has approved the text.
 *   - Anything about tax, SST, e-Invoice, EPF, SOCSO, EIS, PCB or HRDF must be checked against
 *     the official announcement on the day of writing, and that page must be listed in
 *     `sources`. Never write rates, thresholds or deadlines from memory.
 *   - `reviewed` is the date the facts were last checked against the sources.
 *   - General information only: no advice on what a particular business should do, and SBSES
 *     is never described as a tax agent, audit firm, or licensed / certified / chartered.
 *
 * BODY FORMAT
 *   A list. Plain text = a paragraph. { h: "…" } = a sub-heading. { list: ["…", "…"] } = bullets.
 */
window.SBSES_KNOWLEDGE = {
  topics: [
    {
      id: "income-tax",
      label: { en: "LHDN / Income Tax", zh: "LHDN / 所得税" },
      sources: [
        { label: { en: "Inland Revenue Board of Malaysia (LHDN / HASiL)", zh: "马来西亚内陆税收局（LHDN / HASiL）" }, url: "https://www.hasil.gov.my/" },
        { label: { en: "MyTax portal", zh: "MyTax 报税平台" }, url: "https://mytax.hasil.gov.my/" }
      ]
    },
    {
      id: "sst",
      label: { en: "SST", zh: "SST 销售与服务税" },
      sources: [
        { label: { en: "MySST (Royal Malaysian Customs Department)", zh: "MySST（马来西亚皇家关税局）" }, url: "https://mysst.customs.gov.my/" },
        { label: { en: "Royal Malaysian Customs Department", zh: "马来西亚皇家关税局" }, url: "https://www.customs.gov.my/" }
      ]
    },
    {
      id: "e-invoice",
      label: { en: "e-Invoice", zh: "e-Invoice 电子发票" },
      sources: [
        { label: { en: "LHDN e-Invoice information", zh: "LHDN 电子发票专页" }, url: "https://www.hasil.gov.my/e-invois/" },
        { label: { en: "MyInvois portal", zh: "MyInvois 平台" }, url: "https://myinvois.hasil.gov.my/" }
      ]
    },
    {
      id: "payroll-statutory",
      label: { en: "EPF / SOCSO / EIS / PCB / HRDF", zh: "EPF / SOCSO / EIS / PCB / HRDF" },
      sources: [
        { label: { en: "Employees Provident Fund (KWSP / EPF)", zh: "雇员公积金局（KWSP / EPF）" }, url: "https://www.kwsp.gov.my/" },
        { label: { en: "Social Security Organisation (PERKESO / SOCSO, EIS)", zh: "社会保险机构（PERKESO / SOCSO、EIS）" }, url: "https://www.perkeso.gov.my/" },
        { label: { en: "LHDN (PCB / monthly tax deduction)", zh: "LHDN（PCB 预扣税）" }, url: "https://www.hasil.gov.my/" },
        { label: { en: "HRD Corp (HRDF levy)", zh: "人力资源发展机构（HRD Corp）" }, url: "https://hrdcorp.gov.my/" }
      ]
    },
    {
      id: "guides",
      label: { en: "Accounting & Payroll Guides", zh: "会计与薪资指南" },
      sources: [
        { label: { en: "Companies Commission of Malaysia (SSM)", zh: "马来西亚公司委员会（SSM）" }, url: "https://www.ssm.com.my/" }
      ]
    }
  ],

  articles: [
    /*
     * Infographic articles added 2026-11-13. Images supplied by the Owner (made with Grok),
     * checked against the sources listed. Approved for publication by the Owner on 2026-11-13.
     * `image` is optional: { src, width, height, alt: { en, zh } }.
     */
    {
      slug: "cp500-missed-instalment-travel",
      topic: "income-tax",
      status: "published",
      published: "2026-11-13",
      reviewed: "2026-11-18",
      image: {
        src: "assets/img/knowledge/cp500-travel-restriction.jpg", width: 1080, height: 1440,
        alt: {
          en: "Infographic: a missed CP500 instalment does not by itself trigger a travel ban, but a 10% increase still applies.",
          zh: "图解：CP500 分期没缴不会因此被禁出国，但仍会被加征 10%。"
        }
      },
      title: {
        en: "CP500: a missed instalment does not by itself mean a travel ban",
        zh: "CP500 分期没缴，不会因此被禁止出国"
      },
      summary: {
        en: "What the Deputy Finance Minister told Parliament on 11 November 2026, and the penalties that still apply.",
        zh: "副财长 2026 年 11 月 11 日在国会的答复，以及仍然适用的罚款。"
      },
      body: {
        en: [
          "On 11 November 2026, Deputy Finance Minister Liew Chin Tong told the Dewan Rakyat that failing to pay CP500 instalments does not result in an overseas travel ban, because CP500 is not a final tax assessment. This article is based on news reports of that answer and on LHDN’s published information. It is a clarification, not a change in the law.",
          { h: "Why a missed instalment is not a tax debt yet" },
          { list: [
            "CP500 is an instalment notice based on an estimate.",
            "The actual tax is worked out when the income tax return is filed, and CP500 instalments already paid are deducted.",
            "Only if a balance remains after that, and is not paid by the deadline, does it become outstanding tax."
          ] },
          { h: "When a travel restriction can arise" },
          "According to the report, travel restrictions are applied by LHDN together with the Immigration Department against individuals or company directors who have outstanding tax, under section 104 of the Income Tax Act 1967 and section 22 of the Real Property Gains Tax Act 1976.",
          { h: "Penalties still apply" },
          { list: [
            "Instalments: LHDN’s offences and penalties page lists a 10% increase on instalments paid more than 30 days after the due date, under section 107B(3).",
            "Final tax: the same page lists a 10% increase on tax paid after 30 April (non-business income) or 30 June (business income), under section 103(3)."
          ] },
          { h: "Penalty exemption for year of assessment 2026" },
          "LHDN told The Star on 4 June 2026 that eligible taxpayers will not be penalised for year of assessment 2026 for failing to pay CP500 instalments on schedule. This covers individuals who have both employment income and other income such as rent, interest or royalties. It does not cover taxpayers whose income is entirely business, rental or other non-salaried income.",
          "To see where you stand, check MyTax or ask your tax agent."
        ],
        zh: [
          "2026 年 11 月 11 日，副财政部长刘镇东在下议院答复说，没有缴付 CP500 分期，不会导致被限制出国，因为 CP500 不是最终的税额评定。本文根据有关这项答复的新闻报道，以及 LHDN 公布的资料整理。这是一项澄清，法律本身没有改变。",
          { h: "为什么分期没缴还不算欠税" },
          { list: [
            "CP500 是按预估数额发出的分期缴税通知。",
            "实际税额要等提交所得税报税表之后才计算，已缴的 CP500 分期会从中扣除。",
            "重算之后仍有余额，而且过了期限还没缴，才算是拖欠税款。"
          ] },
          { h: "什么情况下才会被限制出境" },
          "根据报道，LHDN 会联同移民局，对拖欠税款的个人或公司董事实施出境限制，依据是《1967 年所得税法》第 104 条和《1976 年产业盈利税法》第 22 条。",
          { h: "罚款照样有" },
          { list: [
            "分期：LHDN 的「违例、罚款与处罚」页面列明，分期在到期日 30 天之后才缴，按第 107B(3) 条加征 10%。",
            "最终税款：同一页面列明，税款在 4 月 30 日（非生意收入）或 6 月 30 日（生意收入）之后才缴，按第 103(3) 条加征 10%。"
          ] },
          { h: "2026 课税年的罚款豁免" },
          "LHDN 在 2026 年 6 月 4 日回复《The Star》时说明，符合条件的纳税人在 2026 课税年没有按时缴付 CP500 分期，不会被罚。适用对象是同时有薪金收入和其他收入（例如租金、利息或版税）的个人。收入全部来自生意、租金或其他非薪金来源的纳税人不适用。",
          "想知道自己的情况，可以到 MyTax 查看，或咨询您的税务代理。"
        ]
      },
      sources: [
        { label: { en: "Malay Mail, 11 November 2026: report of the Dewan Rakyat answer", zh: "Malay Mail，2026 年 11 月 11 日：下议院答复的报道" }, url: "https://www.malaymail.com/news/malaysia/2026/11/11/taxpayers-behind-on-cp500-wont-be-barred-from-flying-yet-says-deputy-finance-minister/242800" },
        { label: { en: "The Star, 4 June 2026: LHDN on the CP500 penalty exemption", zh: "The Star，2026 年 6 月 4 日：LHDN 说明 CP500 罚款豁免" }, url: "https://www.thestar.com.my/news/nation/2026/06/04/lhdn-sheds-more-light-oncp500-penalty-exemption" },
        { label: { en: "LHDN: Offences, Fines and Penalties (Malay page, updated 25 June 2026)", zh: "LHDN：违例、罚款与处罚（马来文页面，2026 年 6 月 25 日更新）" }, url: "https://www.hasil.gov.my/perundangan/kesalahan-denda-dan-penalti/" }
      ]
    },
    {
      slug: "ssm-shareholder-share-capital-lodgement",
      topic: "guides",
      status: "published",
      published: "2026-11-13",
      reviewed: "2026-11-13",
      image: {
        src: "assets/img/knowledge/ssm-pd-11-2026.jpg", width: 1080, height: 1440,
        alt: {
          en: "Infographic: SSM Practice Directive 11/2026, lodge shareholder and share capital information by 14 January 2027.",
          zh: "图解：SSM Practice Directive 11/2026，股东与股本资料须在 2027 年 1 月 14 日前补交。"
        }
      },
      title: {
        en: "SSM: lodge shareholder and share capital information by 14 January 2027",
        zh: "SSM：股东与股本资料须在 2027 年 1 月 14 日前补交"
      },
      summary: {
        en: "Under SSM Practice Directive 11/2026, certain companies must lodge their shareholders’ and share capital information over the counter by 14 January 2027.",
        zh: "根据 SSM Practice Directive 11/2026，部分公司须在 2027 年 1 月 14 日前，到柜台补交股东与股本资料。"
      },
      body: {
        en: [
          "With the move to its new Corporate Registry System (CRS), SSM requires certain companies to update and lodge their members’ and share capital information. The points below are taken from Practice Directive No. 11/2026, as revised on 6 November 2026.",
          { h: "Who must lodge" },
          { list: [
            "A company with one class of share, multiple shareholders and multiple considerations (cash and otherwise than cash).",
            "A company with multiple classes of shares and multiple shareholders.",
            "Foreign companies."
          ] },
          "The Practice Directive does not apply to local public listed companies.",
          { h: "By when" },
          "Companies have six months, from 14 July 2026 to 14 January 2027, to lodge the information. The Registrar may extend this period if he considers it necessary.",
          { h: "How" },
          { list: [
            "Local companies use the forms in Annexure B. Foreign companies use Annexure C.",
            "Lodge over the counter at SSM’s Head Office or any SSM State Office.",
            "No fee is charged for this lodgement."
          ] },
          { h: "Do this first" },
          "SSM advises companies to complete this lodgement before making other updates, such as changes to the register of members, allotments of shares or changes to share capital.",
          "This lodgement is normally handled by your company secretary."
        ],
        zh: [
          "随着 SSM 改用新的 Corporate Registry System（CRS），部分公司需要更新并提交股东和股本资料。以下重点取自 Practice Directive No. 11/2026（2026 年 11 月 6 日修订版）。",
          { h: "哪些公司要办理" },
          { list: [
            "只有一种股份、有多名股东，而且股款同时包含现金和非现金对价的公司。",
            "有多种股份和多名股东的公司。",
            "外国公司。"
          ] },
          "这项指令不适用于本地上市公司。",
          { h: "期限" },
          "公司有六个月时间办理，从 2026 年 7 月 14 日到 2027 年 1 月 14 日。注册官认为有需要时，可以延长这段期限。",
          { h: "怎么办理" },
          { list: [
            "本地公司使用 Annexure B 的表格，外国公司使用 Annexure C。",
            "到 SSM 总部或任何一间州办事处的柜台提交。",
            "这项提交不收费。"
          ] },
          { h: "先办这一项" },
          "SSM 建议公司先完成这项补交，再办理其他更新，例如股东名册变更、配股或股本变更。",
          "这项提交通常由公司秘书办理。"
        ]
      },
      sources: [
        { label: { en: "SSM: Practice Directive No. 11/2026 (revised 6 November 2026, PDF)", zh: "SSM：Practice Directive No. 11/2026（2026 年 11 月 6 日修订，PDF）" }, url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/New%20PD%2011%202026%2031072026%20-%20updated%2005.08.2026.pdf" },
        { label: { en: "SSM: Corporate Registry System (CRS) page, with Annexure B and C", zh: "SSM：Corporate Registry System（CRS）页面，含 Annexure B 和 C" }, url: "https://www.ssm.com.my/Pages/Services/Other-Services/CRS.aspx" }
      ]
    },
    {
      slug: "monthly-employer-payments-15th",
      topic: "payroll-statutory",
      status: "published",
      published: "2026-11-13",
      reviewed: "2026-11-18",
      image: {
        src: "assets/img/knowledge/monthly-payments-15th.jpg", width: 1080, height: 1440,
        alt: {
          en: "Infographic: monthly employer payments due by the 15th of the following month: PCB, EPF, SOCSO, EIS and the HRD levy.",
          zh: "图解：雇主每月缴款须在次月 15 日前完成：PCB、EPF、SOCSO、EIS 和 HRDF 征费。"
        }
      },
      title: {
        en: "Monthly employer payments: due by the 15th",
        zh: "雇主每月缴款：次月 15 日前"
      },
      summary: {
        en: "PCB, EPF, SOCSO and EIS for each month’s wages are due by the 15th of the following month.",
        zh: "每个月薪金的 PCB、EPF、SOCSO 和 EIS，都要在下一个月的 15 日前缴付。"
      },
      body: {
        en: [
          "This is a standing monthly reminder, not a new rule. For each month’s wages, the payments below are due by the 15th of the following month.",
          { list: [
            "PCB (monthly tax deduction): LHDN requires employers to remit the amount deducted on or before the 15th day of the following month.",
            "EPF: contributions for a month’s wages must be paid on or before the 15th of the following month.",
            "SOCSO: PERKESO requires contributions for any month to be paid no later than the 15th day of the following month.",
            "EIS: paid to PERKESO on the same monthly schedule.",
            "HRD Corp levy: applies only to employers registered with HRD Corp. Its levy calculation guideline shows the same deadline, the 15th of the following month."
          ] },
          { h: "Example" },
          "For October wages, the payments above are due by 15 November.",
          { h: "If a payment is late" },
          "Each agency applies its own charge. The rules below are as published by the agencies. What is charged in a real case depends on how late the payment is and how much is outstanding.",
          { list: [
            "PCB: LHDN’s guideline GPHDN 1/2024 (paragraph 3.4) states that an employer who fails to comply with rule 10(1) of the MTD Rules commits an offence and, on conviction, can be fined between RM200 and RM20,000, imprisoned for up to six months, or both.",
            "EPF: a late payment charge at the lower of the Simpanan Konvensional and Simpanan Shariah dividend rates for that year, plus 1%. The minimum charge is RM10 and it is rounded up to the next ringgit. If the contribution is still unpaid after the month in which it was due, dividend is charged as well.",
            "EPF offences: failing to pay contributions by the 15th is an offence under section 43(2) of the EPF Act (up to three years’ imprisonment, a fine of up to RM10,000, or both). Deducting the employee’s share from wages and not paying it to EPF is a separate, heavier offence under section 48(3) (up to six years’ imprisonment, a fine of up to RM20,000, or both).",
            "SOCSO: interest at 6% a year for each day the contribution remains unpaid.",
            "EIS: interest at 6% a year for each day of delay. For each employee, interest of less than RM5 is charged as RM5 for each month or part of a month; above RM5 it is rounded up to the next multiple of RM5.",
            "HRD Corp levy: interest at 10% a year, calculated as arrears × 10% × days late ÷ 365, with a minimum of RM5."
          ] },
          { h: "If the 15th is a weekend or public holiday" },
          "KWSP states that when the 15th falls on a public holiday or weekend, an EPF payment made on the next working day is not charged the late payment charge. This is EPF’s rule. The pages of the other agencies listed below do not say the same, so the safe course is to pay before the 15th."
        ],
        zh: [
          "这是每个月固定的提醒，不是新规定。每个月薪金所涉及的以下缴款，都要在下一个月的 15 日前完成。",
          { list: [
            "PCB（每月预扣税）：LHDN 规定，雇主须在下一个月的 15 日或之前，把扣下的税款缴给 LHDN。",
            "EPF 公积金：每个月薪金的供款，须在下一个月的 15 日或之前缴付。",
            "SOCSO 社会保险：PERKESO 规定，每个月的供款最迟须在下一个月的 15 日缴付。",
            "EIS 就业保险：按同样的每月时间表缴给 PERKESO。",
            "HRD Corp 征费：只适用于已向 HRD Corp 注册的雇主。它的征费计算指南写明同样的期限：下一个月的 15 日或之前。"
          ] },
          { h: "例子" },
          "10 月份薪金的上述缴款，须在 11 月 15 日前完成。",
          { h: "迟交的后果" },
          "各机构有各自的收费方式。以下是各机构公布的规定，实际收多少，要看迟了多久、欠多少。",
          { list: [
            "PCB：LHDN 的指南 GPHDN 1/2024（第 3.4 段）写明，雇主不遵守《预扣税规则》第 10(1) 条属于违例，一经定罪，可被罚款 RM200 至 RM20,000，或监禁不超过六个月，或两者兼施。",
            "EPF：迟交收费的利率，是当年 Simpanan Konvensional 与 Simpanan Shariah 两者中较低的股息率，再加 1%。最低收 RM10，并进位到整数令吉。如果过了应缴的那个月仍未缴，还要另外补缴股息。",
            "EPF 的违例：没有在 15 日或之前缴供款，属于《公积金法令》第 43(2) 条的违例（监禁不超过三年，或罚款不超过 RM10,000，或两者兼施）。已从雇员薪金扣了雇员的份额却没有缴给 EPF，是另一项更重的违例，属于第 48(3) 条（监禁不超过六年，或罚款不超过 RM20,000，或两者兼施）。",
            "SOCSO：按年利率 6%，以未缴的天数逐日计息。",
            "EIS：按年利率 6%，以延迟的天数逐日计息。按每名雇员计算，利息不足 RM5 的，每个月（不足一个月也算一个月）收 RM5；超过 RM5 的，进位到 RM5 的倍数。",
            "HRD Corp 征费：按年利率 10% 计息，算法是欠款 × 10% × 迟交天数 ÷ 365，最低收 RM5。"
          ] },
          { h: "15 日适逢周末或公共假期" },
          "KWSP 说明，15 日适逢公共假期或周末时，在下一个工作日缴付的 EPF 供款不会被收迟交费。这是 EPF 的规定。下面列出的其他机构页面没有同样的说法，所以稳妥的做法仍是赶在 15 日前缴款。"
        ]
      },
      sources: [
        { label: { en: "LHDN: Employer’s Responsibilities (PCB / MTD)", zh: "LHDN：雇主的责任（PCB 预扣税）" }, url: "https://www.hasil.gov.my/en/majikan/tanggungjawab-majikan/" },
        { label: { en: "KWSP: Employer Mandatory Contribution", zh: "KWSP：雇主强制供款" }, url: "https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution" },
        { label: { en: "PERKESO: Contribution Payment", zh: "PERKESO：供款缴付" }, url: "https://www.perkeso.gov.my/en/contribution-payment.html" },
        { label: { en: "LHDN: GPHDN 1/2024, Monthly Tax Deduction under the MTD Rules, paragraph 3.4 (PDF, in Malay)", zh: "LHDN：GPHDN 1/2024《预扣税规则下的每月预扣税》第 3.4 段（PDF，马来文）" }, url: "https://www.hasil.gov.my/wp-content/uploads/20240102-gpo-1-2024-potongan-cukai-bulanan-di-bawah-kaedah-kaedah-cukai-pendapatan-potongan-daripada-saraan-1994.pdf" },
        { label: { en: "KWSP: Compliance & Enforcement (sections 43(2) and 48(3))", zh: "KWSP：合规与执法（第 43(2) 和 48(3) 条）" }, url: "https://www.kwsp.gov.my/en/employer/responsibilities/compliance" },
        { label: { en: "KWSP: Contribution Payment Channels, FAQ (15th on a holiday or weekend; dividend on arrears)", zh: "KWSP：供款缴付渠道的常见问答（15 日适逢假期或周末；欠款的股息）" }, url: "https://www.kwsp.gov.my/en/employer/responsibilities/payments" },
        { label: { en: "HRD Corp Support Centre: Levy Payment (interest on arrears)", zh: "HRD Corp 支援中心：征费缴付（欠款利息）" }, url: "https://supportcentre.hrdcorp.gov.my/portal/en/kb/articles/hrd-levy-payment" },
        { label: { en: "Employment Insurance System (Registration and Contribution) Regulations 2017, P.U.(A) 452, regulations 9(1) and 10 (PDF on PERKESO’s site)", zh: "《2017 年就业保险制度（注册与缴款）条例》P.U.(A) 452 第 9(1) 和第 10 条（PERKESO 网站上的 PDF）" }, url: "https://www.perkeso.gov.my/images/akta/ACT%20800/P.U(A)/P.U.%20(A)%20452%20-%20PP%20SIP%20(Pendaftaran%20dan%20Caruman)%202017_PERATURAN-PERATURAN%20SISTEM%20INSURANS%20PEKERJAAN%20(PENDAFTARAN%20DAN%20CARUMAN)%202017.pdf" },
        { label: { en: "HRD Corp Support Centre: Levy Calculation Guideline", zh: "HRD Corp 支援中心：征费计算指南" }, url: "https://supportcentre.hrdcorp.gov.my/portal/en/kb/articles/hrd-levy" }
      ]
    },
    /*
     * Written 2026-11-13 from the official pages listed in each `sources`.
     * Approved for publication by the Owner on 2026-11-13.
     * When the rules change: re-read the sources, update the text and the `reviewed` date.
     */
    {
      slug: "e-invoice-timeline-and-exemption",
      topic: "e-invoice",
      status: "published",
      published: "2026-11-13",
      reviewed: "2026-11-13",
      title: {
        en: "e-Invoice: who must start, and when",
        zh: "e-Invoice 电子发票：谁需要实施，什么时候开始"
      },
      summary: {
        en: "LHDN’s phased timeline for mandatory e-Invoicing, the RM3 million exemption and the cases where it does not apply.",
        zh: "LHDN 分阶段强制实施电子发票的时间表、RM300 万豁免线，以及不能享有豁免的情况。"
      },
      body: {
        en: [
          "Malaysia is moving businesses to e-Invoicing in phases. Which phase a business falls into depends on its annual turnover or revenue. The points below are taken from LHDN’s e-Invoice Guideline (Version 4.8, published 30 August 2026) and its implementation timeline page.",
          { h: "The timeline" },
          { list: [
            "Annual turnover or revenue of more than RM100 million: from 1 August 2024.",
            "More than RM25 million and up to RM100 million: from 1 January 2025.",
            "More than RM5 million and up to RM25 million: from 1 July 2025.",
            "Up to RM5 million: from 1 January 2026."
          ] },
          "Read together with the exemption below, the last band covers businesses from RM3 million up to RM5 million.",
          { h: "How turnover is measured" },
          { list: [
            "With audited financial statements: the turnover or revenue in the audited statements for financial year 2022.",
            "Without audited financial statements: the revenue reported in the tax return for year of assessment 2022.",
            "Once the implementation date has been determined this way, later changes in turnover do not change it."
          ] },
          { h: "Who is exempted" },
          "Taxpayers with an annual turnover or revenue of less than RM3,000,000 are exempted from issuing e-Invoices. The Guideline says this applies to all categories of taxpayers, such as individuals, partnerships, companies and co-operatives.",
          "The exemption does not apply where the taxpayer:",
          { list: [
            "has a non-individual shareholder (or equivalent) with annual turnover or revenue of at least RM3,000,000; or",
            "is a subsidiary of a holding company with annual turnover or revenue of at least RM3,000,000; or",
            "has a related company or joint venture with annual turnover or revenue of at least RM3,000,000."
          ] },
          "Suppliers who sell to an exempted business still issue e-Invoices according to their own implementation date. LHDN also states that the exemptions will be reviewed from time to time.",
          { h: "New businesses" },
          { list: [
            "Started between 2023 and 2025, with annual turnover or revenue of at least RM3,000,000: from 1 July 2026.",
            "Starting from 2026 onwards: from 1 July 2026, or from the date operations start.",
            "If first-year turnover is expected to be below RM3,000,000: from 1 January of the second year after the year in which annual turnover reaches RM3,000,000."
          ] },
          { h: "What a business can do now" },
          { list: [
            "Compare last year’s turnover with the bands above.",
            "If you are within scope, ask your accounting software provider how it works with LHDN’s MyInvois Portal.",
            "Keep sales and customer records tidy, since e-Invoices are issued from them.",
            "Invoices issued before your implementation date do not need to be converted into e-Invoices. A business may also start earlier voluntarily."
          ] }
        ],
        zh: [
          "马来西亚正分阶段让企业改用电子发票（e-Invoice）。企业属于哪个阶段，取决于全年营业额或收入。以下内容取自 LHDN 的《e-Invoice Guideline》（第 4.8 版，2026 年 8 月 30 日发布）和实施时间表网页。",
          { h: "实施时间表" },
          { list: [
            "全年营业额或收入超过 RM1 亿：2024 年 8 月 1 日起。",
            "超过 RM2,500 万至 RM1 亿：2025 年 1 月 1 日起。",
            "超过 RM500 万至 RM2,500 万：2025 年 7 月 1 日起。",
            "RM500 万或以下：2026 年 1 月 1 日起。"
          ] },
          "结合下面的豁免规定来看，最后一级适用于营业额 RM300 万至 RM500 万的企业。",
          { h: "营业额怎么计算" },
          { list: [
            "有审计财务报表的：以 2022 财政年度审计报表上的营业额或收入为准。",
            "没有审计财务报表的：以 2022 课税年报税表上申报的收入为准。",
            "实施日期按这个方法确定之后，往后营业额的变动不会改变它。"
          ] },
          { h: "谁可以豁免" },
          "全年营业额或收入低于 RM3,000,000 的纳税人，豁免开具电子发票。指南说明，这项豁免适用于所有类别的纳税人，例如个人、合伙、公司和合作社。",
          "但有以下情况的纳税人不能享有豁免：",
          { list: [
            "有非个人股东（或同等身份者），而该股东的全年营业额或收入达到 RM3,000,000 或以上；或",
            "是某控股公司的子公司，而该控股公司的全年营业额或收入达到 RM3,000,000 或以上；或",
            "有关联公司或联营项目，其全年营业额或收入达到 RM3,000,000 或以上。"
          ] },
          "向获豁免的企业供货的供应商，仍须按照自己的实施日期开具电子发票。LHDN 也说明，豁免规定会不时检讨。",
          { h: "新成立的企业" },
          { list: [
            "2023 至 2025 年开业，全年营业额或收入达到 RM3,000,000 或以上：2026 年 7 月 1 日起。",
            "2026 年起开业：2026 年 7 月 1 日起，或自开始营运之日起。",
            "如果预计第一年营业额低于 RM3,000,000：从全年营业额达到 RM3,000,000 那一年之后的第二年 1 月 1 日起。"
          ] },
          { h: "企业现在可以做什么" },
          { list: [
            "把去年的营业额对照上面的级距。",
            "如果在实施范围内，向会计软件供应商了解软件如何配合 LHDN 的 MyInvois Portal。",
            "把销售和客户记录整理好，因为电子发票是根据这些记录开出的。",
            "实施日期之前开出的发票，不需要转换成电子发票。企业也可以自愿提前实施。"
          ] }
        ]
      },
      sources: [
        { label: { en: "LHDN: e-Invoice Guideline, Version 4.8 (30 August 2026), sections 1.5 and 1.6 (PDF)", zh: "LHDN：《e-Invoice Guideline》第 4.8 版（2026 年 8 月 30 日），第 1.5 和 1.6 节（PDF）" }, url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf" },
        { label: { en: "LHDN: e-Invoice Implementation Timeline (last updated 30 August 2026)", zh: "LHDN：e-Invoice 实施时间表（最后更新 2026 年 8 月 30 日）" }, url: "https://www.hasil.gov.my/en/e-invois/pelaksanaan-e-invois-di-malaysia/garis-masa-pelaksanaan-e-invois/" },
        { label: { en: "LHDN: MyInvois Portal", zh: "LHDN：MyInvois Portal" }, url: "https://myinvois.hasil.gov.my/" }
      ]
    },
    {
      slug: "epf-non-malaysian-employees",
      topic: "payroll-statutory",
      status: "published",
      published: "2026-11-13",
      reviewed: "2026-11-13",
      title: {
        en: "EPF contributions for non-Malaysian employees",
        zh: "外籍员工的 EPF 公积金缴纳"
      },
      summary: {
        en: "Since October 2025 wages, employers and their non-Malaysian employees each contribute 2% to the EPF. What employers need to know.",
        zh: "从 2025 年 10 月的薪金起，雇主和外籍员工各缴 2% 公积金。雇主需要知道的重点。"
      },
      body: {
        en: [
          "Since the October 2025 salary month, EPF contributions are mandatory for non-Malaysian citizen employees. The points below are taken from the EPF’s (KWSP) guidance for employers and its announcement of 1 October 2025.",
          { h: "Who is covered" },
          { list: [
            "Non-Malaysian citizen employees below 75 years of age who hold a valid passport and work pass.",
            "Domestic servants are excluded. The EPF gives maids, cooks, gardeners, cleaners, babysitters and drivers as examples.",
            "Permanent residents are not part of this 2% arrangement. The EPF explains that they already contribute at the same rates as Malaysian citizens."
          ] },
          { h: "How much" },
          { list: [
            "Employer’s share: 2% of monthly wages.",
            "Employee’s share: 2% of monthly wages. The employer may deduct this from the employee’s salary.",
            "For contribution purposes, the amount must be calculated on at least the minimum wage rate under the current Minimum Wages Order."
          ] },
          { h: "When to pay" },
          "Contributions for a month’s wages must be paid on or before the 15th of the following month. The employer pays both shares to the EPF, in whole ringgit with no sen.",
          { h: "Registration" },
          { list: [
            "Employers who are not yet registered with the EPF need to register.",
            "Holders of a Visitor’s Pass (Temporary Employment) or an Employment Pass are registered as EPF members automatically. Employers can check the registration in i-Akaun (Employer).",
            "Holders of other passes are registered at an EPF office."
          ] }
        ],
        zh: [
          "从 2025 年 10 月的薪金起，非马来西亚公民员工必须缴纳 EPF 公积金。以下重点取自 EPF（KWSP）给雇主的说明，以及它在 2025 年 10 月 1 日发布的文告。",
          { h: "适用对象" },
          { list: [
            "75 岁以下、持有有效护照和工作准证的非马来西亚公民员工。",
            "家庭佣工不包括在内。EPF 举的例子有女佣、厨师、园丁、清洁工、保姆和司机。",
            "永久居民不适用这项 2% 的安排。EPF 说明，他们本来就按照与马来西亚公民相同的缴纳率供款。"
          ] },
          { h: "缴纳率" },
          { list: [
            "雇主部分：月薪的 2%。",
            "雇员部分：月薪的 2%，雇主可以从雇员薪金中扣除。",
            "计算供款时，金额至少要以现行最低薪金令规定的最低薪金为基础。"
          ] },
          { h: "缴纳期限" },
          "每个月薪金的供款，必须在下一个月的 15 日或之前缴付。雇主要把雇主和雇员两部分一并缴给 EPF，金额以整数令吉计算，不带仙。",
          { h: "登记" },
          { list: [
            "还没有向 EPF 登记的雇主，需要先办理登记。",
            "持有 Visitor’s Pass (Temporary Employment) 或 Employment Pass 的员工，会自动登记为 EPF 会员。雇主可以在 i-Akaun (Employer) 查看登记情况。",
            "持有其他准证的员工，需要到 EPF 办事处办理登记。"
          ] }
        ]
      },
      sources: [
        { label: { en: "KWSP: Contribution for Non-Malaysian Citizen Employees", zh: "KWSP：非马来西亚公民员工的供款说明" }, url: "https://www.kwsp.gov.my/en/employer/responsibilities/non-malaysian-citizen-employees" },
        { label: { en: "KWSP announcement, 1 October 2025", zh: "KWSP 文告，2025 年 10 月 1 日" }, url: "https://www.kwsp.gov.my/en/w/news/epf-begins-mandatory-contributions-for-non-malaysian-citizen-employees-effective-october-2025" }
      ]
    },
    {
      slug: "sst-changes-july-2025",
      topic: "sst",
      status: "published",
      published: "2026-11-13",
      reviewed: "2026-11-13",
      title: {
        en: "SST changes since 1 July 2025: a summary",
        zh: "2025 年 7 月 1 日起的 SST 调整：重点整理"
      },
      summary: {
        en: "Sales Tax rates were revised and Service Tax was extended to more services from 1 July 2025. A summary of the Ministry of Finance announcements.",
        zh: "2025 年 7 月 1 日起，销售税税率调整，服务税扩大到更多服务。以下整理财政部的两份文告。"
      },
      body: {
        en: [
          "From 1 July 2025 the Government revised Sales Tax rates and widened the scope of Service Tax. This summary is based on the Ministry of Finance’s press releases of 9 June and 27 June 2025. Detailed rules have been amended several times since, so treat it as a starting point only.",
          { h: "Sales Tax" },
          { list: [
            "Essential goods: the rate is unchanged.",
            "Discretionary and non-essential goods: 5% or 10%.",
            "Imported apples, oranges, mandarin oranges and dates were exempted."
          ] },
          { h: "Service Tax: services added" },
          { list: [
            "Leasing or rental.",
            "Construction.",
            "Financial services.",
            "Private healthcare.",
            "Education."
          ] },
          "Beauty services were in the first announcement but were dropped before the changes took effect. The Ministry also said the expansion comes with targeted exemptions, including for certain essential services used by Malaysian citizens.",
          { h: "Rates and thresholds in the announcements" },
          { list: [
            "Leasing or rental: 8%, with a registration threshold of RM1 million.",
            "Financial services: 8% on fee or commission based services, with a registration threshold of RM1 million."
          ] },
          "The figures for construction, private healthcare and education are in the appendix to the announcement and in the Customs Department’s guides. They are not repeated here.",
          { h: "Transition period" },
          "For businesses taking steps to comply, the Ministry said no prosecution or penalties would be imposed until 31 December 2025. That period has ended.",
          { h: "Later changes" },
          "The Customs Department has continued to issue amendments, including service tax policies and an amended guide on construction work services published in November 2026. Check MySST for the current position before acting."
        ],
        zh: [
          "从 2025 年 7 月 1 日起，政府调整了销售税税率，并扩大服务税的征税范围。本文根据财政部 2025 年 6 月 9 日和 6 月 27 日的两份文告整理。之后细则又经过多次修订，本文只能作为入门参考。",
          { h: "销售税（Sales Tax）" },
          { list: [
            "基本必需品：税率不变。",
            "非必需品：5% 或 10%。",
            "进口苹果、橙、柑和椰枣获得豁免。"
          ] },
          { h: "服务税（Service Tax）：新增的服务" },
          { list: [
            "租赁或出租。",
            "建筑。",
            "金融服务。",
            "私人医疗保健。",
            "教育。"
          ] },
          "美容服务原本列在第一份文告里，但在措施生效前已被取消。财政部也说明，这次扩大范围附带针对性的豁免，包括马来西亚公民使用的某些基本服务。",
          { h: "文告中列出的税率和门槛" },
          { list: [
            "租赁或出租：8%，注册门槛为 RM100 万。",
            "金融服务：对收取费用或佣金的服务征收 8%，注册门槛为 RM100 万。"
          ] },
          "建筑、私人医疗保健和教育的具体数字，载于文告的附录和关税局的指南，本文不重复列出。",
          { h: "过渡期" },
          "财政部当时表示，对于已着手遵守规定的企业，在 2025 年 12 月 31 日之前不会提控或罚款。这段过渡期已经结束。",
          { h: "之后的修订" },
          "关税局之后陆续发布修订，包括多项服务税政策，以及 2026 年 11 月发布的建筑工程服务指南修订版。采取行动前，请到 MySST 查看最新规定。"
        ]
      },
      sources: [
        { label: { en: "Ministry of Finance press release, 9 June 2025", zh: "财政部文告，2025 年 6 月 9 日" }, url: "https://www.mof.gov.my/portal/en/news/press-release/targeted-revision-of-sales-tax-rate-and-expansion-of-service-tax-scope-effective-1-july-2025" },
        { label: { en: "Ministry of Finance press release, 27 June 2025", zh: "财政部文告，2025 年 6 月 27 日" }, url: "https://www.mof.gov.my/portal/en/news/press-release/revision-to-the-expanded-sales-tax-and-service-tax-take-into-account-public-and-industry-feedback" },
        { label: { en: "MySST (Royal Malaysian Customs Department): latest announcements", zh: "MySST（马来西亚皇家关税局）：最新公告" }, url: "https://mysst.customs.gov.my/" }
      ]
    },
    {
      slug: "monthly-bookkeeping-checklist",
      topic: "guides",
      status: "published",
      published: "2026-11-13",
      reviewed: "2026-11-13",
      title: {
        en: "What to prepare for monthly bookkeeping",
        zh: "每月做账，需要准备哪些资料"
      },
      summary: {
        en: "A simple checklist of the records to gather each month so your books can be kept up to date.",
        zh: "一份简单的清单，列出每个月要收集的记录，让账目能及时更新。"
      },
      body: {
        en: [
          "Monthly bookkeeping goes smoothly when the same set of records arrives at the same time each month. This checklist covers what is usually needed. Your own list may be shorter or longer, depending on how your business runs.",
          { h: "Records to gather" },
          { list: [
            "Bank statements for every business account, covering the full month.",
            "Sales invoices issued, with a note of which ones have been paid.",
            "Supplier invoices, bills and receipts for the month’s purchases and expenses.",
            "Payroll records: salaries, allowances and statutory contributions paid.",
            "Statements for loans, hire purchase and credit cards used for the business.",
            "Petty cash records and receipts."
          ] },
          { h: "Before you send" },
          { list: [
            "Check that each bank statement runs from the first to the last day of the month.",
            "Name files clearly, for example by month and document type.",
            "Point out anything unusual, such as a personal expense paid from the business account."
          ] },
          { h: "Sending records safely" },
          "These records contain sensitive information. Send them only through the private channel agreed with SBSES, never through a public form or a first enquiry message."
        ],
        zh: [
          "每个月在固定时间交齐同一批记录，做账就会顺利得多。这份清单列出通常需要的资料；实际清单会按您公司的运作方式增减。",
          { h: "要收集的记录" },
          { list: [
            "每一个公司银行户口的月结单，涵盖整个月份。",
            "当月开出的销售发票，并注明哪些已经收款。",
            "当月采购和开销的供应商发票、账单和收据。",
            "薪资记录：薪金、津贴，以及已缴的法定供款。",
            "公司贷款、分期付款和信用卡的结单。",
            "零用金的记录和收据。"
          ] },
          { h: "发送之前" },
          { list: [
            "确认每份银行月结单都从当月第一天到最后一天。",
            "文件名称写清楚，例如按月份和文件类型命名。",
            "有特别情况请注明，例如用公司户口支付了私人开销。"
          ] },
          { h: "安全地传送资料" },
          "这些记录含有敏感资料。请只通过与 SBSES 约定的私人渠道传送，不要通过公开表单或首次询问的讯息发送。"
        ]
      },
      sources: []
    }
  ]
};
