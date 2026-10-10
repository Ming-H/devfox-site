import type { Metadata } from "next";
import { CaseShell, CaseSection, CaseTable } from "@/components/case/CaseShell";

export const metadata: Metadata = {
  title: "灯塔 Lighthouse Case — A 股投资辅助终端",
  description:
    "为什么做灯塔：新闻联播宏观信号 × CAN SLIM 全市场打分 × 资金流向，每个交易日自动运转 120+ 期的决策辅助终端。",
};

export default function LighthouseCase() {
  return (
    <CaseShell
      index="— 01"
      title={
        <>
          灯塔 Lighthouse：
          <br />
          每个交易日出门前的五分钟。
        </>
      }
      summary="A 股的信息噪音在于：宏观信号散落在新闻联播里，个股判断淹没在几千份涨跌里。灯塔把它们压成一屏——CAN SLIM × 静水方法论（对标 IBD 体系），每个交易日自动更新，已存档 120+ 期。"
      metrics={[
        { k: "每日存档期数", v: "120+" },
        { k: "更新频率", v: "每交易日" },
        { k: "打分范围", v: "全市场" },
        { k: "方法论", v: "CAN SLIM × 静水" },
      ]}
      liveHref="https://ming-h.github.io/lighthouse/"
      liveLabel="ming-h.github.io/lighthouse"
    >
      <CaseSection no="01" title="为什么做这个">
        <p>
          个人投资者的日常困境不是没有信息，而是信息没有<b style={{ color: "var(--ink)" }}>结构</b>：新闻联播里的宏观取向、板块资金的一日游走、几千只股票的技术形态——它们本该互相印证，实际上散落在十几个入口。
        </p>
        <p>
          我要的是一个「出门前五分钟」的终端：大势怎么看、钱在往哪流、哪些票符合体系、历史上这个信号靠不靠谱——一屏给完，每个交易日自动运转。<b style={{ color: "var(--ink)" }}>辅助决策，不代决策</b>。
        </p>
      </CaseSection>

      <CaseSection no="02" title="四个板块，一条决策动线">
        <CaseTable
          head={["板块", "回答什么", "怎么做"]}
          rows={[
            ["投资工作台", "今天大势与主线", "灯塔信号（M/S/E 分级）+ 板块景气 + TOP20 排行体检 + 命中回看"],
            ["涨幅榜", "谁在走强", "近一月涨幅榜，笑傲股市 L+N+S 看图体系"],
            ["新闻存档", "政策面在说什么", "新闻联播逐日存档，自动提取经济相关条目（如 16 条中的 8 条）"],
            ["资金流向", "钱往哪流", "行业/概念流入流出榜，大小单分解，个股主力资金"],
          ]}
        />
        <p>
          核心打分逻辑是 CAN SLIM 七要素——每一只票得到一个「灯塔分」（0–100），配合今日信号分级：
          M（大势，观望/进攻）、S（供给需求）、E（催化剂）。<b style={{ color: "var(--ink)" }}>每期存档都可回看</b>，说对了错了都有据可查，这是编年史的意义。
        </p>
      </CaseSection>

      <CaseSection no="03" title="方法论 → 技能 → 产品">
        <p>
          灯塔不是凭空写的。它的判断体系沉淀在同源的 Claude Code 技能里：
          <a href="https://github.com/Ming-H/jingshui" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: 14 }}> jingshui</a>（静水投资方法论）、
          <a href="https://github.com/Ming-H/can-slim" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: 14 }}> can-slim</a>（七要素选股）、
          <a href="https://github.com/Ming-H/lynch" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: 14 }}> lynch</a>（彼得·林奇体系）、
          <a href="https://github.com/Ming-H/hithink-moneyflow" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: 14 }}> hithink-moneyflow</a>（资金流向）。
        </p>
        <p>
          这条链路是 DevFox 的标准生产方式：<b style={{ color: "var(--ink)" }}>先把方法论做成可复用的技能，再把技能编排成每天运转的产品</b>。方法论改了，技能改一处，产品跟着长。
        </p>
      </CaseSection>

      <CaseSection no="04" title="运转中的诚实边界">
        <p>
          · 灯塔<b style={{ color: "var(--ink)" }}>不预测涨跌</b>——它给的是体系化的自查清单和证据摘要，最终扣扳机的永远是持枪的人。<br />
          · 每期内容<b style={{ color: "var(--ink)" }}>落库存档</b>：信号对了错了都可回溯，用「命中回看」而不是「事后诸葛」建立信任。<br />
          · 120+ 期从未断更的意义不在坚持，而在<b style={{ color: "var(--ink)" }}>自动化管线的可靠性</b>——这本身就是一次工程交付。
        </p>
      </CaseSection>
    </CaseShell>
  );
}
