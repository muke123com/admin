export default {
    CHANGE_LOGS_NUM: (state)=>{
        let logs = state.index.logs;
        let newLogs = [];
        logs.map((item,i)=>{
            if(item.indexOf(". ") === -1){
                newLogs.push((i+1) + '. ' + item)
            }else{
                newLogs.push(item)
            }
        });

        return newLogs;
    }
}