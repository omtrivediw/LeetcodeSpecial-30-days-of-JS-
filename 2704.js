/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let obj = {
        toBe : function(x) {
            if(val === x)
            return true;
            else 
            throw "Not Equal";
        },
        notToBe : function(y) {
            if(val !== y)
            return true;
            else
            throw "Equal";
        }
    };
    return obj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
