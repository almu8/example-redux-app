// TODO too hard way of getting params from url
export function getParamFromUrl(url: string, paramName: string): number {
  const urlParams: string = url.split("?")[1];
  const params = new URLSearchParams(urlParams);

  return +(params.get(paramName)||0);
}
