import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "vasudev_feedback_entries";

function readAll() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeAll(entries) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

/**
 * useFeedback — a tiny client-side "database" for the static site's
 * feedback form, backed by localStorage. Used by both the Feedback form
 * (write) and the Feedback Admin Panel page (read/delete).
 */
export default function useFeedback() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(readAll());
  }, []);

  const addEntry = useCallback((entry) => {
    const record = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...entry,
    };
    setEntries((prev) => {
      const next = [record, ...prev];
      writeAll(next);
      return next;
    });
    return record;
  }, []);

  const removeEntry = useCallback((id) => {
    setEntries((prev) => {
      const next = prev.filter((e) => e.id !== id);
      writeAll(next);
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    writeAll([]);
    setEntries([]);
  }, []);

  return { entries, addEntry, removeEntry, clearAll };
}
