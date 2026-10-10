import type { Metadata } from "next";
import { CaseShell, CaseSection, CaseTable } from "@/components/case/CaseShell";

export const metadata: Metadata = {
  title: "GrowthGym Case — 补贴策略上秤的 Agent 道场",
  description:
    "为什么做 GrowthGym：三层架构（Gym/Tool/Agent）、IP 对贪心 4.1 倍的排行榜、被评估防线抓住的求解器 bug。",
};

export default function GrowthGymCase() {
  return (
    <CaseShell
      index="— 02"
      title={
        <>
          GrowthGym：
          <br />
          给补贴策略造一杆秤。
        </>
      }
      summary="市面上的 growth agent 在让 LLM 编策略故事；GrowthGym 让策略上秤——自带真值的仿真环境、真算法工具层、四角色 Agent 流水线，和一条任何人都能复现的排行榜。"
      metrics={[
        { k: "IP 相对贪心提升", v: "4.1×" },
        { k: "单元测试", v: "11 项" },
        { k: "regret（含估计误差）", v: "23.4%" },
        { k: "仿真规模", v: "3×50k 用户" },
      ]}
      liveHref="https://github.com/Ming-H/growth-gym"
      liveLabel="github.com/Ming-H/growth-gym"
    >
      <CaseSection no="01" title="为什么做这个">
        <p>
          我做了九年增长算法——补贴、因果推断、计算广告。这个领域有个长期痛点：<b style={{ color: "var(--ink)" }}>策略方法论没有开源参考实现</b>。
          论文里的 uplift 模型和整数规划落到业务里长什么样，网上找不到一个能跑的完整答案。
        </p>
        <p>
          AI 火起来之后，痛点换了形态：大量「AI 增长 agent」项目让 LLM
          编一份听起来漂亮的策略报告——没有真值、没有约束、没有后果，<b style={{ color: "var(--ink)" }}>策略不上秤</b>。
          我想证明另一条路：LLM 负责编排，真算法负责求解，环境负责说真话。
        </p>
      </CaseSection>

      <CaseSection no="02" title="三层架构">
        <p>
          <b style={{ color: "var(--ink)" }}>Gym 层</b>——合成用户总体：5 个人群分段 × 饱和响应曲线（边际效益递减）×
          观测噪声。pilot 实验返回带噪声的采样结果，策略必须扛过统计噪声；计分用期望值，结果精确可复现。
        </p>
        <p>
          <b style={{ color: "var(--ink)" }}>Tool 层</b>——LLM 编排真算法而非替代真算法：T-learner uplift
          建模（HistGradientBoosting 双模型）、PuLP + HiGHS 整数规划、统计功效计算、按 ACI
          标准写的工具注册中心（入参错误返回自修复信息而非栈回溯）。
        </p>
        <p>
          <b style={{ color: "var(--ink)" }}>Agent 层</b>——Strategist → Analyst → Optimizer → Evaluator
          状态机。固定阶段的 workflow + 一条评审回环（Evaluator 打回最多一次）：任务可拆就用
          workflow，别为 autonomy 付不可控的代价。默认 heuristic 模式零 API key 可跑，LLM
          模式把每个角色的决策换成模型调用，图结构不变。
        </p>
      </CaseSection>

      <CaseSection no="03" title="排行榜说了什么">
        <p>
          公平规则：所有非 oracle 策略只看 pilot 实验数据，从不见真值。3 个种子 × 50,000 用户 × 5
          分段，预算 ¥180k——紧张到连「人人 ¥5」都发不起。
        </p>
        <CaseTable
          head={["strategy", "incrGMV(¥)", "ROI", "budget%", "regret%"]}
          rows={[
            ["random", "24,698", "1.00", "14%", "91.5"],
            ["uniform", "0", "-", "0%", "100.0"],
            ["greedy(pilot)", "53,785", "0.46", "65%", "81.3"],
            ["ip(pilot)", "220,592", "1.26", "97%", "23.4"],
            ["agent(full)", "220,592", "1.26", "97%", "23.4"],
            ["oracle(true)", "287,952", "1.65", "97%", "0.0"],
          ]}
        />
        <p>
          三个读数：<b style={{ color: "var(--ink)" }}>① IP 对贪心 4.1 倍</b>——预算紧张 + 响应饱和时，逐段最优的贪心组合远劣于全局最优，这正是要上整数规划的理由；
          <b style={{ color: "var(--ink)" }}>② agent 与 IP 同分</b>——heuristic 模式下 Agent 就是「实验→估计→优化」的忠实编排；
          <b style={{ color: "var(--ink)" }}>③ 23.4% regret 全部来自估计误差</b>——oracle 与 IP 的唯一区别是真值 vs pilot 估计，改进空间摆在台面上，这正是增长团队每天面对的真实约束。
        </p>
      </CaseSection>

      <CaseSection no="04" title="被排行榜抓住的 bug">
        <p>
          开发期 IP 组一度<b style={{ color: "var(--ink)" }}>低于</b>贪心组。排查发现两层问题：① PuLP 的{" "}
          <code style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent)" }}>prob += (expr, &quot;name&quot;)</code>{" "}
          元组语法会把目标函数静默变成约束，求解器没有目标就返回任意可行解；② 修正后，macOS/arm64
          上自带的 CBC 二进制在<b style={{ color: "var(--ink)" }}>正确的模型上</b>仍返回次优解并报告 Optimal。
        </p>
        <p>
          最终解法：HiGHS（进程内）为主、CBC 兜底，并留下玩具用例的单测锁定正确性。这个故事的真正主角是「评估内建」——
          <b style={{ color: "var(--ink)" }}>「IP 必须赢 greedy」这道防线真实抓住过这个 bug</b>。没有它，这个 bug
          会安静地活在仓库里。
        </p>
      </CaseSection>

      <CaseSection no="05" title="什么值得偷">
        <p>
          · 把「评估」做成仓库的一等公民：改任何代码，一条命令验证核心结论仍然成立。<br />
          · 公平比较规则显式写进排行榜：信息不对称的美化在这里是作弊。<br />
          · LLM 的位置想清楚再上：可分解的固定阶段用 workflow，评审回环给独立怀疑者，模型每代都在变，架构要能活过任何一版实现。
        </p>
      </CaseSection>
    </CaseShell>
  );
}
