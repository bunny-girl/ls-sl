export default {
    save(key, value) {
        if(this.validate(key)){
            try{
                switch (typeof value){
                    case 'number' :
                    case 'undefined' :
                    case 'string' :
                        localStorage.setItem(key, value);
                        break;
                    default:
                        localStorage.setItem(key, JSON.parse(value))
                }
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
        if(this.validate(key)){
            return localStorage.getItem(key);
        }else{
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