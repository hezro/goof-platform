/**
 * MD5 hash example`.
 *
 */

var data = "do shash'owania";
var crypto = require('crypto');
crypto.createHash('md5').update(data).digest("hex");
