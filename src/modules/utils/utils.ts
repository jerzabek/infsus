export const isNumber = (value: any) => {
  return !!value && !isNaN(Number(value))
}

export function appendNumericProperty<T = number>(
  key: string,
  value: any,
  params: Record<string, T>
): Record<string, T | number> {
  return isNumber(value) ? { ...params, [key]: +value } : params
}

export function buildQueryString(params: Record<string, any>): string {
  return Object.entries(params)
    .filter(([, value]) => value !== undefined) // filter out undefined values
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`) // map [key, value] pairs to 'key=value'
    .join('&') // join the parts with '&'
}
