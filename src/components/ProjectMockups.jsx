import React from 'react';
import {
  Bot,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Bus,
  Activity,
  Users,
  Layers,
  BookOpen,
  Languages
} from 'lucide-react';

export const SchoolTransportMockup = () => {
  return (
    <div className="w-full h-full min-h-[220px] p-4 bg-[#0B0D0F] rounded-xl border border-[#2A3036] flex flex-col justify-between font-mono text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2A3036]/60">
        <div className="flex items-center gap-2">
          <Bus className="w-4 h-4 text-[#C6FF4D]" />
          <span className="text-[#F4F5F2] font-bold text-[11px]">FLEET DISPATCH // ROUTE-04</span>
        </div>
        <span className="text-[10px] text-[#C6FF4D] bg-[#C6FF4D]/10 px-2 py-0.5 rounded border border-[#C6FF4D]/20">
          DISPATCH: ON SCHEDULE
        </span>
      </div>

      {/* Transit Timeline Grid */}
      <div className="space-y-1.5 my-2">
        <div className="flex items-center justify-between p-1.5 rounded bg-[#121519] border border-[#2A3036] text-[11px]">
          <span className="text-[#F4F5F2] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#74E3A1]" />
            Bus #12 &middot; Morning Batch (18 Stops)
          </span>
          <span className="text-[#74E3A1] text-[10px]">07:15 AM DEPARTED</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded bg-[#121519] border border-[#2A3036] text-[11px]">
          <span className="text-[#F4F5F2] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF4D]" />
            Active Driver: Ramesh K. (Verified)
          </span>
          <span className="text-[#C6FF4D] text-[10px]">GPS SYNCED</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded bg-[#121519] border border-[#2A3036] text-[11px]">
          <span className="text-[#F4F5F2] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
            Schedule Conflict Check
          </span>
          <span className="text-[#74E3A1] text-[10px]">ZERO CLASHES</span>
        </div>
      </div>

      {/* Bottom Assertion */}
      <div className="pt-2 border-t border-[#2A3036]/60 flex items-center justify-between text-[10px] text-[#A0A7AF]">
        <span>SPEC: TC-SCH-01 // RESPONSIVE UI</span>
        <span className="text-[#74E3A1] flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" />
          WORKFLOW VERIFIED
        </span>
      </div>
    </div>
  );
};

export const OncologyHealthcareMockup = () => {
  return (
    <div className="w-full h-full min-h-[220px] p-4 bg-[#0B0D0F] rounded-xl border border-[#2A3036] flex flex-col justify-between font-mono text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2A3036]/60">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#74E3A1]" />
          <span className="text-[#F4F5F2] font-bold text-[11px]">ONCOLOGY CLINICAL // PT-8924</span>
        </div>
        <span className="text-[10px] text-[#74E3A1] bg-[#74E3A1]/10 px-2 py-0.5 rounded border border-[#74E3A1]/20">
          REGIMEN: CYCLE 3/6
        </span>
      </div>

      {/* Clinical Metrics */}
      <div className="p-2.5 rounded-lg bg-[#121519] border border-[#2A3036] space-y-2 my-auto">
        <div className="flex items-center justify-between text-[11px]">
          <div>
            <div className="text-xs font-heading font-bold text-[#F4F5F2]">Protocol: FOLFOX Regimen</div>
            <div className="text-[10px] text-[#A0A7AF]">Oncology Care Plan &middot; Verified</div>
          </div>
          <span className="text-[10px] text-[#C6FF4D] bg-[#C6FF4D]/10 px-2 py-0.5 rounded">
            STABLE
          </span>
        </div>

        {/* Vitals Bar */}
        <div className="grid grid-cols-3 gap-1.5 pt-1 text-[10px]">
          <div className="p-1 rounded bg-[#191E23] text-center border border-[#2A3036]">
            <span className="text-[#A0A7AF] block text-[9px]">BP</span>
            <span className="text-[#F4F5F2] font-bold">118/76</span>
          </div>
          <div className="p-1 rounded bg-[#191E23] text-center border border-[#2A3036]">
            <span className="text-[#A0A7AF] block text-[9px]">WBC</span>
            <span className="text-[#74E3A1] font-bold">4.8 k/uL</span>
          </div>
          <div className="p-1 rounded bg-[#191E23] text-center border border-[#2A3036]">
            <span className="text-[#A0A7AF] block text-[9px]">DOSAGE</span>
            <span className="text-[#C6FF4D] font-bold">SAFE RANGE</span>
          </div>
        </div>
      </div>

      {/* Bottom Assertion */}
      <div className="pt-2 border-t border-[#2A3036]/60 flex items-center justify-between text-[10px] text-[#A0A7AF]">
        <span>FORM BOUNDARY: SAFE TOLERANCE</span>
        <span className="text-[#74E3A1]">DATA VALIDATED</span>
      </div>
    </div>
  );
};

export const HRMSMockup = () => {
  return (
    <div className="w-full h-full min-h-[220px] p-4 bg-[#0B0D0F] rounded-xl border border-[#2A3036] flex flex-col justify-between font-mono text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2A3036]/60">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#C6FF4D]" />
          <span className="text-[#F4F5F2] font-bold text-[11px]">ENTERPRISE HRMS // PORTAL</span>
        </div>
        <span className="text-[10px] text-[#C6FF4D] bg-[#C6FF4D]/10 px-2 py-0.5 rounded border border-[#C6FF4D]/20">
          ROLE: HR ADMIN
        </span>
      </div>

      {/* HR Modules */}
      <div className="space-y-1.5 my-2">
        <div className="flex items-center justify-between p-1.5 rounded bg-[#121519] border border-[#2A3036] text-[11px]">
          <span className="text-[#F4F5F2]">Monthly Attendance Rate</span>
          <span className="text-[#74E3A1] text-[10px] font-bold">98.4% (ON TRACK)</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded bg-[#121519] border border-[#2A3036] text-[11px]">
          <span className="text-[#F4F5F2]">Payroll Disbursed // Pro-rata Rules</span>
          <span className="text-[#74E3A1] text-[10px]">VERIFIED 100%</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded bg-[#121519] border border-[#2A3036] text-[11px]">
          <span className="text-[#F4F5F2]">Role-based Access Control (ACL)</span>
          <span className="text-[#74E3A1] text-[10px]">ENFORCED</span>
        </div>
      </div>

      {/* Bottom Assertion */}
      <div className="pt-2 border-t border-[#2A3036]/60 flex items-center justify-between text-[10px] text-[#A0A7AF]">
        <span>SPEC: TC-HRM-01 // CROSS-BROWSER</span>
        <span className="text-[#C6FF4D]">WORKFLOW SECURE</span>
      </div>
    </div>
  );
};

export const WorkspaceUtilizationMockup = () => {
  return (
    <div className="w-full h-full min-h-[220px] p-4 bg-[#0B0D0F] rounded-xl border border-[#2A3036] flex flex-col justify-between font-mono text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2A3036]/60">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#A78BFA]" />
          <span className="text-[#F4F5F2] font-bold text-[11px]">SERVICENOW HACKATHON // WORKSPACE</span>
        </div>
        <span className="text-[10px] text-[#A78BFA] bg-[#A78BFA]/10 px-2 py-0.5 rounded border border-[#A78BFA]/20">
          FLOW DESIGNER
        </span>
      </div>

      {/* Booking State Cards */}
      <div className="grid grid-cols-2 gap-2 my-2">
        <div className="p-2 rounded bg-[#121519] border border-[#2A3036] space-y-1">
          <span className="text-[9px] text-[#A0A7AF] uppercase">Smart Desk Allocation</span>
          <div className="text-[11px] text-[#F4F5F2] font-sans font-bold">
            Floor 3 &middot; Desk 14B
          </div>
          <span className="text-[9px] text-[#74E3A1]">Auto-allocated</span>
        </div>

        <div className="p-2 rounded bg-[#191E23] border border-[#A78BFA]/40 space-y-1">
          <span className="text-[9px] text-[#A78BFA] uppercase">Meeting Room 204</span>
          <div className="text-[11px] text-[#F4F5F2] font-sans font-bold">
            14:00 - 15:00 Confirmed
          </div>
          <span className="text-[9px] text-[#C6FF4D]">15-min Auto-release</span>
        </div>
      </div>

      {/* Bottom Assertion */}
      <div className="pt-2 border-t border-[#2A3036]/60 flex items-center justify-between text-[10px] text-[#A0A7AF]">
        <span>GLIDERECORD & TABLES: CONFIGURED</span>
        <span className="text-[#74E3A1]">MY BOOKINGS: ACTIVE</span>
      </div>
    </div>
  );
};

export const LearningOutcomeMockup = () => {
  return (
    <div className="w-full h-full min-h-[220px] p-4 bg-[#0B0D0F] rounded-xl border border-[#2A3036] flex flex-col justify-between font-mono text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2A3036]/60">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#74E3A1]" />
          <span className="text-[#F4F5F2] font-bold text-[11px]">LEARNING OUTCOME // VERIFICATION</span>
        </div>
        <span className="text-[10px] text-[#74E3A1] bg-[#74E3A1]/10 px-2 py-0.5 rounded border border-[#74E3A1]/20">
          STATUS: AUDITED
        </span>
      </div>

      {/* Outcome Cards */}
      <div className="space-y-1.5 my-2">
        <div className="flex items-center justify-between p-1.5 rounded bg-[#121519] border border-[#2A3036] text-[11px]">
          <span className="text-[#F4F5F2]">Curriculum Mastery Tracking</span>
          <span className="text-[#74E3A1] text-[10px]">94% COMPLIANT</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded bg-[#121519] border border-[#2A3036] text-[11px]">
          <span className="text-[#F4F5F2]">Submission Integrity Validation</span>
          <span className="text-[#74E3A1] text-[10px]">PASS (0 INTEGRITY FLAGS)</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded bg-[#121519] border border-[#2A3036] text-[11px]">
          <span className="text-[#F4F5F2]">Defect Retest #LOP-214 (Filter state)</span>
          <span className="text-[#C6FF4D] text-[10px]">RESOLVED & VERIFIED</span>
        </div>
      </div>

      {/* Bottom Assertion */}
      <div className="pt-2 border-t border-[#2A3036]/60 flex items-center justify-between text-[10px] text-[#A0A7AF]">
        <span>ROLE WORKFLOWS: STUDENT / INSTRUCTOR</span>
        <span className="text-[#74E3A1]">RELEASE SIGN-OFF</span>
      </div>
    </div>
  );
};

export const MultilingualAIMockup = () => {
  return (
    <div className="w-full h-full min-h-[220px] p-4 bg-[#0B0D0F] rounded-xl border border-[#2A3036] flex flex-col justify-between font-mono text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2A3036]/60">
        <div className="flex items-center gap-2">
          <Languages className="w-4 h-4 text-[#A78BFA]" />
          <span className="text-[#F4F5F2] font-bold text-[11px]">MULTILINGUAL AI // CBSE / ICSE</span>
        </div>
        <span className="text-[10px] text-[#A78BFA] bg-[#A78BFA]/10 px-2 py-0.5 rounded border border-[#A78BFA]/20">
          CURRICULUM AI
        </span>
      </div>

      {/* Split Prompt View */}
      <div className="grid grid-cols-2 gap-2 my-2">
        <div className="p-2 rounded bg-[#121519] border border-[#2A3036] space-y-1">
          <span className="text-[9px] text-[#A0A7AF] uppercase">Hindi Query Input</span>
          <div className="text-[10px] text-[#F4F5F2] font-sans truncate">
            "प्रकाश संश्लेषण की प्रक्रिया..."
          </div>
          <span className="text-[9px] text-[#C6FF4D]">CBSE Class 10 Science</span>
        </div>

        <div className="p-2 rounded bg-[#191E23] border border-[#A78BFA]/40 space-y-1">
          <span className="text-[9px] text-[#A78BFA] uppercase">AI Response Synthesis</span>
          <div className="text-[10px] text-[#F4F5F2] font-sans truncate">
            Photosynthesis equations & facts
          </div>
          <span className="text-[9px] text-[#74E3A1]">Structured Format PASS</span>
        </div>
      </div>

      {/* Bottom Assertion */}
      <div className="pt-2 border-t border-[#2A3036]/60 flex items-center justify-between text-[10px] text-[#A0A7AF]">
        <span>POSITIVE & NEGATIVE TEST MATRIX</span>
        <span className="text-[#74E3A1]">STATUS: 100% PASS</span>
      </div>
    </div>
  );
};

export const AcademicIntegrityMockup = () => {
  return (
    <div className="w-full h-full min-h-[220px] p-4 bg-[#0B0D0F] rounded-xl border border-[#2A3036] flex flex-col justify-between font-mono text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2A3036]/60">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C6FF4D]" />
          <span className="text-[#F4F5F2] font-bold text-[11px]">SUBMISSION INTEGRITY VERIFIER</span>
        </div>
        <span className="text-[10px] text-[#C6FF4D] bg-[#C6FF4D]/10 px-2 py-0.5 rounded border border-[#C6FF4D]/20">
          CHECKS COMPLETE
        </span>
      </div>

      {/* Verification Matrix */}
      <div className="space-y-1.5 my-2">
        <div className="flex items-center justify-between p-1.5 rounded bg-[#121519] border border-[#2A3036] text-[11px]">
          <span className="text-[#F4F5F2]">Document Format Validation (.pdf, .docx)</span>
          <span className="text-[#74E3A1] text-[10px]">VERIFIED CLEAN</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded bg-[#121519] border border-[#2A3036] text-[11px]">
          <span className="text-[#F4F5F2]">Corrupt / Zero-byte Negative Boundary</span>
          <span className="text-[#74E3A1] text-[10px]">CORRECTLY REJECTED</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded bg-[#121519] border border-[#2A3036] text-[11px]">
          <span className="text-[#F4F5F2]">Cryptographic Submission Receipt</span>
          <span className="text-[#C6FF4D] text-[10px]">ISSUED WITH AUDIT HASH</span>
        </div>
      </div>

      {/* Bottom Assertion */}
      <div className="pt-2 border-t border-[#2A3036]/60 flex items-center justify-between text-[10px] text-[#A0A7AF]">
        <span>SPEC: TC-AIV-02 // REGRESSION SUITE</span>
        <span className="text-[#74E3A1]">RELEASE CANDIDATE OK</span>
      </div>
    </div>
  );
};

export const ServiceNowFlowMockup = () => {
  return (
    <div className="w-full h-full min-h-[220px] p-4 bg-[#0B0D0F] rounded-xl border border-[#2A3036] flex flex-col justify-between font-mono text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#2A3036]/60">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#A78BFA]" />
          <span className="text-[#F4F5F2] font-bold text-[11px]">SN_AGENT_TRIAGE // INC004829</span>
        </div>
        <span className="text-[10px] text-[#74E3A1] bg-[#74E3A1]/10 px-2 py-0.5 rounded border border-[#74E3A1]/20">
          CONFIDENCE: 94.2%
        </span>
      </div>

      {/* Workflow Diagram Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-auto items-center py-3">
        {/* Step 1 */}
        <div className="p-2.5 rounded-lg bg-[#121519] border border-[#2A3036] space-y-1">
          <span className="text-[9px] text-[#A0A7AF] uppercase block">Input Ingestion</span>
          <div className="text-[11px] text-[#F4F5F2] truncate font-sans">
            "VPN tunnel dropping"
          </div>
          <span className="text-[9px] text-[#C6FF4D]">Priority: P2</span>
        </div>

        {/* Step 2 (AI Node) */}
        <div className="p-2.5 rounded-lg bg-[#191E23] border border-[#A78BFA]/50 space-y-1 relative shadow-lg shadow-[#A78BFA]/10">
          <span className="text-[9px] text-[#A78BFA] uppercase block flex items-center justify-between">
            <span>AI Intent Node</span>
            <Sparkles className="w-3 h-3 text-[#A78BFA]" />
          </span>
          <div className="text-[11px] text-[#F4F5F2] truncate">
            Net_Infrastructure
          </div>
          <span className="text-[9px] text-[#74E3A1]">Threshold &gt; 0.85 PASS</span>
        </div>

        {/* Step 3 */}
        <div className="p-2.5 rounded-lg bg-[#121519] border border-[#74E3A1]/40 space-y-1">
          <span className="text-[9px] text-[#74E3A1] uppercase block">Routing Target</span>
          <div className="text-[11px] text-[#F4F5F2] truncate">
            Tier-2 Network Ops
          </div>
          <span className="text-[9px] text-[#A0A7AF]">Auto-dispatched</span>
        </div>
      </div>

      {/* Bottom Assertion Bar */}
      <div className="pt-2 border-t border-[#2A3036]/60 flex items-center justify-between text-[10px] text-[#A0A7AF]">
        <span>TEST SPEC: TC-SNAI-01</span>
        <span className="text-[#74E3A1] flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" />
          ROUTING VERIFIED
        </span>
      </div>
    </div>
  );
};
