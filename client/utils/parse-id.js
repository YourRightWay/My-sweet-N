export function parseId (pathname) {
    let str = pathname.split('/');
    let id = str[str.length - 1];
    return id
}
