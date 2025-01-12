import { For } from "@/components/common";

type UseElementList = (type?: "withWrapper" | "base") => [typeof For.List | typeof For.Base];

// prettier-ignore
export const useElementList: UseElementList = (type = "withWrapper") => [type === "withWrapper" ? For.List : For.Base];
