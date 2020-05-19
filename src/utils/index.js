/**
 * @author https://github.com/acvetkov
 * @overview JSON helper
 */

/**
 * @param {Blob} body
 * @returns {Object}
 */
export function toJSON(body) {
    return parseJSON(body);
}

/**
 * @param {*} data
 * @param {*} [defaultValue]
 * @returns {*}
 */
export function parseJSON(data, defaultValue) {
    try {
        return JSON.parse(data);
    } catch (e) {
        return defaultValue || data;
    }
}
