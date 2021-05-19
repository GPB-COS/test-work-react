
/**
 * 
 * @returns Is Internet Explorer
 */
export function isIE()
{
    return !!window.navigator.userAgent.match(/MSIE |Trident\//);
}