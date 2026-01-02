import { Target, Mail, Phone, Share2, TrendingUp, ShieldAlert, BarChart3, Users } from "lucide-react";
import { Service, PainPoint, ProcessStep, Stat } from "./types";

export const COMPANY_NAME = "Nomad V Growth";
export const COMPANY_PARENT = "Nomad V Group";

export const PAIN_POINTS: PainPoint[] = [
  {
    title: "Inconsistent Leads",
    description: "Feast or famine cycles. You never know where next month's revenue is coming from."
  },
  {
    title: "Low Reply Rates",
    description: "Your emails land in spam or get ignored. Your market is saturated and tired of noise."
  },
  {
    title: "Wasted Ad Spend",
    description: "Burning cash on CPC without seeing qualified meetings on the calendar."
  },
  {
    title: "Unpredictable Pipeline",
    description: "You cannot forecast growth because your top-of-funnel is broken."
  }
];

export const SERVICES: Service[] = [
  {
    title: "LinkedIn Outreach",
    description: "Daily outbound on autopilot. We build authority and start conversations with decision-makers directly in their DMs.",
    icon: Share2
  },
  {
    title: "Cold Email Campaigns",
    description: "Scalable multi-inbox infrastructure that bypasses spam filters and delivers your offer to thousands of prospects.",
    icon: Mail
  },
  {
    title: "Cold Calling",
    description: "Direct deal acceleration. Our SDRs pick up the phone to qualify leads and book meetings instantly.",
    icon: Phone
  },
  {
    title: "Engagement Content",
    description: "Inbound + Authority growth. We turn your profile into a conversion asset that nurtures leads before we even speak.",
    icon: Users
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: "01", title: "ICP & Positioning", description: "We identify exactly who buys and craft an offer they cannot ignore." },
  { number: "02", title: "Data & Targeting", description: "We build verified lists of decision-makers matching your ideal client profile." },
  { number: "03", title: "Outreach Setup", description: "We deploy the infrastructure (domains, inboxes, scripts) to ensure deliverability." },
  { number: "04", title: "Daily Optimization", description: "We A/B test angles, hooks, and subject lines daily to maximize reply rates." },
  { number: "05", title: "Booked Meetings", description: "Qualified leads land on your calendar. You close the deals." },
];

export const RESULTS_STATS: Stat[] = [
  { label: "Pipeline Generated", value: "$4.2M+", subtext: "In the last quarter" },
  { label: "Meetings Booked", value: "1,200+", subtext: "Across all clients" },
  { label: "Avg ROI", value: "14x", subtext: "Return on Ad Spend" },
];