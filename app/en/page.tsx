import type { Metadata } from "next";
import { EnglishHome } from "@/components/home/english-home";

export const metadata: Metadata = {
  title: "Vlastní směr | Body, mind and money without shortcuts",
  description: "A practical platform for men who want to build a stronger body, steadier mind and clearer financial foundations.",
};

export default function EnglishHomePage() {
  return <EnglishHome />;
}
