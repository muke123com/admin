export default {
    ['ADD_TWICE_LOG'](store){
        store.commit("ADD_LOGS", '通过action触发第一次mutation');
        store.commit("ADD_LOGS", '通过action触发第二次mutation');
    },

    click_calc_btn(store, key){
        if(key == '=') {
            store.commit("GET_RESULT");
            return;
        };
        store.commit("CLICK_CALC_BTN", key);
        store.commit("CHANGE_FORMULA");
    }
}