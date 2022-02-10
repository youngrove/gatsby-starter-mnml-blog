export const toUrl = (value: string) =>
  value.replace(/[\s_]+/g, "-").toLowerCase();
