export const isDev = process.env.NODE_ENV === "development";
export const baseUrl = isDev ? "/" : "/Press/Press/";

export function withBase(path: string): string {
  return `${baseUrl}${path}`.replace("//", "/");
}
