/**
 * Lightweight, privacy-first production telemetry client for omshinde.site
 * Transmits non-blocking telemetry beacons to GaavConnect ingestion endpoint.
 */

const ENDPOINT =
  process.env.NEXT_PUBLIC_METRICS_ENDPOINT ||
  "https://www.gaavconnect.in/api/external-metrics/portfolio";

function getSessionId() {
  if (typeof window === "undefined") return "";
  try {
    let sid = sessionStorage.getItem("om_telemetry_sid");
    if (!sid) {
      sid = "om_" + Math.random().toString(36).substring(2, 12) + Date.now().toString(36);
      sessionStorage.setItem("om_telemetry_sid", sid);
    }
    return sid;
  } catch {
    return "";
  }
}

export function isDevSession() {
  if (typeof window === "undefined") return false;
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("dev") === "true" || params.get("test") === "true") {
      sessionStorage.setItem("om_dev_flag", "true");
      return true;
    }
    if (sessionStorage.getItem("om_dev_flag") === "true") {
      return true;
    }
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") {
      return true;
    }
  } catch {
    // fallback
  }
  return false;
}

export function trackEvent({ action = "view", path, target = "", referrer }) {
  if (typeof window === "undefined") return;

  const isDev = isDevSession();
  const currentPath = path || window.location.pathname || "/";
  const ref = referrer !== undefined ? referrer : (document.referrer || "");

  let timezone = "";
  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  } catch {
    // fallback
  }

  const payload = {
    action,
    path: currentPath,
    target: target ? String(target).toLowerCase().replace(/[^a-z0-9_]/g, "_") : "",
    sessionId: getSessionId(),
    referrer: ref,
    timezone,
    language: navigator.language || "en",
    isDev,
  };

  const jsonStr = JSON.stringify(payload);

  // Use sendBeacon for non-blocking page unload safety, fallback to keepalive fetch
  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([jsonStr], { type: "application/json" });
      const success = navigator.sendBeacon(ENDPOINT, blob);
      if (success) return;
    }
  } catch {
    // fallback to fetch
  }

  try {
    fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonStr,
      keepalive: true,
      mode: "cors",
    }).catch(() => {
      // Fail silently to never impact user experience
    });
  } catch {
    // Fail silently
  }
}

export function trackPageView(path) {
  trackEvent({ action: "view", path });
}

export function trackProjectClick(projectName) {
  trackEvent({ action: "project_click", target: projectName });
}

export function trackResumeAction(action = "download") {
  trackEvent({ action: "resume_download", target: action });
}

export function trackContactClick(channel) {
  trackEvent({ action: "contact_click", target: channel });
}

