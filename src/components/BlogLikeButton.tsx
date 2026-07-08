"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { Heart } from "lucide-react";

type BlogLikeButtonProps = {
  slug: string;
  initialLikes: number;
};

export function BlogLikeButton({ slug, initialLikes }: BlogLikeButtonProps) {
  const storageKey = useMemo(() => `blog-like:${slug}`, [slug]);

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const handleStorage = (event: StorageEvent) => {
        if (event.key === storageKey) {
          onStoreChange();
        }
      };

      window.addEventListener("storage", handleStorage);
      window.addEventListener("blog-like-change", onStoreChange);

      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener("blog-like-change", onStoreChange);
      };
    },
    [storageKey],
  );

  const getSnapshot = useCallback(() => {
    return window.localStorage.getItem(storageKey) === "true";
  }, [storageKey]);

  const liked = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const likes = initialLikes + (liked ? 1 : 0);

  const toggleLike = () => {
    if (liked) {
      window.localStorage.removeItem(storageKey);
    } else {
      window.localStorage.setItem(storageKey, "true");
    }

    window.dispatchEvent(new Event("blog-like-change"));
  };

  return (
    <button
      type="button"
      aria-label={liked ? "Unlike this blog post" : "Like this blog post"}
      aria-pressed={liked}
      onClick={toggleLike}
      className="group -m-1 inline-flex min-h-7 min-w-10 items-center gap-1.5 rounded-[5px] p-1 text-emerald-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 dark:text-emerald-500 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
    >
      <Heart
        className={`h-3.5 w-3.5 transition-transform group-active:scale-90 ${
          liked ? "fill-current" : ""
        }`}
      />
      <span className="tabular-nums">{likes}</span>
    </button>
  );
}
