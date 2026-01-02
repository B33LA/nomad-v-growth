import { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PainPoint {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  subtext: string;
}

export interface NavItem {
  label: string;
  href: string;
}