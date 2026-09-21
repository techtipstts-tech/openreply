/**
 * Status label for DM status. Plain text; color carries the state.
 */

import { t } from "@/lib/i18n";

const statusConfig: Record<string, { text: string; label: string }> = {
  SENT: { text: "text-success", label: t("Sent") },
  FAILED: { text: "text-error", label: t("Failed") },
  PENDING: { text: "text-warning", label: t("Pending") },
  SKIPPED_DEDUP: { text: "text-muted", label: t("Dedup") },
  SKIPPED_RATE_LIMIT: { text: "text-warning", label: t("Rate limited") },
  SKIPPED_PLAN_LIMIT: { text: "text-warning", label: t("Skipped") },
  SKIPPED_NO_MATCH: { text: "text-muted", label: t("No match") },
};

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status] ?? statusConfig.PENDING;

  return (
    <span className={`shrink-0 whitespace-nowrap text-sm ${config.text}`}>
      {config.label}
    </span>
  );
}
