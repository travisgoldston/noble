"use client";

import { useEffect } from "react";
import { trackPhoneClick } from "@/lib/track";

export function PhoneClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href^='tel:']");
      if (!link) return;
      trackPhoneClick();
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
