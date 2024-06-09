export const isDev = process.env.NODE_ENV === "development";
export const baseUrl = "/";

export function withBase(path: string): string {
  return `${baseUrl}${path}`.replace("//", "/");
}

export function wrapNaN(value: number, fallback: number = 0): number {
  return isNaN(value) ? fallback : value;
}
