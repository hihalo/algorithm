/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var test = [['qwertyuiop'], ['asdfghjkl'], ['zxcvbnm']]
    var len = words.length
    var res = []
    for (var i = 0; i < len; i++) {
        var item = words[i]
        if ( find(item, test) ){
            res.push(item)
        }
    }
    return res;
};

function find(str, test) {
    var testLen = test.length
    var strLen = str.length
        
    var count = 0
    for (var i = 0; i < testLen; i++) {
        var testItem = test[i] + "";
        var flag = 0
        for (var j = 0; j < strLen; j++) {
            if ( testItem.indexOf(str[j]+"") >=0 ){
                flag = 1
            }
        }
        if (flag) {
            count++
        }
            
    }
    return count == 1 ? true : false
}