import React, { useState, useEffect } from 'react';
import { Play, Pause, RefreshCw, CheckCircle2, AlertCircle, Clock, Terminal, Shield, Zap, Search, Eye } from 'lucide-react';

export const QualityInterface = () => {
  const [activeTab, setActiveTab] = useState('runner'); // 'runner' | 'inspector' | 'logs'
  const [isRunning, setIsRunning] = useState(true);
  const [selectedTestIndex, setSelectedTestIndex] = useState(1);
  const [testSuites, setTestSuites] = useState([
    {
      id: 'SN-01',
      file: 'servicenow-ai.spec.ts',
      name: 'AI Agent Incident Routing',
      duration: '142ms',
      status: 'pass',
      assertions: 4,
      locator: '[data-testid="agent-decision-node"]',
      trace: 'Resolved: Network Operations Group (Confidence: 0.94)'
    },
    {
      id: 'API-02',
      file: 'incident-api.test.ts',
      name: 'REST API Schema & Status 200',
      duration: '88ms',
      status: 'pass',
      assertions: 6,
      locator: 'POST /api/v1/incidents/triage',
      trace: 'Contract validated: JSON schema matches v2.4 specification'
    },
    {
      id: 'UI-03',
      file: 'doctor-booking.spec.ts',
      name: 'Time Slot Double-Click Lock',
      duration: '215ms',
      status: 'pass',
      assertions: 3,
      locator: 'button.slot-chip:not([disabled])',
      trace: 'Optimistic lock engaged; duplicate payload prevented'
    },
    {
      id: 'REG-04',
      file: 'responsive-audit.spec.ts',
      name: 'Mobile Drawer Focus & ARIA',
      duration: '110ms',
      status: 'pass',
      assertions: 5,
      locator: 'nav[role="navigation"]',
      trace: 'Touch target >= 48px; focus trap confirmed on 375px'
    }
  ]);

  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const logs = [
    { type: 'info', text: 'INIT: Initializing Playwright runner with Chromium headless' },
    { type: 'cmd', text: 'page.goto("https://internal.itsm-sandbox.local/incidents")' },
    { type: 'cmd', text: 'page.locator(\'[data-testid="agent-triage"]\').click()' },
    { type: 'pass', text: 'EXPECT: statusBadge.toHaveText("ASSIGNED_TIER_2") -> PASSED (12ms)' },
    { type: 'cmd', text: 'page.locator(\'button[data-testid="submit-order"]\').dblclick()' },
    { type: 'pass', text: 'EXPECT: api.requestCount.toBe(1) -> PASSED (Zero duplicate requests)' },
    { type: 'info', text: 'AUDIT: 0 unhandled promise rejections | 0 console errors' }
  ];

  // Rotate log lines to simulate dynamic test execution
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveLogIndex((prev) => (prev + 1) % logs.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isRunning, logs.length]);

  const activeTest = testSuites[selectedTestIndex];

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl bg-[#121519]/90 border border-[#2A3036] shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden group">
      {/* Top Ambient Glow Gradient */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C6FF4D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#A78BFA]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Futuristic Scanner Line */}
      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6FF4D]/50 to-transparent pointer-events-none animate-scan opacity-60 z-20" />

      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0B0D0F] border-b border-[#2A3036] select-none">
        {/* Mac-style Window Controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#F87171]/80 border border-[#EF4444]" />
          <div className="w-3 h-3 rounded-full bg-[#FBBF24]/80 border border-[#F59E0B]" />
          <div className="w-3 h-3 rounded-full bg-[#74E3A1]/80 border border-[#10B981]" />
          <span className="ml-2 font-mono text-[11px] text-[#A0A7AF] hidden sm:inline">
            quality-control-system // v2.6.4
          </span>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#191E23] border border-[#2A3036]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6FF4D] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6FF4D]" />
          </span>
          <span className="font-mono text-[10px] uppercase font-bold text-[#C6FF4D] tracking-wider">
            QUALITY CHECK: ACTIVE
          </span>
        </div>

        {/* Runner Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="p-1.5 rounded-md bg-[#191E23] text-[#A0A7AF] hover:text-[#C6FF4D] hover:bg-[#222830] transition-colors"
            title={isRunning ? 'Pause Test Runner' : 'Resume Test Runner'}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => {
              setTestSuites([...testSuites]);
              setActiveLogIndex(0);
            }}
            className="p-1.5 rounded-md bg-[#191E23] text-[#A0A7AF] hover:text-[#C6FF4D] hover:bg-[#222830] transition-colors"
            title="Re-run Test Suites"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Secondary URL & Tabs Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-[#121519] border-b border-[#2A3036]/60 text-xs font-mono">
        {/* Mock URL / Target */}
        <div className="flex items-center gap-2 bg-[#0B0D0F] border border-[#2A3036] px-3 py-1 rounded-md text-[#A0A7AF] text-[11px] flex-1 max-w-xs truncate">
          <Shield className="w-3 h-3 text-[#74E3A1] shrink-0" />
          <span className="text-[#C6FF4D] shrink-0">qa-env:</span>
          <span className="truncate">e2e.kalashgupta.dev/inspect</span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-[#0B0D0F] p-0.5 rounded-lg border border-[#2A3036]">
          <button
            onClick={() => setActiveTab('runner')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
              activeTab === 'runner'
                ? 'bg-[#191E23] text-[#C6FF4D] font-semibold border border-[#C6FF4D]/30'
                : 'text-[#A0A7AF] hover:text-[#F4F5F2]'
            }`}
          >
            Suites (4/4)
          </button>
          <button
            onClick={() => setActiveTab('inspector')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
              activeTab === 'inspector'
                ? 'bg-[#191E23] text-[#C6FF4D] font-semibold border border-[#C6FF4D]/30'
                : 'text-[#A0A7AF] hover:text-[#F4F5F2]'
            }`}
          >
            Locator Inspector
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
              activeTab === 'logs'
                ? 'bg-[#191E23] text-[#C6FF4D] font-semibold border border-[#C6FF4D]/30'
                : 'text-[#A0A7AF] hover:text-[#F4F5F2]'
            }`}
          >
            Terminal Trace
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* Suite Health Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#A0A7AF] flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#C6FF4D]" />
              Execution Progress: <span className="text-[#F4F5F2] font-semibold">18 Assertions Verified</span>
            </span>
            <span className="text-[#74E3A1] font-bold">100% PASS</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#191E23] overflow-hidden p-0.5 border border-[#2A3036]">
            <div className="h-full rounded-full bg-gradient-to-r from-[#74E3A1] via-[#C6FF4D] to-[#A78BFA] w-full transition-all duration-500 shadow-sm shadow-[#C6FF4D]/50" />
          </div>
        </div>

        {/* Tab 1: Interactive Test Suites View */}
        {activeTab === 'runner' && (
          <div className="grid grid-cols-1 gap-2">
            {testSuites.map((suite, index) => {
              const isSelected = selectedTestIndex === index;
              return (
                <div
                  key={suite.id}
                  onClick={() => setSelectedTestIndex(index)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#191E23] border-[#C6FF4D]/50 shadow-lg shadow-[#C6FF4D]/5'
                      : 'bg-[#0E1114] border-[#2A3036]/70 hover:border-[#3E4752]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-[#121519] border border-[#74E3A1]/40 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#74E3A1]" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#F4F5F2] truncate">
                          {suite.name}
                        </span>
                        <span className="font-mono text-[10px] text-[#A0A7AF] hidden sm:inline px-1.5 py-0.5 rounded bg-[#121519]">
                          {suite.file}
                        </span>
                      </div>
                      <div className="font-mono text-[10px] text-[#A0A7AF] truncate mt-0.5">
                        {suite.trace}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono text-[10px] text-[#C6FF4D] bg-[#C6FF4D]/10 px-2 py-0.5 rounded border border-[#C6FF4D]/20">
                      {suite.assertions} checks
                    </span>
                    <span className="font-mono text-[10px] text-[#A0A7AF]">
                      {suite.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Locator Inspector View */}
        {activeTab === 'inspector' && (
          <div className="p-4 rounded-xl bg-[#0B0D0F] border border-[#2A3036] space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[#A0A7AF] border-b border-[#2A3036] pb-2">
              <span className="flex items-center gap-1.5 text-[#C6FF4D]">
                <Search className="w-3.5 h-3.5" />
                DOM Selector Inspector
              </span>
              <span className="text-[10px] text-[#74E3A1]">MATCHES: 1 unique node</span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-[#121519] border border-[#3E4752] text-[#F4F5F2]">
                <span className="text-[#A78BFA]">locator</span>
                <span className="text-[#A0A7AF]">(</span>
                <span className="text-[#C6FF4D]">'{activeTest.locator}'</span>
                <span className="text-[#A0A7AF]">)</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded bg-[#191E23] border border-[#2A3036]">
                  <span className="text-[#A0A7AF] block text-[10px] uppercase">Visibility</span>
                  <span className="text-[#74E3A1] font-bold">visibleInViewport = true</span>
                </div>
                <div className="p-2 rounded bg-[#191E23] border border-[#2A3036]">
                  <span className="text-[#A0A7AF] block text-[10px] uppercase">Aria Label</span>
                  <span className="text-[#F4F5F2] truncate block">"Submit Incident Triage"</span>
                </div>
                <div className="p-2 rounded bg-[#191E23] border border-[#2A3036]">
                  <span className="text-[#A0A7AF] block text-[10px] uppercase">Interactive State</span>
                  <span className="text-[#C6FF4D] font-bold">clickable / enabled</span>
                </div>
                <div className="p-2 rounded bg-[#191E23] border border-[#2A3036]">
                  <span className="text-[#A0A7AF] block text-[10px] uppercase">Latency</span>
                  <span className="text-[#F4F5F2]">auto-waited 8.4ms</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Terminal Trace View */}
        {activeTab === 'logs' && (
          <div className="p-3.5 rounded-xl bg-[#0B0D0F] border border-[#2A3036] font-mono text-[11px] space-y-1.5 max-h-48 overflow-y-auto">
            {logs.map((log, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#3E4752] select-none">{String(i + 1).padStart(2, '0')}</span>
                <span
                  className={
                    log.type === 'pass'
                      ? 'text-[#74E3A1]'
                      : log.type === 'cmd'
                      ? 'text-[#C6FF4D]'
                      : 'text-[#A0A7AF]'
                  }
                >
                  {log.text}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Floating Mini Automation Terminal Bar */}
        <div className="p-2.5 rounded-xl bg-[#0B0D0F] border border-[#2A3036] flex items-center justify-between gap-2 font-mono text-[11px]">
          <div className="flex items-center gap-2 truncate">
            <Terminal className="w-3.5 h-3.5 text-[#C6FF4D] shrink-0" />
            <span className="text-[#A0A7AF] shrink-0">$</span>
            <span className="text-[#F4F5F2] truncate">
              {logs[activeLogIndex].text}
            </span>
          </div>
          <span className="text-[10px] text-[#A78BFA] shrink-0 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
            LIVE
          </span>
        </div>
      </div>

      {/* Bottom Technical Annotations Footer */}
      <div className="px-4 py-2.5 bg-[#0B0D0F] border-t border-[#2A3036] flex items-center justify-between text-[10px] font-mono text-[#A0A7AF]">
        <div className="flex items-center gap-3">
          <span>RUNNER: PLAYWRIGHT + CHROMIUM</span>
          <span className="hidden sm:inline">&middot;</span>
          <span className="hidden sm:inline">COVERAGE: E2E + API + AI FLOWS</span>
        </div>
        <div className="flex items-center gap-1 text-[#74E3A1]">
          <span>ZERO FLAKY TESTS</span>
        </div>
      </div>
    </div>
  );
};
