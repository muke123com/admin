export default {
    test_mutations(state){
        state.test.msg += 'x'
    },
    ['CHANGE_TITLE'](state, data){
        state.common.title = data.title;
    },
    ['ADD_LOGS'](state, text){
        state.index.logs.push(text);
    },
    ['CHANGE_LOGS'](state, logs){
        state.index.logs = logs;
    },

    //计算器
    //改变算式
    ['CLICK_CALC_BTN'](state, key){
        if(state['re']){
            state['re'] = false;
        }
        if(['←','CE','C','±','√','1/x'].indexOf(key) != -1){
            state['re'] = true;
        }
        switch (key){
            case '←':
                state.calc.formula = state.calc.formula.substr(0,state.calc.formula.length-1);
                break;
            case 'CE':
                state.calc.formula = "";
                state.calc.result = 0;
                break;
            case 'C':
                state.calc.formula = "";
                break;
            case '±':
                state.calc.formula = -state.calc.formula;
                break;
            case '√':
                state.calc.formula = -state.calc.formula;
                break;
        }
        state.calc.key = key
    },
    ['CHANGE_FORMULA'](state){
        if(!state['re']){
            state.calc.formula += state.calc.key.toString();
        }
    },
    ['GET_RESULT'](state){
        state['re'] = true;
        state.calc.result = eval(state.calc.formula);
    }

}