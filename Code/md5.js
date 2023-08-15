import { createHash } from 'node:crypto'

/**
 * Returns an MD5 hash for the given `content`.
 *
 * @param {String} content
 *
 * @returns {String}
 */
function md5(content) {  
  return createHash('md5').update(content).digest('hex')
}
