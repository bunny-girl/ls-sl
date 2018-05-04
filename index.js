const Base64 = require('js-base64');

module.exports = {
    base64 : false,
    save(key, value) {
        if(this.validate(key)){
            try{
                let tempVal = value;
                switch (typeof value){
                    case 'number' :
                    case 'undefined' :
                    case 'string' :
                        break;
                    default:
                        tempVal = JSON.parse(value);
                }
                if(this.base64){
                    tempVal = Base64.encode(tempVal);
                }
                localStorage.setItem(key, tempVal);
                return true;
            }
            catch(e){
                return false;
            }
        }else {
            return false;
        }
    },
    load(key) {
        try{
            if(this.validate(key)){
                return Base64.decode(localStorage.getItem(key));
            }else{
                return null;
            }
        }
        catch(e){
            return null;
        }
    },
    clear(key) {
        if(this.validate(key)){
            localStorage.removeItem(key);
            return true;
        }else{
            return false;
        }
    },
    validate(key) {
        return typeof key === 'string' && key.length < 100 && key.length > 0;
    },
    upgrade(option) {}
}