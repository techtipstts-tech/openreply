import Link from "next/link";
import { t } from "@/lib/i18n";

export const metadata = {
  title: t("Check your email - OpenReply"),
  description: t("A sign-in link was sent to your email."),
};

export default function VerifyRequestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-foreground">
            OpenReply
          </h1>
        </div>

        <div className="panel rounded p-8 text-center">
          <h2 className="text-lg font-semibold mb-2">
            {t("Check your email")}
          </h2>
          <p className="text-sm text-muted">
            {t(
              "We sent you a secure sign-in link. Open it on this device to continue."
            )}
          </p>
          <p className="mt-6 text-sm">
            <Link href="/login" className="text-accent-ink hover:underline">
              {t("Back to sign in")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
